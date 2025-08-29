import { addDoc, collection, Timestamp } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import { useReducer } from "react";

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다.
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

// 전달 받는 action에 따른 state 업데이트를 위한 함수입니다.
const storeReducer = (state, action) => {
  switch (action.type) {
    case "addDoc":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "error":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    case "isPending":
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

export const useFireStore = (transaction) => {
  // 2. Firebase에서 데이터를 불러오는 함수
  const [response, dispatch] = useReducer(storeReducer, initState);
  // 결과적으로 useReducer를 통해서 response라는 state를 관리합니다.

  // 1. 컬렉션을 만드는 메서드
  const colRef = collection(appFireStore, transaction); // 이 컬랙션의 주소를 반환하는 역할
  // - Firestore 객체 // config 파일에 있음
  // - 컬랙션의 이름 -> transaction으로 짓는 관례

  // 컬렉션에 문서를 추가합니다.
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      // 3. Timestamp : firebase에서 제공하는 날짜 객체
      const createdTime = Timestamp.fromDate(new Date());

      // document의 주소를 불러오는 함수
      const docRef = await addDoc(colRef, { ...doc, createdTime }); // 기존 객체에 createdTime 추가

      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  // 컬렉션에서 데이터를 제거하는 함수
  const deleteDocument = (id) => {};

  // 컬렉션에서 데이터를 수정하는 함수
  const editDocument = (id) => {};

  return { addDocument, deleteDocument, editDocument, response };
};

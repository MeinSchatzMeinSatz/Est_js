// 상품 정보, 목록 가져오는 요청
// (1) xhr 객체 생성: 데이터를 요청하고 응답받을 수 있는 도구
const xhr = new XMLHttpRequest();

// (2) 요청 초기화(메서드, 요청 URL 설정)
xhr.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");

//(3) 응답 처리 방식
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // 통신 완료
        if (xhr.status === 200) {
            // 응답이 성공적일 때
            const response = JSON.parse(xhr.responseText);
            console.log("상품 목록 :", response);
        } else {
            console.log("Error :", xhr.status);
        }
    }
};

// (4) 요청 전송
// xhr.send();

// readyState: 현재 통신이 어디까지 진행되었는지를 나타내는 숫자값 상태
// status: 응답이 제대로 왔는지... 서버가 보낸 응답상태가 정상인지 오류인지 알려준다. Ex: 200, 404, 500

// 2. 상품 수정하기
/*
1. 상품 목록 조회하고,
2. 목록 중 첫 번째 상품의 id를 이용해서 상세 정보를 조회하기.
3. 그 상품의 가격을 수정하는 요청을 보낼 것!
 */

// (1) 상품 목록 조회
const xhr1 = new XMLHttpRequest(); // 객체 생성
xhr1.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4) {
        // 통신 완료
        if (xhr1.status === 200) {
            // 응답이 성공적일 때
            const products = JSON.parse(xhr1.responseText);
            console.log("(1) 상품 목록", products);

            if (products.length > 0) {
                const productId = products[0].id;
                console.log("(2) 상품 ID", productId);

                // (2) 상품 상세 정보 조회
                const xhr2 = new XMLHttpRequest();
                xhr2.open(
                    "GET",
                    `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
                );
                xhr2.onreadystatechange = function () {
                    if (xhr2.readyState === 4) {
                        if (xhr2.status === 200) {
                            const detail = JSON.parse(xhr2.responseText);
                            console.log("(3) 상품 상세 정보", detail);

                            // (3) 상품 정보 수정(가격)
                            const xhr3 = new XMLHttpRequest();
                            xhr3.open(
                                "PUT",
                                `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
                            );
                            // header 설정
                            xhr3.setRequestHeader(
                                "Content-Type",
                                "application/json"
                            );

                            // 전송 데이터 객체
                            const updateProduct = {
                                ...detail,
                                price: detail.price + 1000,
                            };
                            xhr3.onreadystatechange = function () {
                                if (xhr3.readyState === 4) {
                                    if (xhr3.status === 200) {
                                        console.log(
                                            "전송 완료!",
                                            JSON.parse(xhr3.responseText)
                                        );
                                        console.log(detail);
                                    } else {
                                        console.error("Error:", xhr1.status);
                                    }
                                }
                            };
                            // (수정된)데이터 전송
                            xhr3.send(JSON.stringify(updateProduct));
                        } else {
                            console.error("Error:", xhr1.status);
                        }
                    }
                };
                xhr2.send();
            }
        } else {
            console.error("Error:", xhr1.status);
        }
    }
};

xhr1.send();

// => 콜백 지옥!!
// 앞선 요청의 결과가 다음 요청에 필요할 때

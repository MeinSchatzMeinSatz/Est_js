// catch 메서드는 한 개의 콜백 함수를 인수로 전달받는다. catch 메서드의 콜백 함수는 프로미스가 rejected 상태인 경우에만 호출된다.

// rejected
new Promise((_, reject) => reject(new Error("rejected"))).catch((e) =>
    console.log(e)
);

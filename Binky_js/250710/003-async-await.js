// async, await
// async: 키워드를 붙이면 Promise 객체를 반환하는 함수
async function test() {
    return "Hello world";
    // return Promise.resolve("Hello World");
}

console.log(test());

// await: Promise가 처리될 때까지 기다린다!! => 함수 실행이 일시 정지.
// 이 코드는 비동기 코드지만 한 줄씩 순차적으로 실행된다.
async function message() {
    console.log("1. 함수 시작");

    const hello = await new Promise((resolve) => {
        console.log("2. Promise 생성");
        setTimeout(() => {
            console.log("3. setTimeout 콜백 실행");
            resolve("hello");
        }, 1000);
    });

    // 함수 실행 재개
    console.log("4. hello 값 받음", hello);

    const world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("world");
        }, 0);
    });

    // 함수 실행 재개
    console.log("5. world 값 받음", world);
    console.log(`6. ${hello} ${world}`);
}

message();

// console.log("message 함수 밑에 있어요!!");

/*
  // promise로 작성했을 경우
    function message() {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000);
    }).then((hello) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${hello} world`);
            }, 1000);
        });
    }).then((result) => {
        console.log(result);
    });
}
message();
  */

async function getProducts() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product"
        );

        if (!response.ok) {
            throw new Error("상품 목록 조회 실패");
        }

        const data = await response.json();
        console.log("상품 목록", data);
    } catch {
        console.Error("오류 발생", error);
    }
}
getProducts();

// 상품 ID가 productId 인 상품을 삭제하는 요청
async function deleteProduct(productId) {
    try {
        const response = await fetch(
            `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error("삭제 실패");
        }

        const data = await response.json();
        console.log("삭제 완료", data);
    } catch (error) {
        console.error("삭제 중 오류", error);
    }
}

// deleteProduct(2);

async function createProduct() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 10,
                    productName: "[new] 개발 노트",
                    price: 15000,
                    stockCount: 10,
                    thumbnailImg: "",
                    option: [],
                    discountRate: 0,
                    shippingFee: 2500,
                    detailInfoImage: [],
                    viewCount: 100,
                    pubDate: new Date().toISOString(),
                    modDate: new Date().toISOString(),
                }),
            }
        );

        if (!response) {
            throw new Error("생성 실패");
        }

        const data = await response.json();
        console.log("생성 완료", data);
    } catch (error) {
        console.error("생성중 오류", error);
    }
}

createProduct();

/*
- Promise 체이닝이 복잡해지는 경우, 편리.
- 중간 결과를 변수에 저장해야 할 때.
*/

// 퀴즈 실행 순서
async function run() {
    console.log("Start");

    const a = await new Promise((resolve) =>
        setTimeout(() => resolve("A"), 1000)
    );
    console.log(a);

    const b = await new Promise((resolve) =>
        setTimeout(() => resolve("B"), 500)
    );
    console.log(b);

    console.log("End");
}
run();

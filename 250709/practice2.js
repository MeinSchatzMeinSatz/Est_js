const userData =
    '[{"_id":"5e80777f673acf89c007ff91","age":27,"eyeColor":"green","name":"Angelina Chang","gender":"female","email":"angelinachang@kangle.com","phone":"+1 (938) 477-2821"},{"_id":"5e80777feee717674b817fd2","age":25,"eyeColor":"green","name":"Deidre Cobb","gender":"female","email":"deidrecobb@kangle.com","phone":"+1 (938) 477-2824"},{"_id":"5e80777fac368a4578dda85d","age":25,"eyeColor":"blue","name":"Jolene Franks","gender":"female","email":"jolenefranks@kangle.com","phone":"+1 (985) 536-3981"},{"_id":"5e80777ff3717874cbc78e44","age":31,"eyeColor":"brown","name":"Waters Hardin","gender":"male","email":"watershardin@kangle.com","phone":"+1 (938) 559-2224"},{"_id":"5e80777fe36842ea9e024fcd","age":34,"eyeColor":"green","name":"Jody Chaney","gender":"female","email":"jodychaney@kangle.com","phone":"+1 (878) 587-2602"},{"_id":"5e80777fafd591f57344eb33","age":31,"eyeColor":"green","name":"Ortiz Maldonado","gender":"male","email":"ortizmaldonado@kangle.com","phone":"+1 (986) 509-2753"},{"_id":"5e80777f20e48e9ada226862","age":25,"eyeColor":"brown","name":"Stacy Burris","gender":"female","email":"stacyburris@kangle.com","phone":"+1 (864) 577-3500"},{"_id":"5e80777faf334f84a2c90595","age":33,"eyeColor":"brown","name":"Davenport Levy","gender":"male","email":"davenportlevy@kangle.com","phone":"+1 (990) 600-2700"}]';

/*
‘데이터 호출’ 버튼 클릭 시, 데이터를 테이블 형태로 브라우저에 렌더링(<tbody>)
테이블 헤더 클릭 시, 해당 key 기준으로 오름차순/내림차순 정렬
정렬된 결과는 동적으로 <tbody>에 innerHTML로 출력
*/

// (1) 데이터를 테이블에 렌더링
// (2)

const renderingButton = document.querySelector("#renderingButton");
const tableBody = document.querySelector("#renderingDataTable > tbody");
const users = JSON.parse(userData);
console.log(users);

// 정렬 방향을 저장할 함수
let asc = true;

// 정렬을 위한 함수
function sort(key) {
    // 여기에 코드 작성
    if (asc) {
        // 오름차순
        const sortedData = users.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            } else {
                return 0;
            }
        });
        asc = false;
        renderTable(sortedData);
    } else {
        // 내림차순
        const sortedData = users.sort((a, b) => {
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            } else {
                return 0;
            }
        });
        asc = true;
        renderTable(sortedData);
    }
}

// 렌더링을 위한 함수
function renderTable(data) {
    // 여기에 코드 작성
    const userDataArr = []; //html 문자열(tr)을 누적하기 위함

    for (let item of data) {
        console.log(item);
        userDataArr.push(`
            <tr>
                <td>${item._id}</td>
                <td>${item.age}</td>
                <td>${item.eyeColor}</td>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
            </tr>
            `);
    }
    tableBody.innerHTML = userDataArr.join("");

    // tableBody.innerHTML = "";

    // data.forEach((info) => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //     <td>${info._id}</td>
    //     <td>${info.age}</td>
    //     <td>${info.eyeColor}</td>
    //     <td>${info.name}</td>
    //     <td>${info.gender}</td>
    //     <td>${info.email}</td>
    //     <td>${info.phone}</td>
    //     `;
    //     tableBody.appendChild(row);
    // });
}

renderingButton.addEventListener("click", () => {
    renderTable(users);
});

/*
문자열 형태의 JSON 데이터를 객체로 변환
각 객체의 available 값이 true인 책만 필터링
해당 책들의 title만 배열로 추출해 console.log()로 출력
*/

const bookList =
    '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';

// 객체 변환
const books = JSON.parse(bookList);
console.log(books);
// available: true인 값만 반환
const filteredBookList = books.filter((book) => book.available);
console.log(filteredBookList);
// 대출 가능한 책의 title만 추출
const availableBookList = filteredBookList.map((book) => book.title);
console.log(availableBookList);

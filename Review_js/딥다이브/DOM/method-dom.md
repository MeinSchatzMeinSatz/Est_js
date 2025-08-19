# DOM 주요 메서드

## 요소 선택 관련

getElementById(id) : 지정한 id를 가진 단일 요소 반환
getElementsByClassName(name) : 해당 클래스를 가진 모든 요소 반환
getElementsByTagName(name) : 지정한 태그명에 해당하는 모든 요소 반환
querySelector(selector) : CSS 선택자와 일치하는
querySelectorAll(selector) : CSS 선택자와 일치하는 모든 요소 NodeList 반환

## 요소 생성 및 추가

createElement(tag) : 지정한 태그의 새로운 요소 노드 생성
appendChild(node) : 해당 부모 노드의 자식 요소 생성
insertBefore(node, ref) : ?
removeChild(node) : 해당 자식 노드를 부모에서 제거
replaceChild(new, old) : old 노드를 new 노드로 교체

## 속성 및 클래스 조작

setAttribute(name, value) : 요소에 속성 추가/변경
getAttribute(name) : 속성값 반환
removeAttribute(name) : 속성 제거
classList.add(name) : 클래스 추가
classList.remove(name) : 클래스 제거
classList.toggle(name) : 클래스 있으면 제거, 없으면 추가
classList.contains(name) : 해당 클래스 포함 여부(boolean)

## 내용 조작

innerHTML : 태그 포함 전체 내용을 문자열로 읽거나 대입
textContent : 문자의 모든 내용 조작
innerText : 렌더된 텍스트 값을 반환
Value : input 태그 안의 내용

## 기타 주요 메서드

parentNode : 부모 요소 노드 반환
Children : 자식 요소(컬렉션 / 노드 리스트) 반환
cloneNode([deep]) : 요소 복제
addEventListener(event, fn) : 지정 이벤트 발생 시 함수 실행
removeEventListener(event, fn) : 이벤트 리스너 제거
contains(node) : 해당 노드가 자식에 포함되는지 여부

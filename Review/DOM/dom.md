### DOM

DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공한다. 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일을 등을 조작할 수 있다.

# DOM 상속 구조

프로토타입 체인 관점에서 살펴보자. 예를 들어, input 요소를 파싱하여 객체화한 input 요소 노드 객체는 HTMLInputElement, HTMLElement, Element, Node, EventTarget, Object의 prototype 바인딩되어 있는 프로토타입 객체를 상속받는다.

## 요소 노드 취득

# id를 이용한 요소 노드 취득

```
document.prototype.getElementById()
```

id 값은 HTML 문서 내에서 유일한 값이어야 하며, class 어트리뷰트와는 달리 공백 문자로 구분하여 여러 개의 값을 가질 수 없다.

-   중복된 id 값을 갖는 요소가 여러개 존재할 경우 => 인수로 전달된 id 값을 갖는 첫 번째 요소 노드만 반환한다.
-   만약 인수로 전달된 id 값을 갖는 HTML 요소가 존재하지 않는 경우, 메서드는 null을 반환한다.
-   id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 부수 효과가 있다.
-   단 id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당되지 않는다.

# 태그 이름을 이용한 요소 노드 취득

```
Document.prototype/Element.prototype.getElementsByTagName
```

-   메서드 이름에 포함된 Elements 복수형인 것에서 알 수 있듯이 getElementsByTagName 메서드는 "여러 개의 요소 노드 객체"를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.
-   함수는 하나의 값만 반환할 수 있으므로 여러 개의 값을 반환하려면 배열이나 객체와 같은 자료구조에 담아 반환해야 한다. getElementsByTagName 메서드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 "유사 배열"이면서 "이터러블"이다.
-   HTML 문서의 모든 요소 노드를 취득하려면 getElementsByTagName 메서드의 인수로 "\*"를 전달한다.
-   만약 인수로 전달된 태그 이름을 갖는 요소가 존재하지 않는 경우 getElementsByTagName 메서드는 빈 HTMLCollection 객체를 반환한다.

# class를 이용한 요소 노드 취득

```
Document.prototype/Document.prototype.getElementsByClassName
```

-   getElementsByClassName 메서드는 특정 요소 노드를 통해 호출하며 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색해서 반환한다.
-

# CSS 선택자를 이용한 요소 노드 취득

```
querySelector()
querySelectorAll()
```

# 특정 요소 느드를 취득할 수 있는지 확인

matches 메서드

Element.prototype.matches 메서드는 이벤트 위임을 사용할 때 유용하다.

## HTMLCollection과 NodeList

DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체다.

HTMLCollection과 NodeList의 중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 객체라는 것이다. HTMLCollection은 언제나 live 객체로 동작한다. 단, NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작하지만 경우에 따라 live 객체로 동작할 때가 있다.

# HTMLCollection

getElementsByTagName, getElementsByClassName 메서드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 DOM 컬렉션 객체다. 따라서 HTMLCollection 객체를 살아 있는 객체라고 부르기도 한다.

-   부작용 존재
    HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영하여 요소를 제거할 수 있기 때문에 HTMLCollection 객체를 for문으로 순회하면서 노드 객체의 상태를 변경해야 할 떄 주의해야 한다. 이 문제는 for 문을 역방향으로 순회하는 방법으로 회피할 수 있다.

더 간단한 해결책은 HTMLCollection 객체를 사용할 필요가 없고 유용한 배열의 고차 함수(forEach, map, filter, reduce 등)을 사용할 수 있다.

# NodeList

HTMLCollection 객체의 부작용을 해결하기 위해 querySelectorAll 메서드를 사용하는 방법도 있다. querySelectorAll 메서드는 DOM 컬렉션 객체인 NodeList 객체를 반환한다. 이때 NodeList 객체는 실시간으로 노드 객체의 상태 변경을 반영하지 않는 객체다.

NodeList 객체는 대부분의 경우 노드 객체의 상태 변경을 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작한다. 하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection 객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다.

==> 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection 이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다.

HTMLCollection 이나 NodeList 객체가 메서드를 제공하기는 하지만, 배열의 고차 함수만큼 다양한 기능을 제공하진 않는다. 두 객체를 배열로 변환하면 배열의 유용한 고차 함수(forEach, map, filter, reduce 등)을 사용할 ㅅ 있다는 장점도 있다.

## 노드 탐색

요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리 옮겨 다니며 부모, 형제, 자식 노드 등을 탐색해야 할 때가 있다. 다음 예제를 살펴보자.

# 공백 텍스트 노드

HTML 요소 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백 문자는 텍스트 노드를 생성한다. 이를 공백 텍스트 노드라 한다.

# 자식 노드 탐색

자식 노드를 탐색하기 위해서는 다음과 같은 노드 탐색 프로퍼티를 사용한다.
Node.prototype.childNodes
NodeList에 담아 반환
요소 노드 뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.
Element.prototype.children
HTMLCollection
텍스트 노드가 포함되지 않는다.
Node.prototype.firstCHild
첫 번째 자식 노드를 반환한다.
텍스트 노드 이거나 요소 노드다.
Node.prototype.lastChild
마지막 자식 노드를 반환한다.
텍스트 노드이거나 요소 노드다.
Element.prototype.firstElementChild
첫 번째 자식 요소 노드를 반환한다.
요소 노드만 반환한다.
Element.prototype.lastElementCHild
마지막 자식 요소를 반환한다.
요소 노드만 반환한다.

# 자식 노드 존재 확인

Node.prototype.hasChildNodes
존재하면 true
존재하지 않으면 false

# 형제 노드 탐색

Node.prototype.previousSibling
Node.prototype.nextSibling
Element.prototpye.previousElementSibling
Element.prototype.nextElementSibling

# 노드 정보 취득

Node.prototype.nodeType
Node.prototype.nodeName

### 요소 노드의 텍스트 조작

## nodeValue

참조와 할당 모두 가능하다.
텍스트 노드가 아닌 노드 객체의 nodeValue 프로퍼티를 참조하면 null을 반환하므로 의미가 없다.

## textContent

참조와 할당 모두가 가능하다.
요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.
요소 노드의 textContent 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역(시작 태그와 종료 태그 사이) 내의 텍스트를 모두 반환한다.
이때 HTML 마크업은 무시된다.

# nodeValue vs. textContent

앞서 살펴본 nodeValue 프로퍼티를 참조하여도 텍스트를 취득할 수 있었다. 단, 텍스트 노드가 아닌 노드의 nodeValue 프로퍼티는 null을 반환하므로 의미가 없다. 텍스트 노드의 nodeValue 프로퍼티를 사용하면 textContent 프로퍼티를 사용할 때와 비교해서 코드가 더 복잡하다.
<예제 39-38 참고>

만약 요소 노드의 콘텐츠 영역에 자식 요소 노드가 없고 텍스트만 존재한다면 nodeValue와 textContent 프로퍼티는 같은 결과를 반환한다.

이 경우, textContent 프로퍼티를 사용하는 편이 코드가 더 간단하다.

요소 노드의 textContent 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당된 문자열이 텍스트로 추가된다. 이때 문자열에 HTML 마크업이 포함되어 있더라도 문자열 그대로 인식되어 텍스트로 취급된다. 즉, HTML 마크업이 파싱되지 않는다.

cf -> innerText

-   CSS에 순종적이다. 예를 들어, innerText 프로퍼티는 CSS에 의해 비표시 요소로 지정된 요소 노드의 텍스트를 반환하지 않는다.
-   innerText 프로퍼티는 CSS를 고려해야 하므로 textContent 프로퍼티보다 느리다.

### DOM 조작

DOM 조작이란 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다. DOM 조작에 의해 DOM 에 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생하는 원인이 되므로 성능에 영향을 준다. 따라서 복잡한 콘텐츠를 다루는 DOM 조작은 성능 최적화를 위해 주의해서 다루어야 한다.

## innerHTML

Element.prototype.innerHTML 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 HTML 마크업을 취득하거나 변경한다.

innerHTML 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역 내에 포함된 모든 HTML 마크업을 문자열로 반환한다.

cf => textContent 프로퍼티를 참조하면 HTML 마크업을 무시하고 텍스트만 반환하지만 innerHTML 프로퍼티는 HTML 마크업이 포함된 문자열을 그대로 반환한다.

innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

innerHTML 프로퍼티를 사용하면 HTML 마크업 문자열로 간단히 DOM 조작이 가능하다.

이때 사용자로부터 입력받은 데이터를 그대로 innerHTML 프로퍼티에 할당하는 것은 크로스 사이트 스크립팅 공격에 취약하므로 위험하다.

정리하면, innerHTML 프로퍼티를 사용한 DOM 조작은 구현이 간단하고 직관적이라는 장점이 있지만, 크로스 사이트 스크립팅 공역에 취약한 단점도 있다.

또 다른 단점은, 요소 노드의 innerHTML 프로퍼티에 HTML 마크업 문자열을 할당하는 경우 요소 노드의 모든 자식 노드를 제거하고 할당한 HTML 마크업 문자열을 파싱하여 DOM 을 변경한다는 것이다.

또한 새로운 요소를 삽입할 떄 삽입될 위치를 지정할 수 없다는 단점도 있다.

## insertAdjacentHTML 메서드

이 메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.

두 번쨰 인수로 전달한 HTML 마크업 문자열(DOMString)을 파싱하고 그 결과로 생성된 노드를 첫 번쨰 인수로 전달한 전달한 위치에 삽입하여 DOM에 반영한다.

첫 번쨰 인수로 전달할 수 있는 문자열은 'beforebegin', 'afterbegin', 'beforeend'. 'afterend'의 4가지다.

## 노드 생성과 추가

지금까지 살펴본 innerHTML 프로퍼티와 insertAdjacentHTML 메서드는 HTML 마크업 문자열을 파싱하여 노드를 생성하고 DOM에 반영한다. DOM은 노드를 직접 생성/삽입/삭제/치환하는 메서드도 제공한다.,

## 복수의 노드 생성과 추가

이번에는 여러 개의 요소 노드를 생성하여 DOM에 추가해보자.

예제 39-28 참조

> 위 예제는 3개의 요소 노드를 생성하여 DOM에 3번 추가하므로 DOM이 3번 변경된다. 이때 리플로우와 리페인트가 3번 실행된다. DOM을 변경하는 것은 높은 비용이 드는 처리이므로 가급적 횟수를 줄이는 편이 성능에 유리하다. 따라서 위 예제와 같이 기존 DOM에 요소 노드를 반복하여 추가하는 것은 비효율적이다.

DOM을 여러 번 변경하는 문제를 회피하기 위해 컨테이너 요소를 사용해보자. 컨테이너 요소를 미리 생성한 다음, DOM에 추가해야 할 3개의 요소 노드를 컨테이너 요소에 자식 노드로 추가하고, 컨테이너 요소를 #fruits 요소에 자식으로 추가한다면 DOM은 한 번만 변경된다.

예제 39-29 참조

> 위 예제는 DOM을 한 번만 변경하므로 성능에 유리하기는 하지만 다음과 같이 불필요한 컨테이너 요소(div)가 DOM에 추가되는 부작용이 있다. 이는 바람직하지 않다.

이러한 문제는 DocumentFragment 노드를 통해 해결할 수 있다. DocumentFragment 노드는 문서, 요소, 어트리뷰트, 텍스트 노드와 같은 노드 객체의 일종으로, 부모 노드가 없어서 기존 DOM과는 별도로 존재한다는 특징이 있다. DocumentFragment 노드는 위 예제의 컨테이너 요소와 같이 자식 노드들의 부모 노드로서 별도의 서브 DOM을 구성하여 기존 DOM에 추가하기 위한 용도로 사용한다.

# DocumentFragment

먼저 DocumentFragment 노드를 생성하고 DOM에 추가할 요소 노드를 생성하여 DocumentFragment 노드에 자식 노드로 추가한 다음, DocumentFragment 노드를 기존 DOM에 추가한다.

이때 실제로 DOM 변경이 발생하는 것은 한 번뿐이며 리플로우와 리페인트도 한 번만 실행된다. 따라서 여러 개의 요소 노드를 DOM에 추가하는 경우 DocumentFragment 노드를 사용하는 것이 더 효율적이다.

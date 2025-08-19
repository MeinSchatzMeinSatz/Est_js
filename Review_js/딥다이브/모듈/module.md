# 모듈

: 특정 코드를 특정 기능이나 목적에 따라 분리하여 관리할 수 있는 방법
: 코드를 기능 단위로 쪼개어 관리할 수 있도록 도와주는게 "모듈 시스템"

: 파일 공통으로 사용하는 기능들을 모아놓는 역할

## 문법

-   import, export 문법 사용
-   모듈마다 자신만의 모듈 스코프를 가짐
-   자동으로 엄격 모드를 적용한다.
-   지연 로딩(defer): HTML 파싱 후 실행됨

### default 설정

default 설정은 모듈 파일에서 "한 번"만 사용할 수 있다.

### 모듈의 속성 관리

-   속성을 관리하는 도구

*   defineProperty
    Object.defineProperty(obj, key {
    value: "",
    writable: false, // 수정불가
    enumerable: false, // for... in 이나 Object.key에 안보임
    configurable: false, // 삭제 불가
    })
*   Object.freeze(obj)

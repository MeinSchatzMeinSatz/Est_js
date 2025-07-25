# Date

표준 빌트인 객체인 Date는 날짜와 시간(연, 월, 일, 시, 분, 초)을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수다.

UTC(협정 세계시)는 국제 표준시를 말한다.

## Date 생성자 함수

Date는 생성자 함수다. Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는다. 이 값은 1970년 1월 1일을 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.

Date 생성자 함수로 생성한 Date 객체는 기본적으로 현재 날짜와 시간을 나타내는 정수값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우 Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다.

Date 함수로 객체를 생성하는 방법은 다음과 같이 4가지가 있다.

### new Date()

Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 변환한다. Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖지만 Date 객체를 콘솔에 출력하면 기본적으로 날짜와 시간 정보를 출력한다.

new Date()
// 2025-07-13T04:21:55.023Z

Date()
// Sun Jul 13 2025 13:22:35 GMT+0900 (대한민국 표준시)

### new Date(millisecond)

Date 생성자 함수에 숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.

new Date(0)
// 1970-01-01T00:00:00.000Z
new Date(86400000)
// 1970-01-02T00:00:00.000Z

### new Date(dateString)

Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다. 이떄 인수로 전달한 문자열은 Date.parse 메서드에 의해 해석 가능한 형식이어야 한다.

new Date("May 26, 2020 10:00:00")
// new Date("2020/03/26/10:00:00")

## Date 메서드

-   Date.now
    : 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

-   Date.parse
    :1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.

-   Date.UTC
    1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다. Date.UTC 메서드의 인수는 로컬 타입(KST)이 아닌 UTC로 인식된다. month는 월을 의미하는 0~11까지의 정수다. 0부터 시작하므로 주의가 필요하다.

-   Date.prototype.getFullYear
    Date 객체의 연도를 나타내는 정수를 반환한다.

-   Date.prototype.setFullYear
    Date 객체에 연도를 나타내는 정수를 설정한다. 연도 이외에 옵션으로 월, 일도 설정할 수 있다.

-   Date.prototype.getMonth
    Date 객체의 월을 나타내는 0~11의 정수를 반환한다. 1얼은 0, 12월은 11이다.

-   Date.prototype.setMonth
    Date 객체에 월을 나타내는 0~11의 정수를 설정한다. 1월은 0, 12월은 11이다. 월 이외에 옵션으로 일도 설정할 수 있다.

-   Date.prototype.getDate
    Date 객체의 날짜(1~31)를 나타내는 정수를 반환한다.

-   Date.prototype.setDate
    Date 객체에 날짜(1~31)를 나타내는 정수를 설정한다.

-   Date.prototype.getDay
    Date 객체의 요일(0~6)을 나타내는 정수를 반환한다.

일:0
월:1
화:2
수:3
목:4
금:5
일:6

-   Date.prototype.getHours
    Date 객체의 시간(0~23)을 나타내는 정수를 반환한다.

-   Date.prototype.setHours
    Date 객체에 시간(0~23)을 나타내는 정수를 반환한다.

-   Date.prototype.toDateString
-   Date.prototype.toTimeString
-   Date.prototype.toISOString
    : ISO 8601 형식으로 객체의 날짜와 시간을 표현한 문자열을 반환한다.
-   Date.prototype.toLocaleString
    : 인수로 전달한 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다. 인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용한다.
-   Date.prototype.toLocaleTimeString
    : 인수로 전달한 로캘을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다. 인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용한다.

//안녕하세요 문구를 개발자 도구에 출력하는 함수
function hello() {
    console.log("안녕하세요")
}
hello()


//이름 을 입력 받고, 안녕하세요. xxx님 출력하는 함수
function hello(name) {
    // console.log("안녕하세요 " + name + "님!")
    console.log(`안녕하세요 ${name}님!`)
}
hello("홍길동")


//두 숫자를 인자로 받아서 더한 값을 반환하는 함수
function add(a, b) {
    return a + b
}
console.log(add(3, 4)); 


//짝수인지 확인하는 함수
function isEven(num) {
    if(num % 2 === 0){
        return "true"
    } else {
        return "false"
    }
}
console.log(isEven(2)); // true
console.log(isEven(3)); // false
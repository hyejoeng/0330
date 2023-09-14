// 짝수 요소만 반환하는 함수
function getEvenNumbers(arr) {
    const arr2 = arr.filter(function(arr) {
        return arr % 2 === 0
    })
    return arr2
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // 2, 4, 6


// 배열에서 최대값 찾는 함수 
function getMaxNumber(arr) {
    let max = arr.length - 1 // == let max = -Infinity 마지막 요소 선택
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
console.log(getMaxNumber([1, 7, 3, 5, 10, 4])); // 10


// 배열에서 특정 요소의 개수를 구하는 함수
// filter 메소드를 사용하여 주어진 배열에서 특정 요소의 개수를 반환하는 함수를 작성
function countOccurrences(arr, element) {
    const arr4 = arr.filter(arr => element === arr).length
    return arr4
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2)); // 3


// 모든 요소를 대문자로 변경하는 함수
// map 메소드를 사용하여 문자열 배열의 요소를 모두 대문자로 변경하는 함수를 작성
function toUpperCaseArray(arr) {
    const arr5 = arr.map(function(arr) {
        return arr.toUpperCase()
    })
    return arr5
} 
console.log(toUpperCaseArray(["apple", "banana", "cherry"])); // ["APPLE", "BANANA", "CHERRY"]


// 배열 내 모든 숫자가 짝수인지 확인하는 함수
// every 메소드를 사용하여 주어진 숫자 배열의 모든 요소가 짝수인지 확인하는 함수를 작성
function areAllEven(arr) {
    const arr6 = arr.every((arr) => {
        return arr % 2 === 0
    })
    return arr6
}
console.log(areAllEven([2, 4, 6, 8])); // true
console.log(areAllEven([2, 4, 7, 6, 8])); // false
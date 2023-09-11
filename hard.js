// 배열을 비교하여 공통적으로 포함된 요소를 반환하는 함수
// 두 개의 숫자 배열을 인자로 받아서 두 배열에 공통적으로 포함된 요소를 반환하는 함수를 작성
// 결과로 반환되는 배열에는 중복된 요소가 없어야 한다.
function commonElements(arr1, arr2) {
    const arr9 = arr1.filter(it => arr2.includes(it)); // returns [1, 2]
    return arr9
}
console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [3, 4, 5]
console.log(commonElements([2, 3, 5, 7], [1, 2, 3, 4])); // [2, 3]


// 배열의 누락된 숫자 찾는 함수
// 1부터 N까지의 연속된 숫자가 들어있는 길이 N-1인 배열을 인자로 받아서 누락된 숫자를 찾아 반환하는 함수를 작성
function findMissingNumber(arr) {

}
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 3, 4, 5])); // 2
console.log(findMissingNumber([5, 1, 3, 2])); // 4
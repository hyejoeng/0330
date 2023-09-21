// 두 개의 배열을 받아서 하나로 합쳐주는 concatArray라는 함수를 작성
// - concatArray라는 함수로 인자로 입력된 두 개의 배열(arr1, arr2)을 합쳐, 새로운 배열을 반환해주세요.
// - Array methods의 concat은 사용하지 않고 구현하세요.
function concatArray(arr1, arr2) {
    // concat
    // const arr3 = arr1.concat(arr2) 
    // return arr3

    const arr3 = [...arr1] // ... 값만 들고오는 것
    arr3.push(...arr2)
    return arr3
}

const array1 = ['A', 'B', 'C'];
const array2 = ['D', 'E', 'F'];

console.log(concatArray(array1, array2)); // ['A', 'B', 'C', 'D', 'E', 'F'] 출력


// 요소를 추가하려고 제시된 위치에 요소를 추가하는 함수를 작성합니다.
// - insertElement라는 함수를 작성하고 이 함수에는 세 개의 인자(arr, index, value)를 전달하고, value라는 요소를 index 위치에 삽입한 뒤 새로운 배열을 반환해주세요.
// - 현재 배열의 길이보다 긴 index를 넘길 경우, 예외 처리해야 합니다.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
function insertElement(arr, index, value) {
    arr.splice(index, 0, value)
    if (index < 0 || index > arr.length) {
        // throw (`현재 배열의 길이는 ${arr.length - 1}로 ${index}은 입력 불가능합니다.`)
        return Error (`현재 배열의 길이는 ${arr.length - 1}로 ${index}은 입력 불가능합니다.`)
    }
    const arr4 = [...arr]
    return arr4
}

const nums1 = [1, 2, 3, 4, 5];

console.log(insertElement(nums1, 2, 6)); // [1, 2, 6, 3, 4, 5] 출력 // num 2에 요소 6을 추가
console.log(insertElement(nums1, 10, 6)); // console.error("현재 배열의 길이는 5로 10은 입력 불가능합니다.")


// 주어진 배열에서 요소를 삭제하려고 한다.
// - removeElement라는 함수를 작성하고, 이 함수는 두 개의 인자(arr, index)를 가집니다. index 위치의 요소를 제거하고 새로운 배열을 반환해주세요.
function removeElement(arr, index) {
	arr.splice(index, 1)
    const arr5 = [...arr]
    return arr5
}

const chars = ['A', 'B', 'C', 'D', 'E'];

console.log(removeElement(chars, 3)); // ['A', 'B', 'C', 'E'] 출력


// 주어진 배열에서 요소를 삭제하려고 한다.
// - removeElement라는 함수를 작성하고, 이 함수는 두 개의 인자(arr, character)를 가집니다. character 의 요소를 제거하고 새로운 배열을 반환해주세요.
// - character에 해당하는 요소가 여러 개인 경우, 모두 제거해야 합니다.
// - character에 해당하는 요소가 없는 경우, 없다고 출력합니다.
function remove2Element(arr, character) {
    // arr.splice(arr, character)
    // const arr0 = [...arr]
    // return arr0
}

const chars1 = ['A', 'B', 'B', 'C', 'D', 'E'];

console.log(remove2Element(chars1, 'B')); // ['A', 'C', 'D', 'E'] 출력
console.log(remove2Element(chars1, 'D')); // ['A', 'B', 'B', 'C', 'E'] 출력
console.log(remove2Element(chars1, 'Z')); // console.error("배열에 Z가 없습니다.");


// 주어진 인덱스 듸이어의 요소들을 제외한 새로운 배열을 반환하는 함수를 작성
// - excludeElements라는 함수를 작성하세요. 이 함수는 세 개의 인자(arr, start, end)를 받아서 start 인덱스부터 end 인덱스까지의 요소를 제외한 새로운 배열을 반환해주세요.
function excludeElements(arr, start, end) {
	// 코드 작성
}

const nums2 = [1, 2, 3, 4, 5, 6, 7];

console.log(excludeElements(nums2, 2, 5)); // [1, 2, 7] 출력


// 주어진 배열의 요소들의 순서를 반대로 바꾼 새로운 배열을 반환하는 함수를 작성
// - 주어진 배열의 요소들을 역순으로 정렬한 새로운 배열을 반환하는 reverseArray라는 함수를 작성해주세요.
// - Array methods의 reverse를 사용하지 않고 구현하세요.
function reverseArray(arr) {
	// 코드 작성
    const arr6 = arr.sort((a, b) => b - a)
    return arr6
}

const nums3 = [1, 2, 3, 4, 5];

console.log(reverseArray(nums3)); // [5, 4, 3, 2, 1] 출력


// 문자열 배열을 받아서 새로운 문자열을 반환하는 함수를 작성
// -주어진 문자열 배열의 원소들을 연결하여 새로운 문자열을 반환하는 joinStrings라는 함수를 작성해주세요.
function joinStrings(arr) {
    const word = arr.join('') //배열의 모든 요로를 연결해 하나의 문자열로 만듦
    return word
}

const words = ['Hello', 'World', '!'];

console.log(joinStrings(words)); // 'HelloWorld!' 출력


// 주어진 배열에서 중복되는 요소들을 제거한 새로운 배열을 반환하는 함수를 작성
// - 주어진 배열에서 중복되는 요소들을 제거한 새로운 배열을 반환하는 removeDuplicates라는 함수를 작성해주세요.
function removeDuplicates(arr) {
	// const arr7 = []
    // for (let i = 0; i < arr.length; i++) {
    //     // indexOf(): 배열에 값이 존재하지 않으면 -1로 반환
    //     if (arr7.indexOf(arr[i]) === -1) { 
    //         arr7.push(arr[i])
    //     }
    // }
    // return arr7
    const arr7 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.findIndex())
    }
}

const nums4 = [1, 2, 3, 1, 4, 2, 5];

console.log(removeDuplicates(nums4)); // [1, 2, 3, 4, 5] 출력


// 주어진 이중 배열의 평균값을 반환하는 함수를 작성
// - 주어진 이중 배열의 평균값을 구하는 average라는 함수를 작성해주세요.
function average(arr) {
    // const arr7 = [...arr[0]]
    // arr7.push(...arr[1])

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++){
    //     sum += arr7[i]
    // }
    // return arr7
}

const nums5 = [[1, 2, 3, 4, 5], [9, 10, 11, 12, 13]];

console.log(average(nums5)); // 3 출력


// 주어진 배열에서 가장 긴 문자열을 찾는 함수를 작성
// - 주어진 배열에서 가장 긴 문자열을 찾아 반환하는 getLongestString이라는 함수를 작성해주세요.
function getLongestString(arr) {
	// 코드 작성
    // let longestWord = '';
    // for (let i=0; i<arr.length;i++){ 
    //   if(arr[i].length > longestWord.length){
    //     longestWord = arr[i]
    //   }
    // }
    // return longestWord
    const arr8 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > arr8.length) {
            arr8[i] = arr[i]
        }
    }
    return arr8
}

const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

console.log(getLongestString(strings)); // 'banana' 출력


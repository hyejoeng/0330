// 두 개의 객체를 받아서 하나로 합쳐주는 mergeObjects라는 함수를 작성
// - mergeObjects라는 함수로 인자로 입력된 두 개의 객체(obj1, obj2)를 합쳐, 새로운 객체를 반환해주세요.
// - Object.assign, Object spread 연산자, 아마 obj1, obj2 있는거랑 따로 지정해서 사용하지 않기.
// - 만약 두 객체에 동일한 키가 있다면 obj2의 키-값 쌍이 병합된 객체에 사용되어야 합니다.
function mergeObjects(obj1, obj2) {
    // return Object.assign(obj1, obj2)
    // return {...obj1, ...obj2}

    const obj3 = {}
    for (let att in obj1) { 
        obj3[att] = obj1[att]; 
    }

    for(let att in obj2)  {
        obj3[att] = obj2[att];
    }
    
    return obj3;
}

const object1 = {a: 'A', b: 'B', c: 'C'};
const object2 = {b: 'X', c: 'Y', d: 'Z'};

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력



// 문자열을 입력으로, 배열로 이루어진 각 문자들이 몇 개씩 포함되어 있는지 계산하는 함수를 작성
function countLetters(string) {
    const obj4 = {}

    for (const char of string) { // 문자열을 순화, 문자의 등장 횟수 계산
        if (char !== ' ') { //공백 무시
            if (obj4[char]) { // 문자 이미 등장한 경우 카운트 증가
                obj4[char]++
            } else {
                obj4[char] = 1 //처음 등장하는 경우 카운트 1로 초기화
            }    
        }
    }

    return obj4
}

const str = "apple";

console.log(countLetters(str)); // {a: 1, p: 2, l: 1, e: 1} 출력



// 객체의 키와 값 배열을 만드는 함수 작성
// - 객체를 입력 받고 [[키 배열], [값 배열]] 형태로 반환해주세요.
function getObjectKeysAndValues(object) {  
    const keys = Object.keys(object) 
    const values = Object.values(object) 

    return [keys, values]
}

const obj1 = { a: "A", b: "B", c: "C" };

console.log(getObjectKeysAndValues(obj1)); // [['a', 'b', 'c'], ['A', 'B', 'C']] 출력



// 객체에서 특정 키-값 쌍을 삭제하는 함수 작성
// - 해당 키(keys)를 가진 키-값 쌍을 삭제한 새 객체를 반환해주세요.
function removeKeyFromObject(object, keys) {
    const obj5 = { ...object } 

    for (const key of keys) {
        if (key in obj5) {
            delete obj5[key] // 주어진 키 삭제
        }
    }
    return obj5
}

const obj2 = {a: "hi", b: "there", c: "world"};

console.log(removeKeyFromObject(obj2, ['b', 'c'])); // {a: "hi"} 출력



// 객체 배열에서 특정 키의 값들로 구성된 배열 반환하는 함수 작성
// - selectValuesByKey라는 함수 안에 입력된 객체 배열(objectArray), 키(key)를 이용하여, 해당 키의 값들로만 구성된 배열을 반환해주세요.
function selectValuesByKey(objectArray, key) {
	const arr = []
    for (const obj of objectArray) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key])
        }
    }
    return arr
}

const objectArray = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Cathy" },
];

console.log(selectValuesByKey(objectArray, "name"));  // ["Alice", "Bob", "Cathy"] 출력



// 학생 성적 배열에서 특정 점수 이상인 학생들의 이름 반환하는 함수 작성
// - 학생 성적 배열(students)과 점수(score)를 이용하여, 점수가 주어진 값 이상인 학생들의 이름을 배열로 반환해주세요.
function filterByScore(students, score) {
    const obj6 = []

    for (const student of students) {
        // score 이상인 학생을 뽑는다
        if (students1.score >= score) { 
            obj6.push(students1.name)
        }
    }

    return obj6
}

const students1 = [
	{ name: "Alice", score: 85 },
	{ name: "Bob", score: 75 },
	{ name: "Cathy", score: 90 },
	{ name: "David", score: 65 },
];

console.log(filterByScore(students1, 80)); // ["Alice", "Cathy"] 출력


// 학생 성적 배열에서 특정 점수 이상인 학생들의 이름 반환하는 함수 작성
// - 학생 성적 배열(students)과 점수를(score)를 이용하여, 점수의 평균이 주어진 값 이상인 학생들의 이름을 배열로 반환해주세요.
function filterByAverageScore(students, score) {
	// 코드 작성
}

const students2 = [
	{ name: "Alice", score: [90, 60, 70, 100] },
	{ name: "Bob", score: [75, 35, 40, 60] },
	{ name: "Cathy", score: [90, 10, 20, 30] },
	{ name: "David", score: [70, 75, 85, 95] },
];

console.log(filterByAverageScore(students2, 80)); // ["Alice", "David"] 출력


// 도서 목록 배열에서 특정 카테고리에 속한 도서 제목을 배열로 반환하는 함수 작성
// - 도서 목록 배열(bookArray)와 카테고리(category)를 이용하여, 해당 카테고리에 속한 도서 제목을 배열로 반환해주세요.
function getBooksByCategory(books, category) {
	// 코드 작성
}

const books = [
	{ title: "The Hobbit", category: "novel" },
	{ title: "Harry Potter", category: "novel" },
	{ title: "JavaScript for Beginners", category: "programming" },
	{ title: "Python Crash Course", category: "programming" },
];

console.log(getBooksByCategory(books, "programming")); 
// ["JavaScript for Beginners", "Python Crash Course"] 출력


// 카테고리에 해당하는 책과 평균 페이지를 반환하는 함수 작성
// - 다음 함수를 완성하여 전달된 도서 목록과 카테고리에 따른 도서 제목과 평균 페이지 수를 반환하세요.
function getBooksStatsByCategory(books, category) {
	// 코드 작성
}

const books1 = [
	{ title: "The Hobbit", category: "novel", pages: 310 },
	{ title: "Harry Potter", category: "novel", pages: 450 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200 },
	{ title: "Python Crash Course", category: "programming", pages: 250 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280 },
	{ title: "Crime and Punishment", category: "novel", pages: 480 },
];

console.log(getBooksStatsByCategory(books1, "programming"));
// { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], avgPages: 243.333 } 출력
console.log(getBooksStatsByCategory(books1, "novel"));
// { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment"], avgPages: 413.333 } 출력


// 책을 검색하는 함수 작성
// - 주어진 도서 목록 배열에서 각 카테고리별 도서 제목, 총 페이지 수 및 해당 도서의 가격 범위를 만족하는 총 가격을 반환하세요.
// - 또한, 특정 페이지 범위와 가격 범위를 지정하면 해당 범위 내의 도서만 결과에 포함되도록 해주세요.
// - category 옵션은 선택적으로 포함할 수 있으며, category가 있을 경우, category에 해당하는 책들만 반환해주세요.
const defaultFilterOptions = {
	minPages: 0, 
    maxPages: Infinity, 
    minPrice: 0, 
    maxPrice: Infinity,
	category: undefined // 선택 사항
}

function searchBooks(books, options = defaultFilterOptions) {
	// 코드 작성
}

const books2 = [
	{ title: "The Hobbit", category: "novel", pages: 310, price: 13 },
	{ title: "Harry Potter", category: "novel", pages: 450, price: 28 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200, price: 15 },
	{ title: "Python Crash Course", category: "programming", pages: 250, price: 18 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280, price: 20 },
	{ title: "Crime and Punishment", category: "novel", pages: 480, price: 27 },
	{ title: "JavaScript: The Good Parts", category: "programming", pages: 170, price: 10 },
	{ title: "To Kill a Mockingbird", category: "novel", pages: 320, price: 15 },
];

console.log(searchBooks(books2));
/* 
{
  novel: { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment", "To Kill a Mockingbird"], totalPages: 1560, totalPrices: 83 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript", "JavaScript: The Good Parts"], totalPages: 900, totalPrices: 63 }
}
출력
*/

console.log(searchBooks(books2, { minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20 }));
/*
{
  novel: { titles: ["The Hobbit", "To Kill a Mockingbird"], totalPages: 630, totalPrices: 28 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], totalPages: 730, totalPrices: 53 }
}
출력
*/
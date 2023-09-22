// 두 개의 객체를 받아서 하나로 합쳐주는 mergeObjects라는 함수를 작성
// - mergeObjects라는 함수로 인자로 입력된 두 개의 객체(obj1, obj2)를 합쳐, 새로운 객체를 반환해주세요.
// - Object.assign, Object spread 연산자, 아마 obj1, obj2 있는거랑 따로 지정해서 사용하지 않기.
// - 만약 두 객체에 동일한 키가 있다면 obj2의 키-값 쌍이 병합된 객체에 사용되어야 합니다.
function mergeObjects(obj1, obj2) {
	// return Object.assign(obj1, obj2)
	// return {...obj1, ...obj2}
	
	const obj3 = {}

	for (let obj in obj1) {
		obj3[obj] = obj1[obj]
	}
	for (let obj in obj2) {
		obj3[obj] = obj2[obj]
	}

	return obj3

}

const object1 = {a: 'A', b: 'B', c: 'C'};
const object2 = {b: 'X', c: 'Y', d: 'Z'};

console.log(mergeObjects(object1, object2)); // {a: 'A', b: 'X', c: 'Y', d: 'Z'} 출력


// 문자열을 입력으로, 배열로 이루어진 각 문자들이 몇 개씩 포함되어 있는지 계산하는 함수를 작성
function countLetters(string) {
	const obj4 = {}

	for (const char of string) { // 각 문자를 출력
		if (char !== '') {
			if (obj4[char]) { // 문자 카운트 증가
				obj4[char]++
			} else { // 1부터 시작 
				obj4[char] = 1
			}
		}
	}

	return obj4
}

const str = "apple";

console.log(countLetters(str)); // {a: 1, p: 2, l: 1, e: 1} 출력


// 객체의 키와 값 배열을 만드는 함수 작성
// - 객체를 입력 받고 [[키 배열], [값 배열]] 형태로 반환
function getObjectKeysAndValues(object) {
	const keys = Object.keys(object)
	const value = Object.values(object)

	return [keys, value]
}

const obj1 = { a: "A", b: "B", c: "C" };

console.log(getObjectKeysAndValues(obj1)); // [['a', 'b', 'c'], ['A', 'B', 'C']] 출력


// 객체에서 특정 키-값 쌍을 삭제하는 함수 작성
// 해당 키(keys)를 가진 키-값 쌍을 삭제한 새 객체를 반환
function removeKeyFromObject(object, keys) {
	const obj5 = {...object}

	for (const key of keys) { // 키 반복
		if (key in obj5) { // 키가 객체에 있는지 확인
			delete obj5[key] // 삭제
		}
	}

	return obj5
}

const obj2 = {a: "hi", b: "there", c: "world"};

console.log(removeKeyFromObject(obj2, ['b', 'c'])); // {a: "hi"} 출력


// 객체 배열에서 특정 키의 값들로 구성된 배열 반환하는 함수 작성
// - selectValuesByKey라는 함수 안에 입력된 객체 배열(objectArray), 키(key)를 이용하여, 해당 키의 값들로만 구성된 배열을 반환해주세요.
function selectValuesByKey(objectArray, key) {
	const arr1 = []

    for (const obj of objectArray) {
		arr1.push(obj[key])
    }

    return arr1
}

const objectArray = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Cathy" },
];

console.log(selectValuesByKey(objectArray, "name")); // ["Alice", "Bob", "Cathy"] 출력


// 학생 성적 배열에서 특정 점수 이상인 학생들의 이름 반환하는 함수 작성
// - 학생 성적 배열(students)과 점수(score)를 이용하여, 점수가 주어진 값 이상인 학생들의 이름을 배열로 반환해주세요.
function filterByScore(students, score) {
	const arr2 = []
	
	students.forEach(element  => {
		if (element.score >= score) {
			arr2.push(element.name)
		}
	});

	return arr2
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
function filterByAverageScore(students, limit) {
	const arr3 = []

	students.forEach(s  => {
		const score = s.score
		let total = 0;
		for (let i = 0; i < score.length; i++) {
			total += score[i]
		}
		const avg = total / score.length

		if (avg >= limit) {
			arr3.push(s.name)
		}
	});

	return arr3
}

const students2 = [
	{ name: "Alice", score: [90, 60, 70, 100] },
	{ name: "Bob", score: [75, 35, 40, 60] },
	{ name: "Cathy", score: [90, 10, 20, 30] },
	{ name: "David", score: [70, 75, 85, 95] },
];

console.log(filterByAverageScore(students2, 80)); // ["Alice", "David"] 출력


// 도서 목록 배열에서 특정 카테고리에 속한 도서 제목을 배열로 반환하는 함수 작성
// -도서 목록 배열(bookArray)와 카테고리(category)를 이용하여, 해당 카테고리에 속한 도서 제목을 배열로 반환
function getBooksByCategory(books, category) {
	const arr4 = []

	books.forEach(e => {
		const cat = e.category
		if (cat == category) {
			arr4.push(e.title)
		}
	})

	return arr4
}

const books1 = [
	{ title: "The Hobbit", category: "novel" },
	{ title: "Harry Potter", category: "novel" },
	{ title: "JavaScript for Beginners", category: "programming" },
	{ title: "Python Crash Course", category: "programming" },
];

console.log(getBooksByCategory(books1, "programming")); // ["JavaScript for Beginners", "Python Crash Course"] 출력


// 카테고리에 해당하는 책과 평균 페이지를 반환하는 함수 작성
// - 다음 함수를 완성하여 전달된 도서 목록과 카테고리에 따른 도서 제목과 평균 페이지 수를 반환
function getBooksStatsByCategory(books, category) {
	// const fli = books.fliter(book => book.category === category)

	let categoryBooks = {title:[], avgPages: 0};
	let totalPages = 0
	let count = 0

	books.forEach(e => {
		if (e.category == category) {
			categoryBooks.title.push(e.title)
			totalPages += e.pages
			count++
		}
	})
	categoryBooks.avgPages = (totalPages / count).toFixed(3)

	return categoryBooks
}

const books2 = [
	{ title: "The Hobbit", category: "novel", pages: 310 },
	{ title: "Harry Potter", category: "novel", pages: 450 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200 },
	{ title: "Python Crash Course", category: "programming", pages: 250 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280 },
	{ title: "Crime and Punishment", category: "novel", pages: 480 },
];

console.log(getBooksStatsByCategory(books2, "programming"));
// { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], avgPages: 243.333 } 출력
console.log(getBooksStatsByCategory(books2, "novel"));
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
	let tmparr = []
	
	let categoryBooks = {
		title:[],
		totalPages: 0,
		totalPrices: 0
	}

	books.forEach(b => {
		if (b.pages >= options.minPages && b.pages <= options.maxPages && b.price >= options.minPrice && b.price <= options.maxPrice) {
			tmparr.push(b)
		}
	})
	tmparr.forEach(a => {
		if (a.category === a.category) {
			categoryBooks.title.push(a.title)
		}
	})
	return categoryBooks
}

const books3 = [
	{ title: "The Hobbit", category: "novel", pages: 310, price: 13 },
	{ title: "Harry Potter", category: "novel", pages: 450, price: 28 },
	{ title: "JavaScript for Beginners", category: "programming", pages: 200, price: 15 },
	{ title: "Python Crash Course", category: "programming", pages: 250, price: 18 },
	{ title: "Eloquent JavaScript", category: "programming", pages: 280, price: 20 },
	{ title: "Crime and Punishment", category: "novel", pages: 480, price: 27 },
	{ title: "JavaScript: The Good Parts", category: "programming", pages: 170, price: 10 },
	{ title: "To Kill a Mockingbird", category: "novel", pages: 320, price: 15 },
];

console.log(searchBooks(books3));
/* 
{
  novel: { titles: ["The Hobbit", "Harry Potter", "Crime and Punishment", "To Kill a Mockingbird"], totalPages: 1560, totalPrices: 83 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript", "JavaScript: The Good Parts"], totalPages: 900, totalPrices: 63 }
}
출력
*/

console.log(searchBooks(books3, { minPages: 200, maxPages: 370, minPrice: 15, maxPrice: 20 }));
/*
{
  novel: { titles: ["The Hobbit", "To Kill a Mockingbird"], totalPages: 630, totalPrices: 28 },
  programming: { titles: ["JavaScript for Beginners", "Python Crash Course", "Eloquent JavaScript"], totalPages: 730, totalPrices: 53 }
}
출력
*/
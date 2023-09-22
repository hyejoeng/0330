// 버튼 클릭 시, 리스트 아이템을 추가하는 기능 구현
// - HTML에서 id가 "addBtn"인 버튼 요소를 클릭하면 "아이템 (n)"라는 텍스트를 가진 새로운 리스트 아이템을 id가 "itemList"인 ul 요소에 추가하세요.
// - addListItem 함수를 작성하세요, 이 함수는 이벤트 리스너와 연결되어서 버튼 클릭 시 동작됩니다.

// const addBtn = document.querySelector('#addBtn')
// let itemCount = 1

// addBtn.addEventListener('click', () => {
//     let itemList = document.querySelector('#itemList')
//     let newLi = document.createElement('li')
//     itemList.appendChild(newLi)
//     newLi.innerHTML = `아이템 ${itemCount}`
//     itemCount++
// })

let itemCount = 1
function addListItem() {
    let itemList = document.querySelector('#itemList')

    let newLi = document.createElement('li') // 새로운 요소 추가

    itemList.appendChild(newLi) //부모 태그 내부에 넣음

    newLi.innerHTML = `아이템 ${itemCount}`//태그 사이에 들어갈 내용

    itemCount++
}

// 변수.setAttribute('속성', '값')



// 버튼 클릭 시, 특정 요소의 텍스트를 변경하는 기능 구현
// - HTML에서 id가 "changeBtn"인 버튼 요소를 클릭하면, id가 "textContainer"인 div 요소의 텍스트가 "Hello, World!"에서 "Hello, JavaScript!"로 변경되어야 합니다.
// - changeText 함수를 작성하세요, 이 함수는 이벤트 리스너와 연결되어서 버튼 클릭 시 동작됩니다.
function changeText() {
	// const changeBtn = document.querySelector('#changeBtn')
    const textContainer = document.querySelector('#textContainer')

    textContainer.innerHTML = `Hello, JavaScript!`
}



// 여러 버튼이 있을 때 각 버튼을 클릭하면 각각의 버튼에 해당하는 내용이 출력되게 만드는 기능 구현
// - 서로 다른 id를 가진 세 개의 버튼이 있습니다. 각 버튼을 클릭하면, 서로 다른 텍스트가 id가 "displayArea"인 div 요소에 출력되어야 합니다.
// - 각 버튼에 대해 서로 다른 onClick 핸들러 함수를 작성하세요.
const displayArea = document.querySelector('#displayArea')

function onClick1() {
    let newtext = document.createElement('h3')
    displayArea.appendChild(newtext)
    newtext.innerHTML = `냐뮤냐뮤`
}

function onClick2() {
    let newtext = document.createElement('h3')
    displayArea.appendChild(newtext)
    newtext.innerHTML = `냐냐미`
}

function onClick3() {
    let newtext = document.createElement('h3')
    displayArea.appendChild(newtext)
    newtext.innerHTML = `개복치`
}



// 사용자가 입력한 데이터를 받아와서 숫자를 분석하고 화면에 출력하기
// - HTML에서 id가 "analyzeBtn"인 버튼 요소를 클릭하면, id가 "numberInput"인 input 요소에서 사용자가 입력한 문자열을 받아와서 숫자로 변환한 후, 홀수인지 짝수인지를 판단하여 id가 "resultContainer"인 div 요소에 출력합니다.
// - analyzeNumber 함수를 작성하세요, 이 함수는 이벤트 리스너와 연결되어서 버튼 클릭 시 동작됩니다.
function analyzeNumber() {
    // const analyzeBtn = document.querySelector('#analyzeBtn');
    const numberInput = document.querySelector('#numberInput');
    const resultContainer = document.querySelector('#resultContainer');

    // trim(): 문자열 공백을 제거하고 원본 문자열을 반환
    const userInput = numberInput.value.trim(); 
    const num = parseFloat(userInput) // 숫자로 변환

    //Not-A-Number(숫자가 아님)인지 판별
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            resultContainer.innerHTML = `${num}은 짝수입니다.`
        } else {
            resultContainer.innerHTML = `${num}은 홀수입니다.`
        }
    }
}



// 페이지 로드 시, 현재 시간을 출력하는 기능 구현
// 화면에 현재 시간을 출력하는 displayCurrentTime 함수를 작성하세요. 이 함수는 페이지 로딩 완료 시 한 번만 실행됩니다.
window.addEventListener("load", displayCurrentTime);

function displayCurrentTime() {
    const timeContainer = document.querySelector('#timeContainer')

    const date = new Date()
    const dateUTC = Date.UTC (
        date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
    )

    timeContainer.innerHTML = new Date(dateUTC)
}

// const date = new Date()
// const dateUTC = Date.UTC (
//     date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
// )
// console.log(new Date(dateUTC))


// 이벤트 위임을 사용하여 여러 버튼 클릭 처리하기
// - 세 개의 버튼이 각각 다른 색으로 변경되게 하는 기능을 구현하세요. 버튼을 클릭하면, 각 버튼에 해당하는 색으로 id가 "coloredBox"인 div 요소의 배경색이 변경되어야 합니다.
// - 이벤트 리스너는 여러 버튼의 부모 요소인 div에 추가되어야 합니다. 이벤트 위임을 사용하여 각 버튼에 대해 서로 다른 동작이 수행되어야 합니다.
document.getElementById("buttonContainer").addEventListener("click", changeColor);

function changeColor(e) {
    const coloredBox = document.querySelector('#coloredBox')

    let clickE = e.target //클릭된 요소 가져옴
    let DateColor = clickE.getAttribute("data-color") // 클릭된 요소의 데이터 속성 확인

    if (DateColor) {
        coloredBox.style.backgroundColor = DateColor
    }
}


// 


// 이벤트 위임을 사용하여 할 일 목록에 추가 및 삭제 버튼 동작 구현하기
// - 할 일 목록에 할 일을 추가하거나 삭제하는 기능을 구현하세요. id가 "addTodoBtn"인 버튼을 클릭하면, 사용자가 입력한 할 일이 id가 "todoList"인 ul 요소에 추가되어야 합니다. 각 할 일에는 삭제 버튼이 있어요. 삭제 버튼을 클릭하면, 해당 목록이 삭제되어야 합니다.
// - 이벤트 리스너는 ul 요소에 추가되어야 합니다. 이벤트 위임을 사용하여 각 삭제 버튼에 대해 동작이 수행되어야 합니다.
document.getElementById("addTodoBtn").addEventListener("click", addTodo);
document.getElementById("todoList").addEventListener("click", deleteTodo);

let toDolistCount = 1

function addTodo() {
    const inputValue = document.querySelector('#todoInput').value //input 값 추출

    // const todoList = document.querySelector('#todoList')
    
    let newItem = document.createElement('li')
    let newSpan = document.createElement('span')
    let newButton = document.createElement('button')

    newItem.appendChild(newSpan)
    newItem.appendChild( newButton)

    // newSpan.innerHTML = inputValue
    newButton.innerHTML = `삭제`
    newButton.setAttribute('style', 'margin-left: 6px')
    // // newButton.setAttribute('')

    todoList.appendChild(newItem)        

    
    if (inputValue) { //입력 값이 비어 있지 않다면
        newSpan.innerHTML = inputValue
    } else {
        newSpan.innerHTML = `할 일 ${toDolistCount}`
        toDolistCount++
    }
}
function deleteTodo(e) {
    // const todoli = document.querySelectorAll('#todoList > li')
    // const deleteBtn = todoli.querySelector('button')

    let clickD = e.target
    let deleteBtn = clickD.getAttribute('button')

    if (deleteBtn) {
        deleteBtn.removeEventListener('click')
    }
}

// // <li> 요소들을 선택합니다.
// var listItems = document.querySelectorAll("#myList li");

// // 각 <li> 요소에 대해 <button> 요소를 선택하고 이벤트 리스너를 추가합니다.
// listItems.forEach(function(li) {
//     var button = li.querySelector("button");

//     if (button) {
//         // <button> 요소를 찾았을 경우에만 이벤트 리스너를 추가합니다.
//         button.addEventListener("click", function() {
//             // 버튼이 클릭되었을 때 할 작업을 여기에 작성합니다.
//             alert("버튼이 클릭되었습니다.");
//         });
//     }
// });


// 이벤트 제거 removeEventListener 
// // 버튼 요소를 가져옵니다.
// var checkButton = document.getElementById("checkButton");

// // 확인 버튼에 클릭 이벤트 리스너를 추가합니다.
// checkButton.addEventListener("click", function() {
//     // 입력 필드의 값을 가져옵니다.
//     var inputValue = document.getElementById("myInput").value;

//     // 입력 값이 비어있지 않다면 작업을 수행합니다.
//     if (inputValue) {
//         alert("입력된 값: " + inputValue);
//         // 여기서 원하는 작업을 수행합니다.
//     } else {
//         alert("입력된 값이 없습니다.");
//     }
// });


// 변수.setAttribute('속성', '값')

// let itemList = document.querySelector('#itemList')

// let newLi = document.createElement('li') // 새로운 요소 추가

// itemList.appendChild(newLi) //부모 태그 내부에 넣음

// newLi.innerHTML = `아이템 ${itemCount}`//태그 사이에 들어갈 내용

// itemCount++



// e.preventDefault()를 사용하여 form 제출 시, 동작 실행되지 않도록 구현하기
// - 사용자가 form을 제출하면 기본 동작이 실행되지 않도록 e.preventDefault()를 사용하여 함수를 작성해주세요.
// - form을 제출하면 사용자 이름과 비밀번호 입력 값이 콘솔에 출력되도록 하세요.

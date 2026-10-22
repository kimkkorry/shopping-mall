// 비동기 처리 - 개발자가 원하는 순서대로 기능 구현
// 방법1 - 콜백 함수(함수의 매개변수로 함수를 전달) 사용

function displayA(){
    console.log('A');
}

function displayB(callBack){
    setTimeout(() => {
        console.log('B');
        callBack();  //함수 호출
    }, 2000);
}

function displayC(){
    console.log('C');
}

// 함수 호출(A->B->C)
displayA();
displayB(displayC);


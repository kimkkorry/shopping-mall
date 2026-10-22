// 동기 - 시간의 순서대로 기능 구현
function displayA(){
    console.log('A');
}

function displayB(){
    //console.log('B');
    // 2초 후에 'B'를 출력
    setTimeout(() => {
        console.log('B');  
    }, 2000);
}

function displayC(){
    console.log('C');
}

// 함수 호출(A->C->B)
displayA();  
displayB();
displayC();
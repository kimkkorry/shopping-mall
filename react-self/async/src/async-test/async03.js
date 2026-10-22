// 비동기 처리
// 방법2 - async ~ await 방식
async function displayA(){
    console.log('A');
}

async function displayB(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B');
            resolve();
        }, 2000);
    });
}

async function displayC(){
    console.log('C');
}

async function runSequence() {
    displayA();
    await displayB();
    await displayC();
}

// 실행 함수 호출
runSequence();
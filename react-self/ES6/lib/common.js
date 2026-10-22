// 두 수의 합 계산 함수
let add = (x, y) => x + y;

// 절대값 계산 함수
let myAbs = (x) => {
    if(x < 0)
        return -x;
    else
        return x;
}

// 외부로 내보내기
module.exports = {add, myAbs} 
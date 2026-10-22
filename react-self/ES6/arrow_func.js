// 화살표 함수
// 제곱수 계산
let square = function(x){
    return x * x;
}

/*let square2 = (x) => {
    return x * x;
}*/
// 코드가 한 줄일때 매개변수의 소괄호() 생략, {}블럭과 return 생략
let square2 = (x) => x * x;

console.log(square(3));  //9
console.log(square2(3)); //9

// 매개변수가 없는 함수 - 소괄호 생략 불가
let message = () => console.log("Good Luck!");
message(); //함수 호출
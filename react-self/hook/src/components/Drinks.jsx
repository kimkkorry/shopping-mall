import { useState } from "react";
import DrinkList from "./DrinkList";

const Drinks = () => {
    // 입력값 상태 관리
    const [value, setValue] = useState("");

    // 음료를 저장할 배열 상태 관리
    // 초기화 : [](빈 리스트)
    const [drinks, setDrinks] = useState([]);

    // 입력값 변경 함수
    const handleInputValue = (e) => {
        setValue(e.target.value);
    }

    // 음료 추가 함수
    const addDrink = () => {
        const newDrink = value;
        // 유효성 검사
        if(newDrink === ""){
            alert("음료를 입력해주세요");
            return; //즉시 종료
        }
        // spread 연산자 - 배열 복사
        setDrinks([...drinks, newDrink]);
        setValue("");  //입력 필드 초기화
    }
    
    return(
        <div>
            <h2>음료 리스트</h2>
            <input 
                type="text" 
                placeholder="음료를 입력하세요."
                value={value}
                onChange={handleInputValue}
            />
            {/* <p>입력된 음료: {value}</p> */}
            <button onClick={addDrink}>음료 추가</button>
            {/* 음료 목록 */}
            {/* Props로 drinks를 전달 */}
            <DrinkList 
                drinklist={drinks}
            />
            {/* <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drinks.join(", ")}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Drinks;
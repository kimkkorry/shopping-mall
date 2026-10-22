import { useEffect, useState } from "react";

const User = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(1);

    // 이름 변경 함수
    const onChangeName = (e) => {
        setName(e.target.value);
    }

    // 나이 변경 함수
    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    // [] - 처음 한 번만 실행
    // [name] - name이 변경될 때마다 실행
    useEffect(() => {
        console.log("렌더링...");
        console.log(`이름: ${name}, 나이: ${age}`);
    }, [age]);
    
    return(
        <div>
            <h2>사용자 정보</h2>
            <input 
                type="text" 
                placeholder="이름 입력"
                value={name}
                onChange={onChangeName}
            />
            <input 
                type="number" 
                placeholder="나이 입력"
                value={age}
                onChange={onChangeAge}
            />
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default User;
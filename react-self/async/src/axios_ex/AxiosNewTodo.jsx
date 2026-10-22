import axios from "axios";
import { useState } from "react";

// 서버와 통신 - 데이터 생성 : axios.post()
const AxiosNewTodo = () => {
    // 할 일 중 제목만 상태 관리
    const[title, setTitle] = useState("");

    // 입력값 변경 함수
    const handleInputChange = (e) => {
        setTitle(e.target.value);
    }

    // 폼 제출시 처리 함수(서버 역할)
    const handleSubmit = (e) => {
        e.preventDefault();

        // 입력값 검증
        if(!title.trim()){ //title.trim() === ""
            alert("할 일을 입력하세요");
            return;
        }

        // JsonPlaceholder API에 데이터 보내기
        // axios.post(인자1, 인자2)
        // 인자1- URL 경로, 인자2 - 서버로 보낼 데이터 객체
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false
        })
        .then(response => {
            // response.data가 서버 API에 저장
            console.log("추가된 데이터: ", response.data); 
            alert("할 일 추가 완료!");
            setTitle("");  //입력된 데이터 초기화
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="할 일 입력"
                    value={title}
                    onChange={handleInputChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default AxiosNewTodo;
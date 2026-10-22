import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchOneById = () => {
    // URL에서 id를 가져옴
    const {id} = useParams();

    // 데이터 1건 상태 관리
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch(경로).then().then();
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())  //json을 자바스크립트 객체로 변환
            .then(result => { //result - 자바스크립트 객체
                setData(result);  // 변환 데이터를 저장
                console.log(result); // 1건
            })
            .catch(error => console.log(error));
    } , [id]);
    
    return(
        <div>
            <h2>할 일(To-do) 데이터</h2>
            {/* 조건부 렌더링:  data - true일때만 표시 */}
            {data && (
                <div>
                    <p>id: {data.id}</p>
                    <p>제목: {data.title}</p>
                    <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>
                </div>
            )}
        </div>
    )
}

export default FetchOneById;
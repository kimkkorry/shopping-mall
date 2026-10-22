import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AxiosTodoById = () => {
    const {id} = useParams();
    // todo 객체 1건 - null로 초기화
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
                
            })
            .catch(err => console.log(err));
    }, [id]);

    return(
        <div>
            <h2>할 일(To-do) 상세 보기</h2>
            {data && (
                <div>
                    <p>제목: {data.title}</p>
                    <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>
                </div>
            )}
        </div>
    )
}

export default AxiosTodoById;
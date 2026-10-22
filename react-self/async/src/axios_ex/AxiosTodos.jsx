import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AxiosTodos = () => {
    //JspnPlaceholder API에서 todos 데이터 가져오기
    const [datas, setDatas] = useState([]);

    // 데이터 목록 가져오기
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setDatas(response.data);  //json에서 js객체로 변환된 데이터
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <h2>할 일(To-do) 목록</h2>
            <ul>
                {datas.map(todo => (
                    <li key={todo.id}>
                        <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosTodos;
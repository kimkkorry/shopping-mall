import { Link } from "react-router-dom";

// 게시판 컴포넌트 정의
const Board = () => {

    return(
        <div>
            <h2>게시글</h2>
            <p>
                <Link to="/board/1">1번 글</Link>
            </p>
            <p>
                <Link to="/board/2">2번 글</Link>
            </p>
        </div>
    )
}

export default Board;
import { Link } from 'react-router-dom'

// 상단 메뉴가 있는 컴포넌트
const Header = () => {

    return(
        <div>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/signin">로그인</Link>
                <Link to="/board">게시판</Link>
            </div>
        </div>
    )
}

export default Header;
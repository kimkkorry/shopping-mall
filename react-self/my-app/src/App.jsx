
import './App.css'
import heroImg from './assets/hero.png'
import Dog from './components/Dog';
import Dog2 from './components/Dog2';
import Example01 from './components/Example01';
import Example02 from './components/Example02';
import Example03 from './components/Example03';

{/* JSX에서는 className 속성 사용 
    태그를 병렬로 사용할 수 없음(div) 태그로 감싼다
    데이터의 값(변수)을 표현식: {} 중괄호 사용
    컴포넌트는 함수 형식으로 만들고 첫글자 대문자이고
    태그 처럼 사용 <MyButton />
*/}
// 내부 컴포넌트 정의
function MyButton(){
  return(
    <button>목록보기</button>
  )
}

function App() {
  const season = "가을";

  return (
    <div className='app'>
      {/* <h2>리엑트 시작하기</h2> */}
      {/* <h3 className="welcome">홈페이지 방문을 환영합니다.</h3> */}
      <section>
        {/* Props로 데이터 전달 */}
        <Dog 
          breed="말티즈"
          age={3}
        />
        <Dog2 
          breed="풍산개"
          age={5}
        />
        {/* <p>현재 계절은 {season}입니다.</p> */}
        {/* 이미지 넣기 */}
        {/* <img 
          src={heroImg}
          alt="메인이미지"
          width={200}
         /> */}
        {/* <MyButton /> */}
        {/* <Example01 /> */}
        {/* <Example02 /> */}
        {/* <Example03 /> */}
      </section>
    </div>
  )
}

export default App

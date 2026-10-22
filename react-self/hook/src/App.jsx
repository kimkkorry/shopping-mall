import './App.css'
import Clock from './components/Clock'
import Counter from './components/Counter'
import Drinks from './components/Drinks'
import InputValue from './components/InputValue'
import User from './components/User'
import SignIn from './users/SiginIn'
import SignUp from './users/SignUp'

function App() {

  return (
    <>
      <div className='app'>
        {/* <h2>리엑트 상태 관리</h2> */}
        {/* <Counter /> */}
        {/* <InputValue /> */}
        {/* <Drinks /> */}
        {/* <Clock /> */}
        {/* <User /> */}
        {/* <SignUp /> */}
        <SignIn />
      </div>
    </>
  )
}

export default App

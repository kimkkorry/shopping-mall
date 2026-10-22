import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchAll from './components/FetchAll'
import FetchOneById from './components/FetchOneById'
import AxiosTodos from './axios_ex/AxiosTodos'
import AxiosTodoById from './axios_ex/AxiosTodoById'
import AxiosNewTodo from './axios_ex/AxiosNewTodo'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            {/* fetch 방식 */}
            {/* <Route path='/' element={<FetchAll />} />
            <Route path='/:id' element={<FetchOneById />} /> */}

            {/* axios 방식 */}
            <Route path='/' element={<AxiosTodos />} />
            <Route path='/axios/:id' element={<AxiosTodoById />} />
            <Route path='/axios-post' element={<AxiosNewTodo />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

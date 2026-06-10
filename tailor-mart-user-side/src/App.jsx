import { BrowserRouter , Routes , Route } from 'react-router'
import Home from './Pages/Home/Home'
import Feed from './Pages/Feed/Feed'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path='/' element={<Feed/>}>
            <Route index element='Hello feed'/>
            <Route path='*' element='404'/>
          </Route>
          <Route path="categories" element='This is categories'/>
          <Route path="cart" element='This is cart'/>
          <Route path="profile" element='This is profile'/>
          <Route path="*" element='404'/>
        </Route>
        <Route path="about" element='hello about'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

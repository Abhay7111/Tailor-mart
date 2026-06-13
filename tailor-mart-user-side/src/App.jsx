import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Feed from './Pages/Feed/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element="hello"/>
          <Route path='feed' element={<Feed />}>
            <Route path='/feed/:id' element={<div></div>}/>
          </Route>
          <Route path="categories" element={<div>This is categories</div>} />
          <Route path="cart" element={<div>This is cart</div>} />
          <Route path="profile" element={<div>This is profile</div>} />
          <Route path="about" element={<div>hello about</div>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

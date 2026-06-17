import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Pages/Feed/Feed';
import AllCloth from './Components/allTexturedCloths/allCloth';
import ProductDetails from './Pages/ProductDetails/productDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
            <Route index element="hello"/>
            <Route path='feed' element={<Feed />}>
              <Route path=':id' element={<AllCloth/>}/>
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Route>
          <Route path="product" >
            <Route index element={'sadasd'}/>
            <Route path=":id" element={<ProductDetails/>}/>
          </Route>
          <Route path="signup" element={<div>This is SignUp</div>} />
          <Route path="login" element={<div>This is Login</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

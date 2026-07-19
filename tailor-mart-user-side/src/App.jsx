import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './Pages/Feed/Feed';
import AllCloth from './Components/allTexturedCloths/allCloth';
import ProductDetails from './Pages/ProductDetails/productDetails';
import Order from './Pages/Order/order';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
            <Route index element="hello"/>
            {/* Feed page start from here */}
            <Route path='feed' element={<Feed />}>
              {/* It is for showing all products over here */}
              <Route path=':id' element={<AllCloth/>}/>
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Route>
          {/* product details starts here */}
          <Route path="product" >
            <Route index element={'sadasd'}/>
            <Route path=":id" element={<ProductDetails/>}> 
              <Route path=':id' element={'<ProductDetails/>'} />
            </Route>
          </Route>

          <Route path='order'>
            <Route path=':id' element={<Order/>}/>
          </Route>
          <Route path="signup" element={<div>This is SignUp</div>} />
          <Route path="login" element={<div>This is Login</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

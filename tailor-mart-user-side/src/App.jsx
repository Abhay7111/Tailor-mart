import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Feed from './Pages/Feed/Feed';
import AllCloth from './Components/allTexturedCloths/allCloth';
import MenTShirt from './Components/AllCategoryeProduct/menTShirt/menTshirt';
import WomenDress from './Components/AllCategoryeProduct/omenDress/omenDress';
import MenShirt from './Components/AllCategoryeProduct/menShirt/menShirt';
import ProductDetails from './Pages/ProductDetails/productDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
            <Route index element="hello"/>
            <Route path='feed' element={<Feed />}>
              <Route path='/feed/all' element={<AllCloth/>}/>
              <Route path='/feed/men-t-shirt' element={<MenTShirt/>}/>
              <Route path='/feed/women-dress' element={<WomenDress/>}/>
              <Route path='/feed/men-shirt' element={<MenShirt/>}/>
              <Route path='/feed/:id' element={<div>Product not found</div>}/>
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

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Feed from './Pages/Feed/Feed';
import AllCloth from './Components/allTexturedCloths/allCloth';
import MenTShirt from './Components/AllCategoryeProduct/menTShirt/menTshirt';
import WomenDress from './Components/AllCategoryeProduct/omenDress/omenDress';
import MenShirt from './Components/AllCategoryeProduct/menShirt/menShirt';

function App() {

  const {id} = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element="hello"/>
          <Route path='feed' element={<Feed />}>
            <Route path='/feed/all' element={<AllCloth/>}/>
            <Route path='/feed/men-t-shirt' element={<MenTShirt/>}/>
            <Route path='/feed/women-dress' element={<WomenDress/>}/>
            <Route path='/feed/men-shirt' element={<MenShirt/>}/>
            <Route path='/feed/:id' element={<div>Product not found</div>}/>
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

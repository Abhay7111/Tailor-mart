import { NavLink } from "react-router-dom";
import { useProductData } from "../../../Services/products.services"

function menTshirt() {

    const { data, loading, error } = useProductData();

  return (
    <div className='allCloth-main'>
        {loading && <div>loading...</div>}
        {error && <div>There is problem to fetch the data...</div>}
        
        {/* .filter(item => item.productTag?.cloth === 'smooth red cloth') */}
      
        <div className='allCloth-cont-main'>
            {!loading && !error && data.filter(item => item.productTag?.cloth === 'men-t-shirt').map((items, index) => (
                <NavLink key={index} className='allCloth-cont'>
                    <img src={items.productImage} alt={items.productImage} />
                    <h2>{items.productName}</h2>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default menTshirt

import './style.css'

function searchProduct() {
  return (
    <div className="search-main">
        <label htmlFor="products" className='cursor-pointer'><i className='ri-search-2-line'></i></label>
        <input type="search" name="products" id="products" placeholder="Fashion"/>
    </div>
  )
}

export default searchProduct

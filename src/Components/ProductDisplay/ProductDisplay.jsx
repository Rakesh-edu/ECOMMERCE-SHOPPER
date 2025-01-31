import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-display-right-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, veniam.  nisi provident quod iusto labore maiores molestiae error neque deleniti repellat repellendus?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
             <div className="productdispaly-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>X</div>
                <div>XL</div>
             </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women,T-shirt,crop top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>latest,modern</p>
        </div>
    </div>
  )
}

export default ProductDisplay

import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const {all_product,CartItems,removeFromCart}=useContext(ShopContext)
    console.log(CartItems);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
              all_product.map((e)=>{
                  if(CartItems?.[e.id] > 0)
                  {
                  return   <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt=""  className='carticon-product-icon'/>
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{CartItems[e.id]}</button>
                  <p>{e.new_price*CartItems[e.id]}</p>
                  <img className='cartremove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
              </div>
            </div>
            }
            return null;
        })
      }
    </div>
  )
}

export default CartItems

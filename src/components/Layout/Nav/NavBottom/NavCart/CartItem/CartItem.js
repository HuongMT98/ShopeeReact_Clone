import cartimg1 from "../../../../../../Assets/cartitem1.jpg"
import cartimg2 from "../../../../../../Assets/cartitem2.jpg"
import cartimg3 from "../../../../../../Assets/cartitem3.jpg"
import cartimg4 from "../../../../../../Assets/cartitem4.jpg"
import cartimg5 from "../../../../../../Assets/cartitem5.jpg"
function CartItem() {
  const Carts = [
    {
      id: 1,
      image: cartimg1,
      name: "Quần jean nam ống đứng rộng phong cách cổ điển kiểu Mỹ",
      price: 135000,
    },
    {
      id: 2,
      image: cartimg2,
      name: "Quần jean nam ống đứng rộng phong cách cổ điển kiểu Mỹ",
      price: 135000,
    },
    {
      id: 3,
      image: cartimg3,
      name: "Quần Short Nam Dáng Rộng Phong Cách Retro Mỹ Thời Trang Mùa Hè Mới",
      price: 55000,
    },
    {
      id: 4,
      image: cartimg4,
      name: "Áo Thun Tay Ngắn Họa Tiết Kẻ Sọc Dáng Rộng Thời Trang Mùa Hè Cho Nam",
      price: 89000,
    },
    {
      id: 5,
      image: cartimg5,
      name: "Áo Thun Cổ Tròn Chất Liệu Lụa Nhanh Khô Thời Trang Mùa Hè Cho Nam hzfmc0150",
      price: 40000,
    },
  ]
  return (
    <>
      {Carts.map((cart) => (
        <div className='cart-item' key={cart.id}>
          <div>
            <img src={cart.image} alt='' className='cart-item-img' />
          </div>
          <div className='cart-item-info'>
            <div>
              <div className='cart-item-name'>{cart.name}</div>
            </div>
            <div className='cart-item-price'>đ{cart.price}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartItem

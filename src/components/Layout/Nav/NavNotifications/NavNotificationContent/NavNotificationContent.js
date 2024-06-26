import { useEffect, useState } from "react"
import shoppeNotification1 from "../../../../../Assets/Notification/shoppe-notification-1.jpg"
import shoppeNotification2 from "../../../../../Assets/Notification/shoppe-notification-2.png"
import shoppeNotification3 from "../../../../../Assets/Notification/shoppe-notification-3.png"
import ApiUser from "../../../../../Api/ApiUser"

function NavNotificationContent() {
  const [data, setData] = useState([])
  useEffect(() => {
    ApiUser().then((data) => {
      setData(data)
    })
  }, [])
  const userName = data.map((item) => item.name)

  const notifications = [
    {
      id: 1,
      title: `${userName} ơi khoan hẳn ngủ nha`,
      image: shoppeNotification1,
      content:
        "💥Sắp tới giờ săn sale cuối tháng rùiii 🌟Anessa, Samsung, Coolmate..giảm đến 50% 🌸5 mã Freeship đến 300.000đ 💸Khung giờ sale khủng - Chốt đơn 'tỉnh người'",
    },
    {
      id: 2,
      title: `😊 ${userName} ơi, cho Shopee hỏi nhỏ`,
      image: shoppeNotification2,
      content:
        '✨ Các chương trình của Shopee có "ghi điểm" trong lòng bạn? Hãy chia sẻ ý kiến TẠI ĐÂY để giúp Shopee cải thiện hơn nữa nhé!',
    },
    {
      id: 3,
      title: `TẶNG ${userName} MÃ 100K CHỐT ĐƠN ĐÓN LỄ`,
      image: shoppeNotification3,
      content:
        "🎫Khi nhập FMCGA500K cho đơn từ 500.000đ 💰Thêm loạt mã giảm 20.000đ, Freeship cực đã 💥Khám phá và mua ngay TẠI ĐÂY!",
    },
    {
      id: 4,
      title: `ĐẠI LỄ CẬN KỀ - LÊN ĐỒ ĐI CHƠI THÔI`,
      image: shoppeNotification3,
      content:
        "🤷‍♀️Outfit cực chất, xinh hết nấc 🥰Lên đồ đi chơi 30/4 1/5 ngay hôm nay 📢Bỏ giỏ hàng chờ sale siêu ưu đãi",
    },
    {
      id: 5,
      title: `🎁 ${userName} MÃ 100K CHỐT ĐƠN ĐÓ LỄ`,
      image: shoppeNotification1,
      content:
        "Nhớ vài lưu ý, Lễ vui đặt hàng🛒🇻🇳. Bỏ túi ngay các lưu ý cho dịp Lễ 30.4 & 1.5 sắp tới TẠI ĐÂY bạn nhé!",
    },
    {
      id: 6,
      title: `TẶNG ${userName} MÃ 100K CHỐT ĐƠN ĐÓ LỄ`,
      image: shoppeNotification2,
      content:
        "Nhớ vài lưu ý, Lễ vui đặt hàng🛒��🇳. Bỏ túi ngay các lưu ý cho dịp Lễ 30.4 & 1.5 sắp tới TẠI ĐÂY bạn nhé!",
    },
  ]

  return (
    <>
      {notifications.map((notification) => (
        <div key={notification.id} className='box-notification'>
          <div>
            <img
              src={notification.image}
              alt=''
              className='image-notification'
            />
          </div>
          <div>
            <div className='boxwrap-notification'>
              <h5 className='title-notification'>{notification.title}</h5>
              <p className='content-notification'>{notification.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default NavNotificationContent

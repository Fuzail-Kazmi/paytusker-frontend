/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useGetCustomerOrdersQuery } from "../../features/api/api"
import { Navbar } from "../../layouts"
import { Freeze } from "../../components"
import { FormatCurreny } from "../../utils"
import { UserSidebar } from "../../layouts"

const Orders = () => {
  const { data, isLoading } = useGetCustomerOrdersQuery()
  const [pageLoading, setPageLoading] = useState(isLoading)
  const [orders, setOrdersData] = useState([])
  useEffect(() => {
    setPageLoading(isLoading)
    setOrdersData(data)
  }, [data, isLoading])

  if (pageLoading) return <Freeze />
  return (
    <div style={{ display: "flex" }} className="sidebar-page">
      <UserSidebar />
      <div className="sidebar-page__content">
        <Navbar title={"Your Orders"} />
        <main className="order-page-main">
          {orders?.map((val, index) => (
            <OrdersCard key={index}
              data={val} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Orders


const OrdersCard = ({ data }) => {
  return (
    <div className="order-card">
      <div>
        <div>ORDER ID: {data?.order_id}</div>
        <div className="order-status">
          Delivered
        </div>
        <div>
          <span className="text-sm">Total Amount: </span>
          {FormatCurreny(data?.grand_total)}</div>
        <div>
          <span className="text-sm">Total Qty: </span>
          {data?.total_qty}</div>
      </div>
      <div>
        {data?.items?.map((val, index) => <OrderItemCard key={index} itemData={val} />)}
      </div>
    </div>
  )
}

const OrderItemCard = ({ itemData }) => {
  return (
    <div className="order-item__card">
      <div className="order-item__card-img">
        <img src={itemData?.cover_image || ""} alt="" />
      </div>

      <div className="order-item__card-details">
        <div className="order-item-card-detail__left">
          <div className="text-sm order-item__card-name">{itemData?.product_name}</div>
          <div className="text-sm order-item__card-rate">{FormatCurreny(itemData?.rate)}</div>
        </div>

        <div className="order-item-card-detail__right">
          <div className="text-sm order-item__card-qty">
            {itemData?.qty}
          </div>

          <div className="text-sm order-item__card-amount">
            <div>{FormatCurreny(itemData?.amount)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
{/* <div className="text-xs">Amount</div> */ }
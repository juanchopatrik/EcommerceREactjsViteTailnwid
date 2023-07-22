import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div>
        <h1>MyOrders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }

    </Layout>
  )
}

export default MyOrders
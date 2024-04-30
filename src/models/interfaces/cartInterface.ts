import CardProduct from './cartProductInterface'

interface ICart {
  id: number
  products: CardProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export default ICart

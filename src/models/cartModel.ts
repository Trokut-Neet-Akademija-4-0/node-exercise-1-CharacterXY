import ICart from './interfaces/cartInterface'
import ICartProduct from './interfaces/cartProductInterface'

// Cart klasa nam treba da bi pratili stanje kosarice a posto se ona dinamciki generira je nemamo gotov JSOn onda je bolje da kreiramo sa klasom i rjeci new pri exportu

class Cart implements ICart {
  constructor() {
    this.id = 0
    this.products = []
    this.total = 0
    this.discountedTotal = 0
    this.totalQuantity = 0
    this.userId = 0
  }

  products: ICartProduct[]

  id: number

  total: number

  discountedTotal: number

  userId: number

  public get totalProducts() {
    return this.products.length
  }

  totalQuantity: number
}

export default new Cart()

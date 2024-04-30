import CartProduct from '../models/cartProductModel'
import ICart from '../models/interfaces/cartInterface'
import userCart from '../models/cartModel'
import productService from './productService'
import HttpError from '../utils/HttpError'

// Cart servis gdje nam se nalazi sva poslovna logika vezana za kosaricu

class CartService {
  private cart: ICart = userCart

  getCart(): ICart {
    return this.cart
  }

  // dodavanje produkta u kosaricu pomocu produkt-id-a, uvijek uvecava produkt za 1

  addProductById(id: number): ICart {
    this.changeProductQuantity(id, 1)
    this.updateCartInformation()
    return this.cart
  }

  // skidanje cijelog produkta iz kosarice

  deleteProductById(id: number): ICart {
    const indexToDelete = this.getCartProductIndexByProductId(id)

    if (indexToDelete < 0)
      throw new HttpError(404, `Cart product with id ${id} not found`)

    this.cart.products.splice(indexToDelete, 1)
    this.updateCartInformation()
    return this.cart
  }

  // brisanje proizvoda iz kosarice

  clearCart(): ICart {
    this.cart.products = []
    this.updateCartInformation()
  }

  // metoda koja kreira produkt u kosarici ako ne postoji
  // uvecava kolicinu ako je quanitityModifier pozitivan broj
  // i smanjuje kolicinu ako je negativan, ako je nula brise produkt iz kosarice

  changeProductQuantity(productId: number, quanitityModifier: number): void {
    const product = productService.getProductById(productId)

    try {
      const existingCartProduct = this.getCartProductByProductId(product.id)
      if (existingCartProduct.quantity + quanitityModifier > 0)
        existingCartProduct.quantity += quanitityModifier
      else this.deleteProductById(existingCartProduct.id)
    } catch (error) {
      if (error instanceof HttpError)
        this.cart.products.push(
          new CartProduct(
            this.getNextAvailableCartProductId(),
            product,
            quanitityModifier,
          ),
        )
    }
  }

  // pomocna metoda koja na temelju product id-a nalazi cart product
  getCartProductByProductId(id: number): CartProduct {
    const foundCartProduct = this.cart.products.find(
      (cartProduct) => cartProduct.product.id === id,
    )
    if (!foundCartProduct)
      throw new HttpError(404, `Cart product with id ${id} not found`)
    return foundCartProduct
  }

  // pomocna metoda koja na temleju prodcut id-a nalazi cart product index

  getCartProductIndexByProductId(id: number): number {
    const cartProductIndex = this.cart.products.findIndex(
      (cartProduct) => cartProduct.product.id === id,
    )
    if (cartProductIndex < 0)
      throw new HttpError(404, `Cart product with id ${id} not found`)
    return cartProductIndex
  }

  getNextAvailableCartProductId(): number {
    let gratestId = 0
    this.cart.products.forEach((cartProduct) => {
      gratestId = cartProduct.id > gratestId ? cartProduct.id : gratestId
    })
    return gratestId + 1
  }

  updateCartInformation() {
    let totalQuantity = 0
    let total = 0
    let totalDiscounted = 0
    this.cart.products.forEach((cartProduct) => {
      const totalProductPrice = cartProduct.quantity * cartProduct.product.price
      total += totalProductPrice
      totalDiscounted +=
        totalProductPrice -
        totalProductPrice * (cartProduct.product.discountPercentage / 100)
      totalQuantity += cartProduct.quantity
    })

    this.cart.total = total
    this.cart.discountedTotal = totalDiscounted
    this.cart.totalQuantity = totalQuantity
  }
}

export default new CartService()

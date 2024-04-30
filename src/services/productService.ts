/* eslint-disable class-methods-use-this */
import IProduct from '../models/interfaces/productInterface'
import Products from '../entities/Products'
import HttpError from '../utils/HttpError'

class ProductService {
  private product: IProduct[] = []

  constructor() {
    // Initially, let's add some dummy users
    this.product.push(
      {
        id: 1,
        title: 'TREK Fuel EXe 9.7 2023 Matte Pennyflake',
        price: 3700.0,
        description:
          'Fuel EX is a full suspension bike that s made to hit every trail, every day. From epic long-distance rides to rowdy local trails after work, Fuel EX s balanced geometry and sweet-spot suspension set-up give you nerve for descents and heart for climbs. We don t think you should have to choose just one mountain bike. But if you do, choose this one.',
        imageUrl: '/src/assets/trek-rail.webp',
      },
      {
        id: 2,
        title: 'TREK Rail',
        price: 2100.0,
        description:
          'Fuel EX is a full suspension bike that’s made to hit every trail, every day. From epic long-distance rides to rowdy local trails after work, Fuel EX’s balanced geometry and sweet-spot suspension set-up give you nerve for descents and heart for climbs. We don’t think you should have to choose just one mountain bike. But if you do, choose this one.',
        imageUrl:
          'src/assets/SupercaliberSLR99XOAXS-24-41728-A-Alt1_2048x.webp',
      },
      {
        id: 3,
        title: 'Giant Anthem',
        price: 2100.0,
        description:
          'Fuel EX is a full suspension bike that’s made to hit every trail, every day. From epic long-distance rides to rowdy local trails after work, Fuel EX’s balanced geometry and sweet-spot suspension set-up give you nerve for descents and heart for climbs. We don’t think you should have to choose just one mountain bike. But if you do, choose this one.',
        imageUrl: '/src/assets/trek-rail.webp',
      },
    )
  }

  // Stavlja se promise jer on obecava da ce se nesto vratiti i u njegov controller vracamo vrijednosti koje onda moramo awaitati
  getAllProducts(): Promise<Products[]> {
    return Products.find()
  }

  getProductById(id: number): Promise<Products | undefined> {
    return Products.findOneBy({ productId: id })
  }

  // Ovdje brisemo produkte prema ID-u koji prosljedivamo.
  async deleteProductById(id: number): Promise<Products | undefined> {
    const indexToDelete = await Products.findOneBy({ productId: id })
    console.log(indexToDelete)

    // if (indexToDelete < 0) {
    //   throw new HttpError(404, `Product with id ${id} not found`)
    // }

    // const deleteProduct = this.product.splice(indexToDelete, 1)
    // return deleteProduct[0]
  }

  addNewProduct(newProduct: Products): void {
    const product = new Products()
    product.title = product.productTitle
    product.description = product.productDescription
    product.rating = product.productRating
    product.stock = product.productStock
    product.isavailable = product.productIsavailable
    product.atdiscount = product.productAtdiscount
    product.discount = product.productDiscount
    product.brend = product.productBrend
    product.code = product.productCode
    product.category = product.productCategory
  }
}
export default new ProductService()

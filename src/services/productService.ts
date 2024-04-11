import Product from '../models/interfaces/productInterface'

class ProductService {
  private product: Product[] = []

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

  getAllProducts(): Product[] {
    return this.product
  }

  getProductById(id: number): Product | undefined {
    return this.product.find((product) => product.id === id)
  }

  deleteProductById(id: number): Product | undefined {
    const indexToDelete = this.product.findIndex((product) => product.id === id)

    if (indexToDelete < 0) return undefined

    const deleteProduct = this.product.splice(indexToDelete, 1)
    return deleteProduct[0]
  }
}
export default new ProductService()

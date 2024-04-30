export default interface IProduct {
  id: number
  title: string
  price: number
  description: string
  imageUrl: string[]
  stock: number
  brand: string
  category: string
  discountPercentage: number
  onSale: boolean
}

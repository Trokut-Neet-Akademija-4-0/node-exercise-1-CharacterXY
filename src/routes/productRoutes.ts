import express, { Request, Response } from 'express'
import productService from '../services/productService'
import { createProduct } from '../controllers/productController'

const router = express.Router()

router.get('', async (req: Request, res: Response) => {
  const product = await productService.getAllProducts()
  res.send(product)
})

router.get('/:id', async (req: Request, res: Response) => {
  const productId = +req.params.id
  const product = await productService.getProductById(productId)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send('Product not found')
  }
})

router.get('/delete/:id', async (req: Request, res: Response) => {
  const productId = +req.params.id
  const deletedProduct = await productService.deleteProductById(productId)
  res.send(deletedProduct)
})

router.post('/', createProduct)

export default router

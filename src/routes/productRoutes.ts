import express, { Request, Response } from 'express'
import productService from '../services/productService'

const router = express.Router()

router.get('', (req: Request, res: Response) => {
  const product = productService.getAllProducts()
  res.send(product)
})

router.get('/:id', (req: Request, res: Response) => {
  const productId = +req.params.id
  const product = productService.getProductById(productId)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send('Product not found')
  }
})

router.get('/delete/:id', (req: Request, res: Response) => {
  const productId = +req.params.id
  const deletedProduct = productService.deleteProductById(productId)
  res.send(deletedProduct)
})

export default router

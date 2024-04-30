import { Request, Response } from 'express'
import productService from '../services/productService'
import IProduct from '../models/interfaces/productInterface'

const getAllProducts = async (req: Request, res: Response) => {
  res.send(await productService.getAllProducts())
}

const getProductById = async (req: Request, res: Response) => {
  res.send(
    await productService.getProductById(Number.parseInt(req.params.id, 10)),
  )
}

const createProduct = (req: Request, res: Response) => {
  const newProduct = req.body as IProduct
  res.send(productService.addNewProduct(newProduct))
}

const deleteProductById = async (req: Request, res: Response) => {
  res.send(
    await productService.deleteProductById(Number.parseInt(req.params.id, 10)),
  )
}

export { getAllProducts, getProductById, createProduct, deleteProductById }

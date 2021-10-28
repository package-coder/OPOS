import express from "express";
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler';
import Product from "../models/productModel.js";

const router = express.Router();


// @desc    Fetch all products
// @route   GET /api/products
// @access  public
router.get('/', asyncHandler( async (req, res) => {
    const product = await Product.find({});

    res.json(product);
})) 



// @desc    Fetch single products
// @route   GET /api/products
// @access  public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    
    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message: 'Product not found'});
    }
    
}))

export default router;

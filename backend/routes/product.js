const express= require('express');
const router= express.Router();

const {getProductById, createProduct, getProduct,getPhoto}= require('../controllers/product');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');
const {getUserById}= require('../controllers/user');

//param middleware: 
router.param('userId', getUserById);
router.param('peroductId', getProductById)

//actual routes: 

//only admin can create products
router.post('/product/create/:userId',isSignedIn,isAuthenticated, isAdmin, createProduct)

router.get('/product/:productId', getProduct)



module.exports= router; 
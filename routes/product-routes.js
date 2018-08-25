const router = require('express').Router();
const Product = require('../models/Product.js')

router.get("/get", (req,res) => {
Product.find(req.body)
	.then(data => res.send(data))
	
})

router.post("/", (req,res) => {
	Product.create(req.body)
	.then(data => res.send(data))
})


router.get("/edit/:id", (req,res) => {
	Product.findById({_id : req.params.id})
	.then(data => res.send(data))
})

router.put("/edit/:id", (req,res) => {
	Product.findByIdAndUpdate({_id : req.params.id}, { $set: { 
													title	: req.body.title, 
													image 	: req.body.image,  
													price 	: req.body.price,
													descriptions : req.body.descriptions
	}})
	.then(data => {
		Product.find({})
		.then(data => res.send(data))
	})
})

router.delete("/:id", (req,res) => {
	const id = req.params.id
	Product.findByIdAndRemove(id)
	.then(data => res.send("Has been deleted"))
})

module.exports = router;
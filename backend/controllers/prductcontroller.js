
const Products = require("../models/productmodel")

// add products // create product

exports.addProducts = async(req,res)=>{

    const product = await Products.create(req.body)
    return res.status(200).json({
        status : true,
        product,
        message : " products add succefully"
    })
}

// get single product 

exports.getSingleProduct = async(req,res)=>{
    const product = await Products.findById(req.params.id);
    if(!product){
        return res.status(400).json({
            status : true,
            mesaage : "single product not found"
        })
    }
    res.status(200).json({
        success: true,
        product,
        message: "single product get succesfully"
    })
}
// update product

exports.updateProducts = async (req, res) => {
    let product = await Products.findById(req.params.id);
    if (!product) {
        res.status(400).json({
            success: true,
            message: "product not found"
        })
    }
    product = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    })
    res.status(200).json
        ({
            success: true,
            product,
            message: "product updated succesfully"
        })

}

// delete product
exports.deleteProduct = async(req,res)=>{

const product = await Products.findByIdAndRemove(req.params.id)
    if(!product){
         res.status({
            status : false,
            message : "product not found"
        })

    }
     Products.remove(req.params.id)
     res.status(200).json({
        status : true,
        message : "Product delete Succesfully",
        product
    })
}


// get All products

exports.getAllProducts= async(req,res)=>{
    try{
        {
            const product = await Products.find(req.query)
            console.log(req.query);
                return res.status(200).json({
                    status : true,
                    product,
                    message : "all products get succefully"
                })
            }
    }
    catch(err){
        return res.send(err)

    }
}
// search functinality

exports.getSearchProduct = async (req, res) => {
    var regex = new RegExp(req.params.id,'i');
    Products.find({ name: regex }).then((result) => {
        res.status(200).json(result)

    })
}
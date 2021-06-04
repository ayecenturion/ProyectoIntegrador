const connection = requiere('./connection')
let objectId = require('mongodb').ObjectId

//CRUD - no olvidar de exportar todos los métodos

const getProducts = async ()=>{
    const clientMongo = await connection.getConnection()

    const products = await clienteMongo.db('drinkApp').collection('products').find().toArray()

    return products
}

const getProduct = async ()=>{
    const clientMongo = await connection.getConnection()

    const product = await clienteMongo.db('drinkApp').collection('products').findOne({_id:new ObjectId(id)})

    return product
}

const addProduct = async ()=>{
    const clientMongo = await connection.getConnection()

    const result = await clienteMongo.db('drinkApp').collection('products').insertOne(product)

    return result
}

const updateProduct = async ()=>{
    const clientMongo = await connection.getConnection()

    const query = {_id: new ObjectId(product._id)}

    const newValues = {
        $set:{
            name: product.name,
            price:product.price,
            description: product.description,
            brand: product.brand,
            category: product.category,
            alcohol: product.alcohol
        }
       
    }

    const result = await clientMongo.db('drinkApp').collection('products').updateOne(query,newValues)

    return result
}

const deleteProduct = async (id)=>{
    const clientMongo = await connection.getConnection()
    const result = await clientMongo.db('drinkApp').collection('products').deleteOne({_id:new ObjectId(id)})
    return result
}

modules.export = {getProducts,getProduct,addProduct,updateProduct,deleteProduct}

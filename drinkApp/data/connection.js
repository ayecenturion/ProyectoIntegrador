const mongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://admin:admin123@cluster0.o9sox.mongodb.net/drinkApp?retryWrites=true&w=majority"
const client = new mongoClient(uri)

//Instancio la conexion con la BD - Patron singleton

let instance = null

const getConnection = async () =>{
    if(instance == null){
        try {
            instance = await client.connect()
        } catch (error) {
            console.log(error.message)
            throw new Error('Tiene problemas para conectarse con Mongo')
            
        }
    }
    return instance
}

modules.export(getConnection)

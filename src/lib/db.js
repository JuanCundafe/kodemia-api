
const mongoose = require('mongoose')

function connect (){
    return mongoose.connect(
        'mongodb+srv://JuanCundafe:kodemia8022_@juandatabase.u8k8x.mongodb.net/Kodemia?authSource=admin&replicaSet=atlas-4lg431-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } 
    )
}

module.exports = connect
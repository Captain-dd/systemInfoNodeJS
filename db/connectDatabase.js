const mongoose  = require('mongoose')

const connectDB = async () => {
    const connectionUri = process.env.CONNECTION_URI

    const connect = await mongoose.connect(connectionUri)

    console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );

}


module.exports = connectDB

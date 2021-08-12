const mongoose = require("mongoose")

async function main(){
   await mongoose.connect("mongodb://localhost/wtm", { useNewUrlParser: true, useUnifiedTopology: true })
   console.log("connected!")
}

main() // connect to mongodb
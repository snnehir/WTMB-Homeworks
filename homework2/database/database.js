const fs = require("fs")
const saveData = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
    
    
}

const readData = function (filename) {
    thing = fs.readFileSync(filename)
    return JSON.parse(thing)
    
}


module.exports = {readData, saveData}
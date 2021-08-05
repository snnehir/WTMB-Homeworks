const fs = require("fs")

module.exports = class Service{
    constructor(model, dbPath){
        this.model = model
        this.dbPath = dbPath
    }

    async findAll(){
        return new Promise((resolve, reject)=>{
            fs.readFile(this.dbPath, "utf8", async(err, file)=>{
                if(err){
                    // if "no file" error ocures, create new file
                    if(err.code == "ENOENT"){
                        await this.saveAll([]) // wait until empty array is saved
                        return resolve([])
                    }
                    // if another error ocures, reject
                    return reject(err)
                }

                // if everything is ok, create object array
                const items = JSON.parse(file).map(this.model.create)
                resolve(items)
            })

        })
    }

    async add(item){
        const allItems = await this.findAll() // array of all items (wait until completed)
        const lastItem = allItems[allItems.length - 1] 
        const lastItemsId = lastItem && lastItem.id || 0
        item.id = lastItemsId + 1

        allItems.push(item)

        await this.saveAll(allItems)

        return item

    }

    async find_item(itemId=1){
        const allItems = await this.findAll()
        return allItems.find(p => p.id == itemId) // find: array property
    }

    async del(itemId){
        const allItems = await this.findAll()
        const itemIndex = allItems.findIndex(p => p.id == itemId) // findIndex: array property
        if (itemIndex < 0) return

        allItems.splice(itemIndex, 1) // splice: array method, remove 1 element at specified index 

        await this.saveAll(allItems) // save array
    }

    async saveAll(items){
        return new Promise((resolve, reject)=>{
            fs.writeFile(this.dbPath, JSON.stringify(items), (err, file)=>{
                if(err) return reject(err)

                resolve()
            })
        })
    }

    // push: end of array
    // unshift: beginning of array
}


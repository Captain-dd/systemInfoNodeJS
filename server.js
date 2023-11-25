const si = require("systeminformation");
const connectDB = require("./db/connectDatabase");
const systemSchema = require("./models/systemInfoSchema")
const dotenv = require("dotenv").config()
const os = require('os')


const cpuUsage = async () => { 

    // this si.currentLoad will return an promise immeditately
    const cpuData = await si.currentLoad();
    return cpuData

}

const memoryUsage = async () => {
    const ramData = await si.mem()
    return ramData
}

async function fetchData(){
    const cpuData = await cpuUsage()
    const ramUsage = await memoryUsage()
    const totalRam = ramUsage.total
    const usedRam = ramUsage.active
    const freeRam = totalRam - usedRam
    const freeRamPercent = (freeRam*100)/totalRam
    const systemName = os.hostname()

    const a = await systemSchema.create(
        {
            systemName: systemName,
            cpuUsage: cpuData.currentLoad,
            ramUsage: ramUsage
        }
    )
    
    console.log(a)
}

// fetchData()

connectDB()

setInterval(fetchData, 1000)


const mongoose = require("mongoose")

const systemInfoSchema = mongoose.Schema(
    {
        systemName: {
            type: String,
            required: [true, "system name is necessary"]
        },

        cpuUsage: {
            type:Number,
            required: [true, "value of cpu usage is necessary"]
        },

        ramUsage: {
            type:Object,
            required: [true, "value of Ram usage is necessary"]
        },

    }
)


module.exports = mongoose.model("systemInfo", systemInfoSchema)


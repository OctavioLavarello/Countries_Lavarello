const { Activity } = require("../../db")

const getActivities = async () => {
    try {
        const Activities = await Activity.findAll()
        if (!Activities || Activities.length === 0){
            throw new Error ("There are no activities")
        }
        return (Activities)
    } catch (error) {
        throw error.message
    }  
}

module.exports = {
    getActivities
}    

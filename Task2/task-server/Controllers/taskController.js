const { where } = require("sequelize")
const {Task} = require("../models")

const getdata = async(req, res)=>{
    try {
        const task = await Task.findAll({})
        res.send(task)
    } catch (error) {
        console.log(error)
    }
}

const postData = async(req, res)=>{
    try {
        console.log(req.body, "-------req.body");
        const {title, content} = req.body
        const task = await Task.create({
            title,
            content
        })
        console.log(task)
        res.send({message:"data inserted successfully...", task: task})
    } catch (error) {
        console.log(error)
    }
}


const deletedData = async (req, res)=>{
    try {
        const task = await Task.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send({message:"data deleted successfully..."})
    } catch (error) {
        console.log(error)
    }

}

module.exports = {getdata, postData, deletedData}


















// const updateData = async(req, res)=>{
// try {
//     const {title, content} = req.body
//     const task = await Task.update({
//         title,
//         content
//     },{ 
//         where:{
//             id:req.params.id
//         }
//     })
//     res.send({message:"data updated successfully..."})

// } catch (error) {
//     console.log(error)
// }
// }
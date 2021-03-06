const Role = require("../models/role");

//req lo que llegó del api, res lo que va a responder 
const registerRole = async (req, res) =>{
    if(!req.body.name || !req.body.description)
    return res.status(401).send("Process failed: Incomplete data");

    const existingRole = await Role.findOne({name: req.body.name});
    if (existingRole) return res.status(401).send("Process failed: role already exist");

    const role = new Role({
        name: req.body.name,
        description: req.body.description,
        dbStatus : true,
    });

    const result = await role.save();
    if(!result) return res.status(401).send("Failed to register role");
    return res.status(200).send({ role });

};

const listRoles = async(req, res) =>{
    const role = await Role.find()
    if(!role || role.length == 0) return res.status(401).send("No role")
    return res.status(200).send({role})
};

const updateRole = async(req,res)=>{
   
    if(!req.body._id ||!req.body.description) 
    return res.status(401).send("Process failed: incomplete data");
    const role = await Role.findByIdAndUpdate(req.body._id, {description: req.body.description});
    if(!role) return res.status(401).send("Failed to updateRole");
    return res.status(200).send({role});

};

module.exports = {registerRole, listRoles, updateRole};
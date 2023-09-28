const Machine=require('../models/schema')

exports.Register=(req,res)=>{
    let ram_size=req.body.ram_size
    let ram_unit=req.body.ram_unit
    let cpu_size=req.body.cpu_size
    let cpu_unit=req.body.cpu_unit
    let disk_size=req.body.disk_size
    let disk_unit=req.body.disk_unit
    let name=req.body.name
    let processor=req.body.processor
    Machine.create({ram_size,ram_unit,cpu_size,cpu_unit,disk_size,disk_unit,name,processor}).then((data)=>{
        res.send(data)
    })
}

exports.getAllInstances=(req,res)=>{
    Machine.find({}).then((data)=>{
        res.send(data)
    })
}

exports.getSingleInstances=(req,res)=>{
    let name=req.params.name
    Machine.find({name}).then((data)=>{
        res.send(data)
    })
}

exports.getInstanceDetail=(req,res)=>{
    let name=req.params.name
    Machine.find({name},{_id:0,name:1,cpu_size:1,cpu_unit:1,disk_size:1,disk_unit:1}).then((data)=>{
        res.send(data)
    })
}

exports.updateInstance=(req,res)=>{
    let name=req.params.name;
    let ram_size=req.body.ram_size
    let ram_unit=req.body.ram_unit
    let cpu_size=req.body.cpu_size
    let cpu_unit=req.body.cpu_unit
    let disk_size=req.body.disk_size
    let disk_unit=req.body.disk_unit
    let processor=req.body.processor
    Machine.updateOne({name:name},{$set:{ram_size,ram_unit,cpu_size,cpu_unit,disk_size,disk_unit,processor}}).then((data)=>{
        res.send("updated")
    })
    
}




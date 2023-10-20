
const IncomeModel = require('../models/income')

exports.poste1 = async(req,res)=>{
    console.log('income controller');
    const {income,amount} = req.body
   const data = await IncomeModel.create({
        income,
        amount
    })
    res.json(data)
}

exports.getDetails1 = (req, res) => {
    IncomeModel.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.log(err))
}

exports.del1 = async (req,res)=>{
    let id=req.params.id;
   await IncomeModel.destroy({where:{id}})
//    .then((result)=>res.json(result))
//     .catch(err=>console.log(err))

    .then((result)=>{
      res.json(result)
     })
    .catch(err=>{console.log(err)})
    
}

exports.sum1 = async(req,res)=>{
    try{
    const sum = await IncomeModel.sum('amount')
    res.json(sum)
    }
    catch(err){
        console.log(err);
    }
}



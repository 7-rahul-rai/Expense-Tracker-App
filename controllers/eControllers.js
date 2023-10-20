//const db = require('../models/index')
const ExpenseModel = require('../models/expense')
//const expense = db.expense

// const home=(req,res)=>{
//    res.render('index.html')
// }

exports.poste = async(req,res)=>{
    console.log('in exports poste')
    const expense = req.body.expense
    const amount = req.body.amount
    const data = await ExpenseModel.create({
        expense:expense,
        amount:amount
    })
    res.json(data)
}


exports.getDetails = (req, res) => {
    ExpenseModel.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.log(err))
}

exports.del = (req,res)=>{
    let id=req.params.id;
    ExpenseModel.destroy({where:{id}})
    .then((result)=>res.json(result))
    .catch(err=>console.log(err))
    
}

exports.sum = async(req,res)=>{
    try{
    const sum = await ExpenseModel.sum('amount')
        res.json(sum)
    }
    catch(err){
      console.log(err);
    }
}
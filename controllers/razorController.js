const Razorpay = require('razorpay')

const razorpay = new Razorpay({
    key_id: 'rzp_test_akrZQb34LVSWdb' ,
    key_secret: 'dQ2fZzW4QTiU3XvnXHOPNeWy'
})

const createOrder = async(req,res)=>{
    const options = {
        amount: 50000, // amount in paise
        currency: "INR",
        receipt: "order_rcptid_11",
      };

     try{
        let order = await razorpay.orders.create(options)
        res.json(order)
     }
     catch(err){
        res.status(500).send(error);
     }
}

module.exports = {createOrder}
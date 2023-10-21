document.getElementById('eform').addEventListener("submit",addele)
const prime = document.getElementById('prime')


async function addele(event){
    event.preventDefault();
    let expense = document.getElementById('expense').value 
    let amount = document.getElementById('amo').value
    
    const obj={
        expense,
        amount
    }
    await axios.post('/poste',obj)
    .then((result)=>{
        console.log(result.data);
    })
    .catch(err=>console.log(err))

    document.getElementById('eform').reset()
}

prime.addEventListener('click',async()=>{
    try{
     const response = await axios.post('/prime')
     console.log(response.data);
     window.location.href = `https://rzp.io/i/L3mBE8M58t`;
    }
    catch(err){
      console.log(err);
    }
 })

  



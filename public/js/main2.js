document.getElementById('eform1').addEventListener("submit",addele1)
const prime = document.getElementById('prime')


async function addele1(e){
    e.preventDefault()
    let income = document.getElementById('income').value
    let amount = document.getElementById('amount').value

    const congfig = {income,amount}
    axios.post('/poste1',congfig)
    .then((res)=>{console.log(res.data);})

    document.getElementById('eform1').reset()
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
document.getElementById('eform').addEventListener("submit",addele)

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

  



document.getElementById('eform1').addEventListener("submit",addele1)

async function addele1(e){
    e.preventDefault()
    let income = document.getElementById('income').value
    let amount = document.getElementById('amount').value

    const congfig = {income,amount}
    axios.post('/poste1',congfig)
    .then((res)=>{console.log(res.data);})

    document.getElementById('eform1').reset()
}
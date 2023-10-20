const income = document.getElementById('incomeTableBody')
const expense = document.getElementById('expenseTableBody')
const tincome = document.getElementById('headIncome')
const texpense = document.getElementById('headExpense')
var balance = document.getElementById('balance')
const date = document.getElementById('date')

async function fetchincome(){
  try{
     var totalIncome = 0
      income.innerHTML='' 
     const response = await axios.get('/get-details1')
     if(response.data){
       response.data.forEach(element => {
          income.innerHTML+=`<tr>
          <td>${element.income}</td>
          <td>${element.amount}</td>
          <td><button class="btn btn-danger" onclick="deleteIncome(${element.id})">delete</button></td>
        </tr>`
        totalIncome += parseInt(element.amount);
       });
       tincome.textContent = totalIncome
     }
  }
  catch(err){
    console.log(err)
  }
}


async function fetchexpense(){
  try{
    var totalExpense = 0;
      expense.innerHTML='' 
     const response = await axios.get('/get-details')
     if(response.data){
       response.data.forEach(element => {
          expense.innerHTML+=`<tr>
          <td>${element.expense}</td>
          <td>${element.amount}</td>
          <td><button class="btn btn-danger" onclick="deleteExpense(${element.id})">delete</button></td>
        </tr>`
        totalExpense += parseInt(element.amount);
       });
       texpense.textContent = totalExpense
     }
  }
  catch(err){
    console.log(err)
  }

}

async function deleteIncome(id){
  try{
    const response = await axios.delete(`/del1/${id}`)
      console.log('income deleted')
    fetchincome()
    getbal()
  }
  catch(err){
    console.log(err)
  }

}

async function deleteExpense(id) {
  try {
    const response = await axios.delete(`/del/${id}`);
    console.log('expense deleted');
    fetchexpense();
    getbal()
  } catch (err) {
    console.log(err);
  }
}

async function getbal(){
   try{
     const sumincome = await axios.get('/sum1')
     const sumXpense = await axios.get('/sum')
     const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() ;
  const day = today.getDate();
  const formattedDate = `Date : ${day}-${month}-${year}`;
     console.log(sumincome);  
     console.log(sumXpense);
     let totalbal = parseInt(sumincome.data-sumXpense.data)
     if(totalbal<0){
      balance.innerHTML=`<h5><span style="color:red;">Negative Balance : ${totalbal}</span>
     </h5>`
     }
     else{
     balance.innerHTML=`<h5><span style="color: rgb(39, 170, 7);">Balance : ${totalbal}</span>
     </h5>`
     }
     date.textContent = formattedDate

   }
   catch(err){
    console.log(err);
   }
}

fetchincome()
fetchexpense()
getbal()


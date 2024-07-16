const DepositeBtn=document.querySelector("#btn-deposite");
const DepositeFeild=document.querySelector("#deposite-input");
const depositeBlance=document.querySelector("#deposite-total");
const TotalBalance=document.querySelector("#balance-total");
DepositeBtn.addEventListener("click", function(){
   const depositeAmount=DepositeFeild.value;
   DepositeFeild.value='';
   const newDeposite=Number(depositeAmount)

   const depositeTotal=depositeBlance.innerHTML;
   const priviousDeposite=Number(depositeTotal)

   const currentDeposit=priviousDeposite+newDeposite
   depositeBlance.innerHTML =currentDeposit;

//    total Ammount
const priviousTotalBlance=TotalBalance.innerHTML;
const Totalamount=Number(priviousTotalBlance);
const currentTotal =newDeposite+Totalamount;

TotalBalance.innerHTML=currentTotal
})
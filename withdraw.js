const WithdrawBtn=document.querySelector("#btn-withdraw");
const WithdrawInput=document.querySelector("#withdraw-field");
const withdrawBlance=document.querySelector("#withdraw-total")
const TotalDepositeBalance=document.querySelector("#balance-total");


WithdrawBtn.addEventListener("click",()=>{
  const Pwithdraw=WithdrawInput.value;
  const Nwithdraw=Number(Pwithdraw)
  WithdrawInput.value=''

  const pwithdrawValue=withdrawBlance.innerHTML;
  const nwithdrawValue=Number(pwithdrawValue)



  
 
  const priviousTotal=TotalDepositeBalance.innerHTML;
  const withdrawTotal=priviousTotal-Nwithdraw;
  if (Nwithdraw > priviousTotal) {
    alert('sorry not avalavil your blance');
    return;
}  const newWithdraw=nwithdrawValue+Nwithdraw
withdrawBlance.innerHTML=newWithdraw;

  TotalDepositeBalance.innerHTML=withdrawTotal
  

})

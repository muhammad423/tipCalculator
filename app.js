const inputBillEl = document.querySelector('.bill-input')
const tipInputEl = document.querySelector('.tip-input')
const tAmountEl = document.querySelector('.t-amount')
const btnEl = document.querySelector('.btn')
const plusEl = document.querySelector('.fa-plus')
const peopleInputEl = document.querySelector('.people-input')
const minusEl = document.querySelector('.fa-minus')


const addFun = () => {
    let add = Number(inputBillEl.value) + Number(tipInputEl.value);
     tAmountEl.innerText = `$ ${add}`

     let totalC = add/peopleInputEl.innerText
     tAmountEl.innerText = totalC
    
}
btnEl.addEventListener('click', addFun) 


const plusFun = () => {
   
if(peopleInputEl !== 1){
    peopleInputEl.innerText++
   addFun()
}else{
    peopleInputEl.innerText--
   
}

};

plusEl.addEventListener('click', plusFun)



const minusFun = () => {
    if(peopleInputEl.innerText > 1){
        peopleInputEl.innerText--
        addFun()
    }else if(inputBillEl.innerText < 1){
        inputBillEl.innerText = 1
    }
};

minusEl.addEventListener('click', minusFun)




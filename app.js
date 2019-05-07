const inputVal = document.querySelector('#weeklyInput');
const submitBtn = document.querySelector('#btn');
const weeklyPayOp = document.querySelector('#weeklyPayOp');
const federalTaxOp = document.querySelector('#federalTaxOp');
const ficaOp = document.querySelector('#ficaOp');
const netPayOp = document.querySelector('#netPayOp');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(Number.isInteger(Number(inputVal.value))) {
        calculateTaxes();
    } else {
        alert('Please enter a number...');
    }
});

calculateTaxes = () => {
    const weeklypay = Number(inputVal.value);
    const fedtax = weeklypay * 0.15;
    const fica = weeklypay * 0.075;
    const netpay = (weeklypay - fedtax) - fica;

    weeklyPayOp.textContent = `Weekly Pay $${weeklypay}`;
    federalTaxOp.textContent = `Federal Tax: $${fedtax}`;
    ficaOp.textContent = `FICA: $${fica}`;
    netPayOp.textContent = `Net Pay: $${netpay}`
    
}

const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit)

const inputvalue = document.getElementById('value-real');
const selectedcurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueconverted = 0;

function handlesubmit(e) {
    e.preventDefault();
   

    if(!inputvalue.value || inputvalue.value < 0){
        alert('Informe um valor correto');
        return;
    } else if(!selectedcurrency.value){
        alert('Escolha uma moeda')
        return;
    }

    converter();
};

function converter() {
    if(selectedcurrency.value === 'eur'){
        valueconverted = inputvalue.value / 5.47;
        result.innerHTML = valueformater('pt-BR', 'EUR')

        animateresult();
    } else if(selectedcurrency.value === 'dol'){
        valueconverted = inputvalue.value / 5.03;
        result.innerHTML = valueformater('pt-BR', 'USD')
  
        animateresult();
    }

    inputvalue.value = '';
    selectedcurrency.value = '';

};

function valueformater(locale, currency) {
    const value = valueconverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>👀👀</span> ${value} <span>👀👀</span>`;
};

function animateresult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 500});
};
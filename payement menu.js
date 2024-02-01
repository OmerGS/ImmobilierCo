var container = document.querySelector('.container');

function setPaymentMode(mode){
  if(mode === 'cash'){
    container.classList.add('cash-selected');
    container.classList.remove('card-selected');
  } else {
    container.classList.add('card-selected');
    container.classList.remove('cash-selected');
  }
}
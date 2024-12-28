let popupsBtn = document.querySelectorAll("[data-popup-ref]");

popupsBtn.forEach((btn) => {
  btn.addEventListener("click", activePopup);

  function activePopup() {
    let popupId = btn.getAttribute("data-popup-ref");
    let popup = document.querySelector(`[data-popup-id='${popupId}']`);

    if (popup !== undefined && popup !== null) {
      let popupContent = popup.querySelector(".popup-content");
      let closeBtns = popup.querySelectorAll("[data-dismiss-popup]");

      closeBtns.forEach((btn) => {
        btn.addEventListener("click", onPopupClose);
      });
      popup.addEventListener("click", onPopupClose);

      popupContent.addEventListener("click", (ev) => {
        ev.stopPropagation();
      });

      popup.classList.add("active");
      setTimeout(() => {
        popupContent.classList.add("active");
      }, 1);

      function onPopupClose() {
        setTimeout(() => {
          popup.classList.remove("active");
        }, 250);
        popupContent.classList.remove("active");
      }
    }
  }
});

//grab open button
const myBtn = document.querySelector('#myBtn');
//grab close button
const closeBtn = document.querySelector('.modal_close');
//grab modal
const modal = document.querySelector('.modal');

//toggle modal 
function toggleModal(){
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }    
}

//listner for buttons
myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);





//MODE SOMBRE 

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})


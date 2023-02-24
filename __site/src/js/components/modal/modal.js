
let html = document.querySelector('html');
function openModal(selector){


    let modal = document.querySelector(selector);

    // Quito el scroll de la página cuando el modal está abierto:
    
    

    if(modal.classList.contains('modal')){
        html.style.overflowY = 'hidden';

   }  



 
    let modalBox = modal.querySelector('.modal_box');
    let close = modal.querySelector('.close-action');
    modal.classList.add('modal-active');
    modalBox.classList.add('active', 'animate__animated');
    
    if(modal.classList.contains('modal-right')){
        modalBox.classList.add('animate__fadeInRight');
    }

    if(modal.classList.contains('modal-center')){
        
        modalBox.classList.add('animate__zoomIn');
        // modalBox.style.height = bodyHeight;
    }

    close.addEventListener("click", () => closeModal(modal, selector));
}



function closeModal(modal,selector){

    if(modal.classList.contains('modal')){
        html.style.overflowY = 'auto';
    }
     


    let modalBox = modal.querySelector('.modal_box');
    modal.classList.remove('modal-active');
    modalBox.classList.remove('active', 'animate__animated');
    if(modal.classList.contains('modal-right')){
       
        modalBox.classList.remove('animate__fadeInRight');
    }

    if(modal.classList.contains('modal-center')){
        modalBox.classList.remove('animate__zoomIn');
    }
  
  }
  
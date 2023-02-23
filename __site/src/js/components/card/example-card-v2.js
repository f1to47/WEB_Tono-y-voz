const revelarTono =  (tono, e) => {
    const card = e.closest('.card');



    
    Array.from(card.querySelectorAll('.tonoInformation')).map((tono) => {tono.classList.remove('active')})
    
    let tonoInformation = card.querySelectorAll('.tonoInformation-'+tono)[0];



    tonoInformation.classList.add('active');


    let tags = card.querySelectorAll('.tag');
    Array.from(tags).map((span) => { span.classList.remove('active')});
    e.classList.add('active');




    let spanTono = card.querySelectorAll('.tono');
    Array.from(spanTono).map((span) => { span.classList.remove('active')});
    let tonoRevelado = card.querySelectorAll('.tono-'+tono);

    Array.from(tonoRevelado).map((span) => span.classList.add('active') )
}
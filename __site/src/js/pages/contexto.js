

const titleContainer = document.getElementById('context-title');
const descriptionContainer = document.getElementById('context-description');
const tonosContainer = document.getElementById('context-tonos');
const ejemplosContainer = document.getElementById('ejemplos');

// =====

const promesaContextos = new Promise((resolve, reject) => {

const xhttp = new XMLHttpRequest ();

xhttp.open("GET", "./src/json/contextos.json", true);

xhttp.send();

xhttp.onload = () => {
    if(xhttp.status == 200){
       resolve(xhttp.response)
    }else{
        reject("Error de request")
    }
}


});


// const promesaTonos = new Promise((resolve, reject) => {

//     const xhttp = new XMLHttpRequest ();

// xhttp.open("GET", "./src/json/tonos.json", true);

// xhttp.send();

// xhttp.onload = () => {
//     if(xhttp.status == 200){
//        resolve(xhttp.response)
//     }else{
//         reject("Error de request")
//     }
// }


// });

promesaContextos
   .then(conReq => {
    return conReq;
   })
   .then(conData => {
   const contextInfo = JSON.parse(conData);
   const currentContext = contextInfo.contextos.filter(value => value.contexto === contextPage);
   const title =  currentContext[0].contextoTitle;
   const des =  currentContext[0].descripcion;
   const tonos =  currentContext[0].tonos;
   const ejemplos =  currentContext[0].ejemplos;
   const pillContainer = document.getElementById('pills');
   
   
//    console.log(title);
//    console.log(des);
//    console.log(tonos);
//    console.log(ejemplos[0].tonos);






// Titulo y bajada
   titleContainer.innerHTML = title;
   descriptionContainer.innerHTML = des;

// Titulo y bajada

let pills = '';

currentContext[0].pill.map(pill => {
pills = pills+`<h3>${pill.title}</h3><p>${pill.text}</p>`
});

pillContainer.innerHTML = pills



//Tonos 
   // var tonosList = ''
   // tonos.map(tono => {tonosList = tonosList + `<a class="tag">${tono}</a>`});
   // tonosContainer.innerHTML = tonosList;
//Tonos






//Ejemplos

let cardEjemplo = ``



ejemplos.map(ejemplo => {
   
let textosEjemplo = '';
   let tonosEjemplo = ``;
   let descripcionTono = ''
   let ejemploNombre = ''
    ejemplo.textoEjemplo.map(text => textosEjemplo = textosEjemplo+text);
    ejemplo.tonos.map((tono, index) => {
        

      ejemploNombre = ejemplo.nombre
         
      const currentTone = contextInfo.tonos.filter(value => value.tonoName === tono);

            const tonoTitle =  currentTone[0].tonoTitle;
            const tonoDes =  currentTone[0].tonoDes;
            
         
if(index === 0){
            tonosEjemplo = tonosEjemplo+`
            <a onclick="revelarTono('${tono}', event.target)"
             class="tag active">${tonoTitle}
            </a>
                `   
         
        descripcionTono = descripcionTono+`
        <div class="tonoInformation tonoInformation-${tono} active">
                    <p> 
                        ${tonoDes}
                    </p>
                </div>
        `   
      }else{
         tonosEjemplo = tonosEjemplo+`
            <a onclick="revelarTono('${tono}', event.target)"
             class="tag">${tonoTitle}
            </a>
                `   
         
        descripcionTono = descripcionTono+`
        <div class="tonoInformation tonoInformation-${tono}">
                    <p> 
                        ${tonoDes}
                    </p>
                </div>
        `   
      }

         });

         console.log(descripcionTono);



             cardEjemplo = cardEjemplo+
`
<div class="col-sm-12">
<div class="card">
    <div class="container">
        <div class="row content-zone">
          


     
            <div class="col-sm-7">
                <div class="example-box">


                    ${textosEjemplo}

                   
                    
                </div>
            </div>
      



            <div class="col-sm-5">
                <h4>
                    Nuestro tono es:            
                </h4>
                
                   
                    <div class="value">
                        <div class="tag-group">
                            
                            ${tonosEjemplo}

                        

                           
                        </div>
                    </div>
                
               
                ${descripcionTono}
                
            </div>


        </div>
    </div>
</div>
</div>
` 


})









//Ejemplos

   
// ====
//    for(i = 0; i < ejemplos.length; i++){

//     let textosEjemplo = '';

//     ejemplos[i].ejemplo.map(text => textosEjemplo = textosEjemplo+text);

//    console.log(textosEjemplo)

// let tonosEjemplo = `

// `
//     for(o = 0; o < ejemplos[i].tonos.length; o++){
//     tonosEjemplo = tonosEjemplo+`
//     <a onclick="revelarTono('${ejemplos[i].tonos[o]}', event.target)"
//     class="tag active">${ejemplos[i].tonos[o]}</a>
//         `
//     }

//     ejemplo = `
//     <div class="col-sm-12">
//     <div class="card">
//         <div class="container">
//             <div class="row content-zone">
              


         
//                 <div class="col-sm-7">
//                     <div class="example-box">


//                         ${textosEjemplo}

                       
                        
//                     </div>
//                 </div>
          



//                 <div class="col-sm-5">
//                     <h4>Paso final en flujo cambio de fondos</h4>
                    
                       
//                         <div class="value">
//                             <div class="tag-group">
                                
//                                 ${tonosEjemplo}

                            

                               
//                             </div>
//                         </div>
                    
                   
//                     <div class="tonoInformation tonoInformation-conversacional">
                       
//                         <p> 
//                             En lugar de hablar de forma general, nuestro mensaje se dirige a directamente a la persona usuaria, como en una conversación cara a cara, usando los pronombres "nosotros" y "tu".
                        
                            
//                         </p>
//                     </div>
//                     <div class="tonoInformation tonoInformation-energico active">
                       
//                         <p>
//                             Incluimos expresiones de ánimo, 
//                             frases positivas y exclamativas 
//                             que entreguen una sensación de 
//                             recompensa cuando sea necesario.
//                         </p>
//                     </div>

//                     <div class="tonoInformation tonoInformation-propositivo">
                       
//                         <p>
//                             Proponemos ideas o soluciones relacionados al mensaje entregado. 
//                             En este caso la acción de ir a transacciones donde se usa la clave de seguridad.
//                         </p>
//                     </div>
                    
//                 </div>


//             </div>
//         </div>
//     </div>
// </div>
//     ` 


//    }
//===


   ejemplosContainer.innerHTML= cardEjemplo;    



    
   })
   .catch(error => {
    console.log(error)
   })







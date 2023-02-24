const scrollNav = (id, e) => {
    const allItems = document.querySelectorAll('.nav-sub-item');

   Array.from(allItems).map(item => {item.classList.remove('active')})





   var element = document.getElementById(id);
    var headerOffset = 65;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });





  }



     // indicador de menu 

     const sections = document.querySelectorAll('.nav-anchor');
     const navItems = document.querySelectorAll('.nav-item');
  
     const functionObserver = entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              const itemActual = Array.from(navItems).find(item => item.dataset.url === entry.target.id);
              console.log(itemActual);


              for (const item of navItems){
                if(item != itemActual){
                    item.classList.remove('active')
                }
              }
               
            //   if(itemActual.classList.contains('nav-sub-item')){
            //     itemActual.classList.add('active');
            //     parent.classList.add('active');
            //   }else if(itemActual.classList.contains('nav-section-item')){
                let parent = itemActual.parentElement;
                console.log('...');
                console.log(itemActual);
                parent.classList.add('active');
                itemActual.classList.add('active');
            //   }

              
              
          }
      })
     }
  
  
     const observer = new IntersectionObserver(functionObserver, {
      root: null,
      rootMargin: '0px 0px -80% 0px ',
      threshold: 0.8
     })
  
  
     sections.forEach(section => observer.observe(section))
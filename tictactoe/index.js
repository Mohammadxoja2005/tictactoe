const elements = document.querySelectorAll('.elements');  
let counter = 1;  
let XORO = ''; 
let checker = [];  
// need to write checking function 
const  showingXO = (() => {

    for(let i = 0; i < elements.length; ++i) {
        elements[i].addEventListener('click', () => { 
        counter++; 
    
        if(counter % 2 == 0) {
            XORO = 'X'; 
        }else {
            XORO = "O"; 
        }    

        if(counter <= 10) {
            if(elements[i].innerHTML != '') {
                console.log("there is no space"); 
               
               }else {
                console.log('there was space, so we added')
                checker.push(XORO); 
                elements[i].innerHTML = XORO;  
               } 
          }else {
            console.log(checker); 
        }
        })
    }

})();  
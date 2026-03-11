
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("- laborator 3 -");

    // ex 1 extragerea listei in array
    
    const nodeListaEducatie = document.querySelectorAll('#education li');

    // transformam nodelist-ul intr-un array real folosind array.from() si map()
    const arrayEducatie = Array.from(nodeListaEducatie).map(li => {
        // extragem textul eliminam spatiile multiple si cele de la capete
        return li.textContent.replace(/\s+/g, ' ').trim();
    });


    console.log("ex 1 - array-ul de educatie:", arrayEducatie);
  
    // exercitiul 2: filtrarea array-ului (metoda filter)
   
    // f1  pastram doar elementele care contin anul 2024
    const educatie2024 = arrayEducatie.filter(item => item.includes("2024"));
    console.log("ex 2a - filtru '2024':", educatie2024);

    // f2  pastram doar ce contine cuvantul colegiul
    const educatieColegiu = arrayEducatie.filter(item => item.toLowerCase().includes("colegiul"));
    console.log("ex 2b - filtru 'colegiul':", educatieColegiu);

    // ex3 array doar cu primul cuvant cu map
    const primeleCuvinte = arrayEducatie.map(item => item.split(' ')[0]);
    console.log("ex 3 - primele cuvinte:", primeleCuvinte);
//ultimul cuvant
const ultimulCuv = arrayEducatie.map(item => {
        const words = item.split(' ');
        return words[words.length - 1]; // am corectat words si length
    });
    console.log("ex 3b - ultimele cuvinte:", ultimulCuv);

    //ex4 ani de studiu
 
    const totalAni = arrayEducatie.reduce((total, item) => {
        
        const extrageAnii = item.match(/\d{4}/g);
       
        if (extrageAnii) {
            const anInceput = parseInt(extrageAnii[0]);
            let anSfarsit;
            
            if (extrageAnii.length > 1) {
                anSfarsit = parseInt(extrageAnii[1]);
            } 
            
            else if (item.toLowerCase().includes('prezent')) {
                anSfarsit = new Date().getFullYear(); 
            } 
            
            else {
                anSfarsit = anInceput; 
            }
            
           
            const durata = anSfarsit - anInceput;
            return total + durata;
        }
        
        
        return total;
        
    }, 0); 
    

    console.log(`ex 4 - total ani de studiu: ${totalAni}`);
});
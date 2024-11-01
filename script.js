// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


function changeTitle(){
   let title = document.querySelector("h1")
   let button = document.getElementById("title")
   let originalTitle = title.innerText
   button.addEventListener("click", () =>{
        
        //title.innerText = "Hello this is Digital Hub "

        if(title.innerText === originalTitle){
            title.innerText = "Hello this is Digital Hub"
        }else{
            title.innerText = originalTitle
        }
            
        
    })

}changeTitle()

//////////////////////////////////////////////////////////////////////////////////

function changeBkColor(){
    let body = document.querySelector("body")
    let button = document.getElementById("BkColor")
    button.addEventListener("click", ()=>{
        
       // body.style.backgroundColor = "red"

       if (body.style.backgroundColor === "navajowhite"){
            body.style.backgroundColor = ""
       }else{
        body.style.backgroundColor = "navajowhite"
       }
    })
}
changeBkColor()

//////////////////////////////////////////////////////////////////////////////////

function ChangeAdress(){
    let address = document.querySelector(".address")
    let originalAddress = address.innerText  
    let button = document.getElementById("address")
        button.addEventListener("click", ()=>{

            if(address.innerText === originalAddress){
                address.innerText = "Hello Word my new adress is more undefine"
            }else{
                address.innerText = originalAddress
            }
        })
}
ChangeAdress()

//////////////////////////////////////////////////////////////////////////////////

function link(){
    let icon = document.querySelectorAll(".fa-solid")
    let button = document.getElementById("link")
        button.addEventListener("click", ()=>{

         icon.forEach(icon => {
            if (!icon.classList.contains("fa-solidPlus")) { 
                icon.classList.add("fa-solidPlus");
              }else{
                icon.classList.remove("fa-solidPlus");
              }
         })
        })
}
link()

//////////////////////////////////////////////////////////////////////////////////

function hidden(){
    let img = document.querySelectorAll("img.samsung, img.asus, img.not, img.red, img.HU")
    let button = document.getElementById("hidden")
    button.addEventListener("click", ()=>{
        img.forEach(img =>{
            img.classList.toggle("hidden")
        })
    })
}
hidden()

//////////////////////////////////////////////////////////////////////////////////

function priceColor(){
    let price = document.querySelectorAll("h4")
    let button = document.getElementById("color")
    button.addEventListener("click", () =>{
        price.forEach(price => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            price.style.color = `rgb(${r}, ${g}, ${b})`;
          });

    })

}
priceColor()

// Nizovi u kojima su potrebne infrmacije
var kategorija=new Array("Izaberi Kategoriju","Dužina","Masa","Površina");
var mjerjed=new Array(["Mjerna jedinica"],["metar (m)","kilometar (km)","centimetar (cm)","milimertar (mm)"],["kilogram (kg)","tona (t)","dekagram (dag)","gram (g)"],["m2","km2","dm2","cm2"]);
var vrijednost=new Array([0],[1,1000,0.01,0.001],[1,1000,0.01,0.001],[1,1000000,0.01,0.0001]);


// elementi potrebni iz html
var kF=document.getElementById("KategorijaForm");
var kS=document.getElementById("kategorijaSelect");

var prvaM=document.getElementById("prvaM");
var drugaM=document.getElementById("drugaM");

var prvaV=document.getElementById("prvaV");
var drugaV=document.getElementById("drugaV");    

var poruka=document.getElementById("poruka");
// Unos text u select polje, odnosno option

function Fill(puni,jedinica){
        let option=new Array();
        
        
    for(var i=0; i< jedinica.length; i++) {
         option[i]=document.createElement('option');
        option[i].text=jedinica[i];
        puni.add(option[i]);
    }
}

// Brisanje iz selekta

function Obrisi(selekt) {
    
   let  l=selekt.length;
    for(var i=0; i<l; i++) {
   selekt.remove(selekt);
    }

}

// funkacija koja radi na onchange 
// kada se promjeni izbor kategorije 
function Napravi(){

   for(var i=0; i <kategorija.length; i++){
    if(kS.value==kategorija[i]){
        Obrisi(prvaM);
        Obrisi(drugaM);
        Fill(prvaM,mjerjed[i]);
        Fill(drugaM,mjerjed[i]); 
    }

   }

}

//Funkicija koja racuna unos u prvo input polje

function racunaj(){
    let prvi;
    let drugi;

    for(var i=0; i< mjerjed.length; i++){

        for(var j=0; j<mjerjed[i].length; j++){

            if(prvaM.value==mjerjed[i][j]){
                prvi=prvaV.value*vrijednost[i][j];
            }

            if(drugaM.value==mjerjed[i][j]){
                drugi=vrijednost[i][j];
            }
        }

    }
    
    drugaV.value=prvi/drugi;
    
    
}

//Funkicija koja racuna unos u drugo input polje
function racunaj2(){
    let prvi;
    let drugi;

    
    for(var i=0; i< mjerjed.length; i++){

        for(var j=0; j<mjerjed[i].length; j++){

            if(prvaM.value==mjerjed[i][j]){
                prvi=vrijednost[i][j];
            }

            if(drugaM.value==mjerjed[i][j]){
                drugi=drugaV.value*vrijednost[i][j];
            }
        }

    }
    
    prvaV.value=drugi/prvi;
    
    
}

//postavljanje funkcije racunaj i racunaj2 prilikom kucanja teksta

prvaV.addEventListener("keyup",racunaj);
drugaV.addEventListener("keyup",racunaj2);

//postaavljanje ispisa poruke

prvaV.addEventListener("click",()=>{
    if(kS.value==kategorija[0]){
        poruka.innerHTML="Izaberi kategoriju!!!";
    }else{
        poruka.innerHTML="";
    }
});

drugaV.addEventListener("click",()=>{
    if(kS.value==kategorija[0]){
        poruka.innerHTML="Izaberi kategoriju!!!";
    }else{
        poruka.innerHTML="";
    }
});



window.onload=function(){
    Fill(kS,kategorija);
    Fill(prvaM,mjerjed[0]);
    Fill(drugaM,mjerjed[0]);
    
   
}
let base=0;
const piu=document.getElementById("piu");
const meno=document.getElementById("meno");
const obiettivo=document.getElementById("obiettivo");
const input=document.getElementById("input");
const submit=document.getElementById("submit");
const mancanti=document.getElementById("mancanti");
const counter=document.getElementsByClassName("counter")[0];

function cambia(num) {
    base+=num;
    document.getElementById("count").innerHTML=base;

}

function insertInput() {
    const ob=input.value;
    if (ob!=null & ob!="") {
        var text="Obiettivo:  "+ob; 
    } else {
        var text="Inserisci un obiettivo";
    }
    obiettivo.innerHTML=text;
}

function calcolaMancanti() {
    const ob=input.value;
    var res=ob-base;
    mancanti.innerText="Ne rimangono:  "+res;
    mancanti.style.fontSize="12px";
}
function check() {
    const ob=input.value;
    if (base>=ob && ob!=null && ob!="") {
        count.innerText="Obiettivo raggiunto!";
        count.style.fontSize="30px";
        count.style.textTransform= "uppercase";
        count.style.textDecoration= "underline";
        count.style.color= "rgb(18, 255, 18)";
        counter.style.borderColor= "rgb(18, 255, 18)";
        mancanti.innerText="Aggiorna la pagina per iniziare di nuovo";
    }
}
function controlloInput() {
    if (input.value<=0){
        alert("Inserire un numero maggiore di 0");
    }
}

piu.addEventListener("click", function() {cambia(1)});
meno.addEventListener("click", function() {cambia(-1)});

submit.addEventListener("click", insertInput);
piu.addEventListener("click", insertInput);
meno.addEventListener("click", insertInput);
submit.addEventListener("click", calcolaMancanti);
submit.addEventListener("click", controlloInput);
piu.addEventListener("click", calcolaMancanti);
meno.addEventListener("click", calcolaMancanti);

piu.addEventListener("click", check);
meno.addEventListener("click", check);



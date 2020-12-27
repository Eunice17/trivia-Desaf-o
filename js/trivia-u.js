
const preguntas=[
    "¿En qué fecha se descubrió América?",
    "¿En qué fecha terminó la Primera Guerra Mundial?",
    "¿En dónde se originaron los Juegos Olimpicos?",
    "¿En qué país nació Adolf Hitler?",
    "¿En qué lugar murió Napoleón?",
    "¿Quiénes lucharon en la denominada Batalla de Maratón?",
    "¿En qué fecha empezó la Segunda Guerra Mundial?",
    "¿En qué guerra participó Juana de Arco?",
    "¿Qué esposas de Enrique VIII fueron decapitadas?",
    "¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?"
];
const alternativas=[
    ["12 de octubre de 1493","12 de octubre de 1492","6 de octubre de 1943","12 de febrero de 1942"],
    ["11 de noviembre de 1918","11 de diciembre de 1918","11 de noviembre de 1919","12 de noviembre de 1918"],
    ["En Polonia","En Rusia","En Grecia","En Perú"],
    ["Alemania","Israel","Rusia","Austria"],
    ["En la isla de Ibiza ","En la Isla de Santa Elena","En las islas Galápagos","En su casa"],
    ["Griegos y Persas","Alemanes y Griegos","Turcos y Persas","Griegos y Turcos"],
    ["1 de noviembre de 1939","2 de septiembre de 1939","1 septiembre de 1939","12 de febrero de 1997"],
    ["En la guerra de los 100 años","En la batalla de Maratón","En la guerra de los 90 años","En la guerra de los 101 años"],
    ["Ana Bolena y Catalina de Aragón","Ana de Cléveris y Ana Bolena","Catalina Howard y Catalina Parr","Ana Bolena y Catherine Howard"],
    ["Emperador Nerón","Emperador Adriano","Emperador Trajano","Emperador Constantino"]
];
const respuestas=[
    1,0,2,3,1,0,2,0,2,3
];

const pgs=document.querySelector("#pgs");       //Elemento donde se mostrará la pregunta

let persona=JSON.parse(localStorage.getItem("value"));   //Para obtener nombre de persona
const titulo=document.querySelector('#title');    //Elemento donde mostrará el nombre de usuario

let rspGuia=document.querySelector('#rsp-guia');    //Elemento guia de preguntas respondidas
let total=document.querySelector('#total'); //Elemento guia de preguntas faltantes

let form=document.querySelector('#form');   //Elemento donde se mostrará las preguntas

const enviarBoton=document.getElementById('enviar');  //Botón para mostrar resultados al finalizar la trivia  
const rst=document.getElementById('rst');   //elemento que mostrará los resultados de la trivia en la card

// nombre de la persona
titulo.innerHTML = "Hola " + persona.nombre;    //Agrega el nombre de usuario como título

let cont=0;
let arrayResp=new Array();  //Necesito un array para almacenar las respuestas de usuario

const printFirst=(indice)=>{
    rspGuia.innerHTML=String(indice+1);     //Guia de pregunta
    total.innerHTML=preguntas.length;
    pgs.innerHTML=preguntas[indice];      //Agregando la pregunta al card
    
    let cad="";
    for(let i=0;i<alternativas[indice].length;i++){
    cad+=`<option class="op" value=${i}>${alternativas[indice][i]}</option><br/>`;
}
    form.innerHTML=cad;
    cont++;
 };
 function trivia(){
    if(cont<preguntas.length){
        printFirst(cont);
     }else{
         enviar();
     } 
 };
 //LLama a trivia la primera pregunta
 trivia();


 function activar(){
     arrayResp.push(form.value);
    trivia();
 };

 function enviar(){
     enviarBoton.innerHTML=`<button onclick="mostrarR()"
      class="iniciar boton-u">Mostrar resultados</button>`;
 };
  
 function resultados(){
     let aciertos=0;
     for(let i=0;i<respuestas.length;i++){
        if(respuestas[i]==arrayResp[i]){
            aciertos++;
        }
     }
     return aciertos;
 }
 
 function mostrarR(){
     let totalA=resultados();
     let valorR={
         "resultado":totalA,
         "preguntas":preguntas,
         "alternativas":alternativas,
         "respuestas":respuestas,
         "respuestaUser":arrayResp
     };
     localStorage.setItem("valorR",JSON.stringify(valorR));
     window.location.href="resultados.html";
    
 }

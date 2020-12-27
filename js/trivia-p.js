
const preguntas=[
    "¿En qué fecha se proclamó la independencia del Perú?",
    "¿Cuál es la primera universidad del Perú?",
    "¿Cuál fue el mayor imperio precolombino situado en partes de Perú?",
    "¿Qué español lideró la expedición que iniciaría la conquista del Perú?",
    "¿Quién fue el último soberano inca?",
    "¿Qué virrey del Perú era conocido como El Solón Virreinal?",
    "¿Quién encabezó la Expedición Libertadora del Perú en el siglo XIX?",
    "¿En dónde proclamó José de San Martín la independencia de Perú?",
    "¿Quién fue el primer presidente de la República del Perú?",
    "¿En qué batalla murió el presidente peruano Agustín Gamarra en 1841?"
];
const alternativas=[
    ["12 de julio de 1820","28 de julio de 1821","28 de junio de 1821","20 de julio de 1821"],
    ["Universidad César Vallejo","Universidad Nacional Agraria La Molina","Universidad de Lima","Universidad Nacional Mayor de San Marcos"],
    ["Imperio Chimú","Imperio Inca","Imperio Vicús","Imperio Otomano"],
    ["Francisco Pizarro","Francisco Pérez","Francisco García","Francisco Sánchez"],
    ["Tupac Amaru II","Sinchi Roca","Atahualpa","Mama Occllo"],
    ["Francisco de Toledo","Francisco Pizarro","Eduardo de Toledo","Emiliano de Toledo"],
    ["José de Pizarro","Francisco Pizarro","Alejandro Toledo","José de San Martín"],
    ["Plaza de Armas de Piura","Plaza Bolívar","Plaza Mayor de Lima","Plaza Fuerte"],
    ["José de la Riva Agüero","José Balta","Alberto Fujimori","Fernando Belaúnde Terry"],
    ["En la batalla de Angamos","En la batalla de Pachachaca","En la batalla de Tarapacá","En la batalla de Ingavi"]
];
const respuestas=[
    1,3,1,0,2,0,3,2,0,3
];

const pgs=document.querySelector("#pgs");       //Elemento donde se mostrará la pregunta

let persona=JSON.parse(localStorage.getItem("value")); //Para obtener nombre de persona
const titulo=document.querySelector('#title'); //Elemento donde mostrará el nombre de usuario

let rspGuia=document.querySelector('#rsp-guia'); //Elemento guia de preguntas respondidas
let total=document.querySelector('#total'); //Elemento guia de preguntas faltantes

let form=document.querySelector('#form'); //Elemento donde se mostrará las preguntas

const enviarBoton=document.getElementById('enviar'); //Botón para mostrar resultados al finalizar la trivia
const rst=document.getElementById('rst'); //elemento que mostrará los resultados de la trivia en la card

// nombre de la persona
titulo.innerHTML = "Hola " + persona.nombre; //Agrega el nombre de usuario como título

let cont=0;
let arrayResp=new Array(); //Necesito un array para almacenar las respuestas de usuario

const printFirst=(indice)=>{
    rspGuia.innerHTML=String(indice+1);   //Guia de pregunta
    total.innerHTML=preguntas.length;      
    pgs.innerHTML=preguntas[indice];    //Agregando la pregunta al card

    let cad="";
    for(let i=0;i<alternativas[indice].length;i++){
    cad+=`<option class="op" value=${i}>${alternativas[indice][i]}</option><br/>`;      //Agregando las alternativas
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
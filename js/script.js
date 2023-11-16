const visor=document.getElementById("visor");
const footer=document.getElementById("footer");
const inicio=document.getElementById("inicio");
const altar=document.getElementById("altar");
const greco=document.getElementById("greco");
const alcazar=document.getElementById("alcazar");
const cambron=document.getElementById("cambron");
const catedral=document.getElementById("catedral");
const images=footer.querySelectorAll("IMG");

const cambiarImgfooter=(event)=>{
    let element=event.target;
    if(element.tagName=="IMG"){
        visor.src=element.src;
    }
}

footer.addEventListener("mouseover",cambiarImgfooter);
inicio.addEventListener("mousedown",()=>{
    visor.src=images[0].src;
});
altar.addEventListener("mousedown",()=>{
    visor.src=images[1].src;
});
greco.addEventListener("mousedown",()=>{
    visor.src=images[2].src;
});
alcazar.addEventListener("mousedown",()=>{
    visor.src=images[3].src;
});
cambron.addEventListener("mousedown",()=>{
    visor.src=images[4].src;
});
catedral.addEventListener("mousedown",()=>{
    visor.src=images[5].src;
});

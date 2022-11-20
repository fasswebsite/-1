for(i of document.querySelectorAll('[search]')){
    try{
        busca(i,document.querySelector("#"+i.getAttribute('search')))
    }catch(e){}
}

function busca(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            r  = new RegExp(this.value,"g")
            if(di.getAttribute("nome").toLowerCase().match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}

const zoom = document.getElementById("zoom");
const img = document.querySelector("img");

    zoom.addEventListener("mousemove", (e) => {

        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        console.log(x, y);

        img.style.transformOrigin = '${x}px ${y}px';
        img.style.transforme = scale(10);

   
});
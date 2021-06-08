button.onclick=function (){
fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`).then (response => response.json()).
then(result => {for(let i=0;i<10;i++){
    authors.insertAdjacentHTML("beforeend", `<div class="author">
    <h3>
    ${result[i].firstName},${result[i].lastName}
    </h3>
    <h4>
        ${result[i].idBook}
    </h4>
    <button  id="button${i}" >Delete</button>
</div>`);   

document.getElementsByClassName("author")[i].style.border="red solid 3px";
document.getElementById(`button${i}`).onclick=function(){document.getElementById(`button${i}`).parentNode.remove()}
}});
document.getElementById("button").setAttribute("hidden",true);
}

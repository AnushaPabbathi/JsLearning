let favHeros = [];

let addList = () => {
let adding = document.getElementById("add").value;
if(favHeros.indexOf(adding) === -1){
    favHeros.push(adding);
document.getElementById('showResult').innerText = favHeros;
document.getElementById("add").value='';
}
else{
    document.getElementById("showError").innerText = 'name already exists'
}
}

let removeList = () => {
let removing = document.getElementById("remove").value;
if(favHeros.indexOf(removing) !== -1){
    favHeros.splice(favHeros.indexOf(removing), 1);
    document.getElementById('showResult').innerText = favHeros;
    document.getElementById("remove").value='';
}
else{
    document.getElementById("showError").innerText = 'oops name does not exist in the list'
}
}

let showList = () => {
    document.getElementById('showlist').innerText = favHeros;
}



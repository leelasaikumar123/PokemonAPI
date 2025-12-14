async function  run() {
    let respone=await fetch("https://pokeapi.co/api/v2/pokemon/"+nameOfPokemon);
    let data=await respone.json();
    console.log(data);
    let imagepath=data.sprites.front_default;
    document.querySelector("img").setAttribute("src",imagepath);
}


let nameOfPokemon;
document.querySelector("button").addEventListener("click",()=>{
    nameOfPokemon=document.querySelector("input").value;
    run();
})
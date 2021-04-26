// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){cats.push(name);}

function destructivelyPrependCat(name){cats.unshift(name)}

function destructivelyRemoveLastCat(){cats.pop();}

function destructivelyRemoveFirstCat(){cats.shift();}


function appendCat(name){
    var copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats
}

function prependCat(name){
    var copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats
}

function removeLastCat(){
    var copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats
}

function removeFirstCat(){
    var copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats
}
// Write your solution here!

var cats = ['Milo','Otis','Garfield'];

function numberCats(){
    return numberCats (cats);
}

beforeEach(function(){
    cats.length = 0;
    cats.push('Milo','Otis','Garfield');
});

function destructivelyAppendCat(name){
    cats.push(name);
}


function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}


function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return cats.concat(name);
}

function prependCat(name){
    return [name].concat(cats);
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}



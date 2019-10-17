
//FASE 1


var nombre = ['R','O','D','R','I','G','O'];

for(i = 0; i<nombre.length; i++) {
    console.log(nombre[i]); 
}

//or

let nombre = ['R','O','D','R','I','G','O'];

for (let i of nombre) {
    console.log(i); 
}


//FASE 2

let nombre = ['R','O','D','R','I', 4,'O'];

for (let i of nombre) {
    if(typeof i == 'number'){
        console.log( "los nombres de las personas no contienen el numero: " + i); 
    }else if(i.match(/[AEIOU]/gi)){
        console.log( "He encontrado una vocal: " + i); 
    }else{
        console.log( "He encontrado una consonante: " + i); 
    }
    
}


//FASE 3





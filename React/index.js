//Using let keyword does not capture tyhe name variable to the window so the name can be changed works same as var keyword but it's advantage is that the variable name is not looged in the window
//let name="ryan";
//name="Moraa";
//alert(name);

//Using template strings to conactenate strings in modern js


//let fname="Shah";
//let lname="Atieno"
//let age=prompt(`Guess ${fname} ${lname}'s age`);

//let answer=`Correct ${fname}'s age is ${age} years old`;
//alert(answer);

//Creating default parameters

//function Greeting(user='Mystery person', greeting='Goodday'){
  //  alert(`Hello ${user} ${greeting}`);
//}

//Greeting();

//Arrow functions

let greeting=(message) =>{
    alert(`Hello ${message}`);
}
greeting("Heyy");
const person = {
    //Property
    Name: 'Siddhant',       
    Age:  18,

    //Function
    greet ( )  {
     console.log("HI MY NAME IS "+ this.Name);   
    }
};
person.greet();
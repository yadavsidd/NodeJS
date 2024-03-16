//  USING ARROW INSTEAD OF FUNCTIONS

const add = (a ,b ) =>{
    return a + b ;
}
console.log( add (1,5))


//if you have ony one statement i.e the return statement then use

const Add = (a ,b ) => a + b;
console.log(Add(3 , 4))


// increment eg:

const inx = (a  ) => a + 1;
console.log(inx(7))


// Arrow functions without any arguments

const random = () => 3*3 ;
console.log(random())


const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class field {
    constructor(fieldValues) {
        this.field = fieldValues;
    
      }

    print(){
        for(let i=0; i< this.field.length; i++){
            console.log(this.field[i].join(''))
        }
       
    }
    
}


let newfield = new field([
    ['*', '░', 'O'],
    ['░', '░', '░'],
    ['^', '░', 'O'],
])

console.log(newfield.print())

let StopGate = false

while(StopGate != true) {

const NextStep = prompt('What is your next step? Type r for right, l for left, and d for down')

if(NextStep != ('r') && NextStep != ('l') && NextStep != ('d')){

    console.log('That is not a valid input - try again')

}else{

    console.log('You selected '+ NextStep)
    StopGate = true
}

}


// let newfield = new field([
//     ['*', '░', 'O'],
//     ['░', '░', '░'],
//     ['*', '░', 'O'],
// ])

// console.log(newfield.print())
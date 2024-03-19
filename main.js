const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class field {
    constructor(fieldValues) {
        this.field = fieldValues;
        this.currentRow = 0;
        this.currentValue = fieldValues[0].indexOf('*');
        this.width = this.field[0].length;
        this.height = this.field.length;
        
      }

    print(){
        for(let i=0; i< this.field.length; i++){
            console.log(this.field[i].join(''))
        }
       
    }

    move(e){
        if(e === 'r'){
            if(this.currentValue < this.width - 1){
                this.currentValue += 1
                this.AddStar();
                
            } else {
                console.log('Out of Bounds - Try Again')
                this.print()
            }
           
            

        } else if (e === 'd'){

            if(this.currentRow <= (this.height - 1)){

                this.currentRow += 1
                this.AddStar();
            } else {
                console.log('Out of Bounds - Try Again')
                this.print()
            }
            
            


        } else if (e === 'l'){

            if(this.currentValue > 0){
                this.currentValue -= 1
                this.AddStar();
            } else {
                console.log('Out of Bounds - Try Again')
                this.print()
            }

            
        }

        StopGate = false
    }

    AddStar(){
        if(this.field[this.currentRow][this.currentValue] === 'O' ){

            console.log('You Fell Down a Hole! You Lose!')
            GameOverStatus = true
        }else if (this.field[this.currentRow][this.currentValue] === '^'){

            console.log('You Found the Hat. You Win!')
            GameOverStatus = true

        }else {
            this.field[this.currentRow][this.currentValue] = '*'
            this.print()
        }
        
    }

    static generateField(height, width, percentage){
        let result = [];
        let highestArray = height*width;
        let total_holes = (height * width) * percentage

        for(let i=0; i < height; i++){
            let arrayToPush = []
            for(let j=0; j < width; j++){
                arrayToPush.push('░')

            }
            result.push(arrayToPush)
        }

        // Add Player

        result[0][0] = '*'

        // Calculate Position of Hat

        let HatWidth = Math.floor(Math.random() * width)
        let HatHeight = Math.floor(Math.random() * height)

        console.log(HatWidth)
        console.log(HatHeight)

        result[HatHeight][HatWidth] = '^';

        // Calculate Postion of Holes



        for(let i= 0; i < total_holes; i++){
            let HoleWidth = Math.floor(Math.random() * width)
            let HoleHeight = Math.floor(Math.random() * height)

            if(result[HoleHeight][HoleWidth] === '^' || result[HoleHeight][HoleWidth] === 'O' ){
                i--
                continue;
            } else if(HoleWidth ===  0 && HoleHeight === 0){
                i--
                continue;
            }else {
                result[HoleHeight][HoleWidth] = 'O'
            }


        }
    
            return result


    }
    
}


let newfield = new field(field.generateField(10, 5, 0.2))

console.log(newfield.print())

let StopGate = false
let GameOverStatus = false 

while(StopGate != true && GameOverStatus === false) {

const NextStep = prompt('What is your next step? Type r for right, l for left, and d for down')

if(NextStep != ('r') && NextStep != ('l') && NextStep != ('d')){


    console.log('That is not a valid input - try again')

}else{

    console.log('You selected '+ NextStep)
    StopGate = true
    newfield.move(NextStep);
    
}

}


// let newfield = new field([
//     ['*', '░', 'O'],
//     ['░', '░', '░'],
//     ['*', '░', 'O'],
// ])

// console.log(newfield.print())
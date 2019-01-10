let syllable = require('syllable');

class Haiku {    
    constructor(lines) {
        this.lines  = lines;
        this.fives  = [];
        this.sevens = [];
        this.poem   = [];
        this.sort();
        this.create();
    };
    
    sort() {
        for( let i = 0; i < this.lines.length; i++ ) {
            let syl = syllable(this.lines[i]);
            switch(syl) {
                case 5:
                    this.fives.push(this.lines[i]);
                    break;
                case 7:
                    this.sevens.push(this.lines[i]);
                    break;
                default:
                    break;
            }
        }
    }
    
    create() {
        this.poem.push(this.fives[Math.floor(Math.random()*this.fives.length)]);
        this.poem.push(this.sevens[Math.floor(Math.random()*this.sevens.length)]);
        this.poem.push(this.fives[Math.floor(Math.random()*this.fives.length)]);
    }
    
    output() {
        let str = '';
        for( let i = 0; i < this.poem.length; i++ ){
            str = str.concat(this.poem[i] + '\n');
            console.log(i);
        }
        return str;
    }
    
}
module.exports = Haiku;
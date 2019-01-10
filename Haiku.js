let syllable = require('syllable');

class Haiku {    
    constructor(lines) {
        this.lines  = lines;
        this.fives  = [];
        this.sevens = [];
        this.poem   = [];
        this.sort();
    };
    
    sort() {
        for( let i = 0; i < lines.length; i++ ) {
            let syl = syllable(lines[i]);
            switch(syl) {
                case 5:
                    this.fives.push(lines[i]);
                    break;
                case 7:
                    this.sevens.push(lines[i]);
                    break;
                default:
                    break;
            }
        }
    }
    
    create() {
        poem.push(fives[Math.floor(Math.random()*fives.length)]);
        poem.push(sevens[Math.floor(Math.random()*sevens.length)]);
        poem.push(fives[Math.floor(Math.random()*fives.length)]);
    }
    
    output() {
        let str = '';
        for( let i = 0; i < poem.length; i++ ){
            str = str.concat(poem[i] + '\n');
        }
        return str;
    }
    
}
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split(" ");
    let result = arr.map((str)=>getMorseStr(str)).join("**********");
    
    return result;
}

var getMorseStr = (str)=>{
    let normalizeStr = str.toLowerCase();
    let decodeStr = "";
    let arrMorseFromStr = normalizeStr.split('').map((s)=>getMorseBySymb(s));

    arrMorseFromStr.forEach((c)=>{
        let numbers = c.split('').map((s)=>s=='.'?10:11);
        let decodeSymb;

            if(numbers.length!=10){
                let resArr = new Array(10-numbers.length*2);
                resArr.fill(0);
                decodeSymb = resArr.concat(numbers).join('');
            }
            else{
                decodeSymb = numbers.concat(numbers).join('');
            }
            decodeStr = decodeStr.concat(decodeSymb);

    })

    return decodeStr;``
   
}

var getMorseBySymb = (chr) =>{

    return Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === chr);
}

module.exports = {
    decode
}

console.log(decode("hello"))


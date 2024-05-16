const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let fieldOne = document.getElementById("pass-result-1")
let fieldTwo = document.getElementById("pass-result-2")
let passLen = document.getElementById("pass-lenght")

function getRandomPass(len) {
    let pass = ""
    for (let i = 0; i < len; i++){
        pass += characters[Math.floor(Math.random() * characters.length)]
    }
    return pass
}

function getRandom(){
    let Len = passLen.value
    fieldOne.textContent = getRandomPass(Len)
    fieldTwo.textContent = getRandomPass(Len)
}

/* function copyPass(){
    let copyText = document.getElementById("pass-result-1")
    
    copyText.select
    
    navigator.clipboard.writeText(copyText.value)
    
    alert("Copied the text: " + copyText.value)
} */
function copyPass(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}
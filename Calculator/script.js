
var textbox = document.getElementById('textbox');

const dis =  (val) => {
textbox.value = textbox.value + val;

}

const solve = () => {
    try {
        textbox.value = eval(textbox.value);
      } catch (error) {
        textbox.value = "Error";
      }
}

const clear = () => {
    textbox.value="";
    console.log(textbox.value)
}

window.addEventListener('keydown' , (e) => {
    if(e.keyCode === 13){
        solve();
    }
})






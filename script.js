document.title = "calculator"
const button = document.getElementById("#btn")
const userinput = document.getElementById("userinput")


let expression = "";

    function press(add){
        expression += add
        console.log(expression);
        userinput.value = expression
        
    }
    
    function equal() {
        userinput.value = eval(expression)
        expression =" "
       
    }
    function erase(params) {
        expression = " "
        userinput.value = expression
    }
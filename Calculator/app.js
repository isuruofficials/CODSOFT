let string = "";

const buttons = document.querySelectorAll("button");
const input =  document.querySelector("input");


Array.from(buttons).forEach((button)=> {
    button.addEventListener("click", (e)=> {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string ;
        }else if (e.target.innerHTML == "DEL"){
            string = "";
            input.value = string ;
        }else if (e.target.innerHTML == "AC"){
            string = string.slice(0, -1);
            input.value = string ;
        }
        else{
            console.log(e.target);
        string = string + e.target.innerHTML;
        input.value = string ;
        }
       
    });
});

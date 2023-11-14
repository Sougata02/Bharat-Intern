let val = document.getElementById('val');
let getAns = document.getElementById('getAns');
let setAns = document.getElementById('setAns');
let ans = document.getElementById('ans');
let convert = document.getElementById('convert');


convert.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(setAns.value==="Select Type"){
        alert("Please choose type first!!");
    }
    if(setAns.value==='Celsius'){
        if(getAns.value==='Celsius' || getAns.value=="Select Type"){
            alert("Please choose different type!!");
        }else{
            if(getAns.value==='Fahrenheit'){
                let f = (parseFloat(val.value) * 9) / 5 + 32; 
                ans.innerText = "Result is: "+parseFloat(f.toFixed(2))+" F"; 
            }
            else{
                let k = (parseFloat(val.value) + 273.15); 
                ans.innerText = "Result is: "+parseFloat(k.toFixed(2))+" K"; 
            }
        }
    }
    if(setAns.value==='Fahrenheit'){
        if(getAns.value==='Fahrenheit' || getAns.value=="Select Type"){
            alert("Please choose different type!!");
        }else{
            if(getAns.value==='Celsius'){
                let c = ((parseFloat(val.value) - 32) * 5) / 9; 
                ans.innerText = "Result is: "+parseFloat(c.toFixed(2))+" C"; 
            }
            else{
                let k = (parseFloat(val.value) - 32) * 5 / 9 + 273.15; 
                ans.innerText = "Result is: "+parseFloat(k.toFixed(2))+" K";
            }
        }
    }
    if(setAns.value==='Kelvin'){
        if(getAns.value==='Kelvin' || getAns.value=="Select Type"){
            alert("Please choose different type!!");
        }else{
            if(getAns.value==='Celsius'){
                let c = (parseFloat(val.value) - 273.15); 
                ans.innerText = "Result is: "+parseFloat(c.toFixed(2))+" C";
            }
            else{
                let f = (parseFloat(val.value) - 273.15) * 9 / 5 + 32; 
                ans.innerText = "Result is: "+parseFloat(f.toFixed(2))+" F"; 
            }
        }
    }
})
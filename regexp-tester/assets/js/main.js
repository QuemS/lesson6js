    
    document.addEventListener('DOMContentLoaded', function(){
         
        regexp.oninput = data.oninput = function(){
            var re = new RegExp(regexp.value);
            var text = data.value;
            
            var answer = re.test(text);
            
            result.innerHTML = String(answer).toUpperCase();
                   
            if(answer){
                data.style.background = "#aaffaa";
            }else{
                data.style.background = "#ffaaaa";
            }    
        }

    });
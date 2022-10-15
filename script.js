let string = ""
let buttons = document.querySelectorAll('.input')
Array.from(buttons).forEach((input)=>{
    input.addEventListener('click', (e)=>{
        if(e.target.innerHTML== '='){
            string= eval(string)
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == 'c'){
            string = ""
            document.querySelector('input').value = string

        }
       else{
        string= string + e.target.innerHTML
        document.querySelector('input').value = string
    }
    })
})
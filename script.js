let string = " ";
let buttons = document.querySelectorAll('.num')
Array.from(buttons).forEach((num) => {
    num.addEventListener('click', function (e) {
        if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector('.out').innerText = string;
            console.log(string);
        }
        else if (e.target.innerText == 'C') {
            string = "0";
            document.querySelector('.out').innerText = string;
            console.log(string);
        }
        else if (e.target.innerText == '=>') {
            string=string.substring(0,string.length-1)
            if(string===" " || string===""){
                string="0";
            }
            document.querySelector('.out').innerText = string;
            console.log(string);
        }
        else {
            let out = document.querySelector('.out');
            if(string==="0"){
                string=" ";
            }
            string = string + e.target.innerText;
            document.querySelector('.out').innerText = string;
            console.log(string);
        }
    })
})

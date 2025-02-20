function generateNumber() {


    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const winner = document.querySelector(".result")
    
    if( max > min ) {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        winner.innerHTML = result
        winner.style.color = rgb(10, 240, 10)
    }else {
        winner.innerHTML = "O valor minimo tem que ser menor que o valor maximo"
        winner.style.color = "red";

    }
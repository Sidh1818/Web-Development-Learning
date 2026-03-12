/*const func()=>{
let val1 = document.getElementById("i1").ariaValueMax;
document.getElementById("i2").value=val1*12;
    console.log(val1);
}
*/


const f2i = () => {
    let f = document.getElementById("i1").value;
    document.getElementById("i2").value = f ? f * 12 : "";
}

const i2f = () => {
    let i = document.getElementById("i2").value;
    document.getElementById("i1").value = i ? (i / 12).toFixed(2) : "";
}



function doSquare() {
    let firstnumber=document.getElementById("a").value
    let Secondnumber=document.getElementById("b").value
    let square=eval(firstnumber*firstnumber)+ eval(Secondnumber*Secondnumber)+ eval(2*firstnumber*Secondnumber)
    document.getElementById("div1").innerHTML=square
}
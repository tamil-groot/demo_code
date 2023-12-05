// alert("elmpmwe");
let outputscreen = document.getElementById("output-screen");

function display(num){
    outputscreen.value += num;
}

function del(){
    var del = outputscreen.value.slice(0,-1);
    outputscreen.value= del ;
}

function ac(){
    outputscreen.value = "";
}

function sqrt(){
    var square =Math.sqrt(outputscreen.value);
    outputscreen.value=square;
}

function per(){
    var percentage=eval(outputscreen.value);
    var per=percentage*100 +'%';
    outputscreen.value=per;
}
function sin(){
    var sin=Math.sin(outputscreen.value);
    outputscreen.value=sin;
}

function cos(){
    var cos=Math.cos(outputscreen.value);
    outputscreen.value=cos;
}

function tan(){
    var tan=Math.tan(outputscreen.value);
    outputscreen.value=tan;
}

function fact(){
    let n=outputscreen.value;
    var answer=1;
    if(n==0||n==1){
        answer=0;
    }
    else{
    for(var i=n;i>=1;i--)
    {
        answer=answer*i;
    }
    
}
outputscreen.value=answer;
}

function rad(){
    let radi = outputscreen.value;
    var radious = (radi*180)/3.14;
    outputscreen.value=radious;

}
function square(){
    let squr=outputscreen.value;
    var squree=Math.pow(squr,2);
    outputscreen.value=squree;
}

function pi(){
    let pi = outputscreen.value;
    var pii = pi*3.141;
    outputscreen.value=pii;
}

function log(){
    let log=outputscreen.value;
    var logirithm=Math.log10(log);
    outputscreen.value=logirithm;
}
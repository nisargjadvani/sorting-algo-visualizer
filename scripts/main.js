var input_size=document.getElementById("arr-size"),array_size=input_size.value;
var arr_speed=document.getElementById("arr-speed");
var arr_gen=document.getElementById("arr-generate");


var algo_type = document.querySelectorAll(".algo button");
var div_size=[];
var divs=[];
var margin_size;
var conn=document.querySelector("#array-container");
    conn.style="flex-direction:row";
var maxx=150, minn=20;
arr_gen.addEventListener("click",generate_array);
input_size.addEventListener("input",update_array);

function generate_array(){
    //console.log("generate_array called\n");
    conn.innerHTML="";
    var col;
    for(var i=0; i<array_size; i++){
        div_size[i] = Math.floor(Math.random()*0.5*(maxx-minn))+10;
        //console.log(div_size[i]);
        divs[i]=document.createElement("div");
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:black; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_size[i]) + "%;";

        if(i%2==0){col="#d3d3d3";}
        else{col="#fff";}
        
        divs[i].innerHTML="<p style='background-color:"+col+";'>"+div_size[i]+"</p>";
       // divs[i].innerHTML="<p>"+div_size[i]+"</p>";
        conn.appendChild(divs[i]);
        //console.log(divs[i].innerHTML);
    }
}

function update_array(){
    array_size=input_size.value;
    generate_array();
}

window.onload = update_array();

for(var i=0;i<algo_type.length;i++)
{
    algo_type[i].addEventListener("click",runalgo);
}

function runalgo()
{
    disable_buttons();
    this.classList.add("button_selected");
    switch(this.innerHTML){
        case "Bubble": Bubble();
            break;
        case "Selection":Selection_sort();
            break;
        case "Insertion":Insertion();
            break;
        case "Merge":Merge();
            break;
        case "Quick":Quick();
            break;
        case "Heap":Heap();
            break;
    }
}

function disable_buttons()
{
    input_size.disabled=true;
    array_size.disabled=true;
    arr_gen.disabled=true;
    arr_speed.disabled=true;
    for(var i=0;i<algo_type.length;i++)
    {
        algo_type[i].classList=[];
        algo_type[i].classList.add("button_locked");

        algo_type[i].disabled=true;
    }
}

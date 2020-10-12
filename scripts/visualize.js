var speed=1000;

arr_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=arr_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=5;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;
/*
function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";

        cont.innerHTML="<p style='background-color:"+col+";'>"+height+"</p>";
    },c_delay+=delay_time);
}
*/
function div_update(cont,height,color,index)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        var col;
        if(index%2==0)
        col="#d3d3d3";
        else
        col="#fff";
        cont.innerHTML="<p style='background-color:"+col+";'>"+height+"</p>";
    },c_delay+=delay_time);
}


function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_type.length;i++)
        {
            algo_type[i].classList=[];
            algo_type[i].classList.add("unselected");
            algo_type[i].disabled=false;
        }
            input_size.disabled=false;
            arr_gen.disabled=false;
            arr_speed.disabled=false;
        
    },c_delay+=delay_time);
}

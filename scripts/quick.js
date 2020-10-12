
function Quick(){
    c_delay=0;

    quick_sort(0,array_size-1);

    for(var k=0; k<array_size; k++){
        div_update(divs[k],div_size[k],"green",k); }

    enable_buttons();
}

function quick_sort(start, end){
    if(start < end){
        var pivot = quick_partiton(start,end);
        quick_sort(start, pivot-1);
        quick_sort(pivot+1, end);
    }
}

function quick_partiton(start, end)
{
    var i=start-1;
    var pivot = div_size[end];

    div_update(divs[end],div_size[end],"yellow",end);

    for(var j=start; j<end; j++){
        if(div_size[j] < pivot){
            div_update(divs[j],div_size[j],"yellow",j);
            i++;
            div_update(divs[i],div_size[i],"red",i);
            div_update(divs[j],div_size[j],"red",j);

            var temp = div_size[i];
            div_size[i] = div_size[j];
            div_size[j] = temp;

            div_update(divs[i],div_size[i],"red",i);
            div_update(divs[j],div_size[j],"red",j);

            div_update(divs[i],div_size[i],"blue",i);
            div_update(divs[j],div_size[j],"blue",j);
        }
    }
    div_update(divs[end],div_size[end],"red",end);
    div_update(divs[i+1],div_size[i+1],"red",i+1);
    i++;
    var temp = div_size[i];
    div_size[i] = div_size[end];
    div_size[end] = temp;

    div_update(divs[i],div_size[i],"green",i);
    div_update(divs[end],div_size[end],"red",end);

    for(var k=start; k<=i; k++){
            div_update(divs[k],div_size[k],"green",k);
    }
    return i;
}
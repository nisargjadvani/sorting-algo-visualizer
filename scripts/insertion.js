
function Insertion(){
    c_delay=0;
    var i, key, j;
    for( i=1; i <array_size; i++ ){
        div_update(divs[i],div_size[i],"yellow",i);

        key = div_size[i];
        j = i-1;

        while(j>=0 && div_size[j]>key){
            div_update(divs[j],div_size[j],"red",j);
            div_update(divs[j+1],div_size[j+1],"red",j+1);

            div_size[j+1] = div_size[j];

            div_update(divs[j],div_size[j],"red",j);
            div_update(divs[j+1],div_size[j+1],"red",j+1);


            div_update(divs[j],div_size[j],"blue",j);
            if(j!=i-1)
            div_update(divs[j+1],div_size[j+1],"blue",j+1);
            else
            div_update(divs[j+1],div_size[j+1],"yellow",j+1);

            j--;
        }
        div_size[j+1] = key;
        for(var t=0; t<i; t++)
        div_update(divs[t],div_size[t],"green",t);
    }
    div_update(divs[array_size-1],div_size[array_size-1],"green",array_size-1);
    enable_buttons();
}
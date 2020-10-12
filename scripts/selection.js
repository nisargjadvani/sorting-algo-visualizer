
function Selection_sort()
{
    c_delay=0;
    var index=0;
    for(var i=0; i<array_size; i++)
    {
        index=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_size[j],"yellow",j);

            if(div_size[j]<div_size[index])
            {
                if(index!=i)
                {
                    div_update(divs[index],div_size[index],"blue",index);
                }
                index=j;
                div_update(divs[index],div_size[index],"red",index);
            }
            else
            {
                div_update(divs[j],div_size[j],"blue",j);
            }
        }
        
        if(index!=i)
        {
            var temp=div_size[index];
            div_size[index]=div_size[i];
            div_size[i]=temp;

            div_update(divs[index],div_size[index],"red",index);
            div_update(divs[i],div_size[i],"red",i);
            div_update(divs[index],div_size[index],"blue",index);
        }
        div_update(divs[i],div_size[i],"green",i);
    }
    div_update(divs[i],div_size[i],"green",i);

    enable_buttons();
    
}
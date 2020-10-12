

function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_size[i],"red",i);
    div_update(divs[j],div_size[j],"red",j);

    var temp=div_size[i];
    div_size[i]=div_size[j];
    div_size[j]=temp;

    div_update(divs[i],div_size[i],"red",i);
    div_update(divs[j],div_size[j],"red",j);

    div_update(divs[i],div_size[i],"blue",i);
    div_update(divs[j],div_size[j],"blue",j);
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_size[l]>div_size[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_size[largest],"blue",largest);
        }

        largest=l;

        div_update(divs[largest],div_size[largest],"red",largest);
    }

    if(r<n && div_size[r]>div_size[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_size[largest],"blue"),largest;
        }

        largest=r;

        div_update(divs[largest],div_size[largest],"red",largest);
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_size[i],"green",i);
        div_update(divs[i],div_size[i],"yellow",i);

        max_heapify(i,0);

        div_update(divs[i],div_size[i],"blue",i);
        div_update(divs[i],div_size[i],"green",i);
    }
    div_update(divs[i],div_size[i],"green",i);
}
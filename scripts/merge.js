
function Merge(){
    c_delay=0;

    merge_sort(0,array_size-1);

    enable_buttons();
}

function merge_sort(l,r){
    if(l<r)
    {
        var mid = Math.floor(l+(r-l)/2);
        div_update(divs[mid],div_size[mid],"yellow",mid);

        merge_sort(l,mid);
        merge_sort(mid+1,r);

        merge(l,mid,r);
    }
}

function merge(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_size[q++];
            div_update(divs[q-1],div_size[q-1],"red",q-1);
        }
        else if(q>end)
        {
            Arr[k++]=div_size[p++];
            div_update(divs[p-1],div_size[p-1],"red",q-1);
        }
        else if(div_size[p]<div_size[q])
        {
            Arr[k++]=div_size[p++];
            div_update(divs[p-1],div_size[p-1],"red",q-1);
        }
        else
        {
            Arr[k++]=div_size[q++];
            div_update(divs[q-1],div_size[q-1],"red",q-1);
        }
    }

    for(var t=0;t<k;t++)
    {
        div_size[start++]=Arr[t];
        div_update(divs[start-1],div_size[start-1],"green",start-1);
    }
}
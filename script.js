function search(){
    var tb = document.getElementById('myTable');
    var value = document.getElementById('txtSearch').value;
    lcaseVal = value.toLowerCase();

    for(var i=1; i< tb.rows.length; i++)
    {
        var r= tb.rows[i]        
        if(r.innerText.toLowerCase().includes(lcaseVal))
        {
            r.removeAttribute("style");              
        }
        else
        {
            r.setAttribute("style", "display:none;");      
        }   
        
     }
     
}


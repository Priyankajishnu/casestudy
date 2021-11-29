
function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            // var counter=0;
            var output="";
            for(var i=0;i<response.length;i++){
                if(response[i].completed==true){
                    output+='<input type="checkbox"  id="checkbox" checked=true disabled  >'+" "+response[i].title+"<br><br>";
                    
                }
                else{
                    output+='<input type="checkbox"  id="checkbox" onclick=updateList()>'+" "+response[i].title+"<br><br>";
                }
                // output+=("<tr><td>"+"<input id=remember type=checkbox unchecked>"+"</td><td>"+response[i].title+"</td></tr>");
            }
            document.getElementById("myTable").innerHTML=output;
        }
        
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
ajax();

var counter;
function updateList(){
        
        var myCheck = document.getElementById("checkbox");
        
        var compltedTasks = document.querySelectorAll('input[type="checkbox"]:disabled').length;
        
        var checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
         counter=checkedTasks-compltedTasks;    
       if (counter==5){
        alert("Congrats!! 5 Tasks have been Successfully Completed");
       }
}






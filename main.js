var  nameStrings=["Ruben" ,"Michael", "Jonathan", "Nokubonga", "Fatima", "Tumelo"];

function generateList(array){
   var s="";
   for(var i=0;i<array.length; i++){
       s+="<br>"+ array[i];
 }

 document.getElementById("nameList").innerHTML=s;
}
function generateRandomly(array){
    var j, x, i=0, len=array.length;
    for(i; i<len;i++){
        j=Math.floor(Math.random()* len);
        x=array[i];
        array[i]=array[j];
        array[j]=x;
    }
}
var cartItems=JSON.parse(localStorage.cartData);




document.addEventListener('DOMContentLoaded', function(){
    // var table = document.getElementById("mytable");
    // var rowCount = table.rows.length;
    
    // var rowCount = table.rows.length;
    //    var row = table.insertRow(rowCount);
    // var cell1 = row.insertCell(0);
    // var cell2= row.insertCell(1);
    // cell1.innerHtml="new text";
    // console.log(cell1.innerHtml);

    var table = document.getElementById("myTable");
//   var rowCount = table.rows.length;
//   var row = table.insertRow(rowCount);

//   console.log(table);
//    var cell1 = row.insertCell(0);
//    var cell2 = row.insertCell(1);
//    var cell3 = row.insertCell(2);
//    var cell4 = row.insertCell(3);
//    cell1.innerHTML = cartItems[0].name;
//    cell2.innerHTML = cartItems[0].category;
//    cell3.innerHTML = cartItems[0].price;
//    cell4.innerHTML = cartItems[0].quantity;
var length=cartItems.length;
var totalPrice=0;
var totalQuantity=0;
for (var i=0;i<length;i++)
{
        var table = document.getElementById("myTable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5= row.insertCell(4);
        cell1.innerHTML = cartItems[i].name;
        cell2.innerHTML = cartItems[i].category;
        cell3.innerHTML = cartItems[i].price;
        cell4.innerHTML = cartItems[i].quantity;
        totalPrice= totalPrice +  (parseFloat(cell3.innerHTML))*parseFloat(cell4.innerHTML);
        totalQuantity =totalQuantity +parseFloat(cell4.innerHTML);
        var id=i;
       
         cell5.innerHTML="<img src='./images/remove.png' alt='remove' height='50' width='50' onclick='remove(this)'/>";

    //      var img = document.createElement('img');
    //  img.src = "./images/remove.png";
    //  img.width="50";
    //  img.height="50";
    //  cell5.appendChild(img);
     

}


document.getElementById('quantityPara').innerHTML=totalQuantity;
document.getElementById('pricePara').innerHTML=totalPrice;







}, false);


function remove(id){
    var child =id.parentElement.parentElement;
      var c = child.childNodes;
    var price=   parseFloat(c.item(2).innerHTML);
    var quantity=   parseFloat(c.item(3).innerHTML);
    var minus=price*quantity;
    var name = c.item(0).innerHTML;
   


   // 
  //console.log(minus); // got the whole row here

 var oldquantity= document.getElementById('quantityPara').innerHTML;
  var oldprice =document.getElementById('pricePara').innerHTML;
 
  var new_quantity= parseFloat(oldquantity)-quantity;
  var new_price =parseFloat(oldprice)-minus;

document.getElementById('quantityPara').innerHTML=new_quantity;
document.getElementById('pricePara').innerHTML=new_price;

   

 var length= cartItems.length;
 //console.log(length);
var i=0;
 for ( var x of cartItems)
 {  
     if( name == x.name)
     {
       cartItems.splice(i,1);
       
     }

i =i+1;

 }


console.log(cartItems);
localStorage.cartData=JSON.stringify(cartItems);

child.remove();



}

    
  
  
    
     


function order(){
  
  var total_Price=parseFloat(document.getElementById('pricePara').innerHTML);
  var total_Quantity=parseFloat(document.getElementById('quantityPara').innerHTML);
  const send ={
            totalQuantity:total_Quantity,
            totalPrice:total_Price
  
       };

       const jsonString=JSON.stringify(send);

       const xhr = new XMLHttpRequest();
       xhr.open("POST","http://localhost:9876/orders");
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.send(jsonString);
       xhr.onload = function(){
            var ans= JSON.parse(this.responseText);
            console.log(ans);
            var q=ans.quantity;
            var d=ans.discount;
            var p=ans.price;
          var result ="Total Quantity is " +q+" you will get " +d+ " %discount & Total Price after Discount Rs. "+p +"/";
           document.getElementById('result').innerHTML=result;
       }

  



}

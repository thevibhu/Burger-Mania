
var cartItems=[];

function dropDown(id) {
    // var ele = document.getElementById("category");
        var ele=document.getElementById(id);
     var selectedValue = ele.options[ele.selectedIndex].value;
   
     var x = ele.parentElement.parentElement.parentElement;
     var c = x.childNodes;
     
    //   console.log(c.item(8).firstChild.childNodes[1].value);  // value of quanitty
    // console.log(c.item(4).innerHTML); 
  
    if(selectedValue=="Veg"){
       c.item(4).innerHTML = "100";
    }
    else if(selectedValue=="Egg"){
       c.item(4).innerHTML = "150";
    }
    else if(selectedValue=="Chicken"){
       c.item(4).innerHTML = "200";
    }
   
}

function fuc(id){
   
    var ele=document.getElementById(id);
    
     var x = ele.parentElement.parentElement; // got the row here
     
     var c =x.childNodes;

    //  console.log(c.item(4).innerHTML); // got the dynamic price
    // var e = document.getElementById("ddlViewBy");
    // var strUser = e.options[e.selectedIndex].value;
    var op=c.item(6);
    // var xs=op.id;
    // var o=document.getElementById(xs);
    
    //  var data=op.options[op.selectedIndex].value;
    var selectedindex=op.firstChild.childNodes[3].selectedIndex;//the category
        // got the id of drop down

        var idDropDown=op.firstChild.childNodes[3].id;
        var ele=document.getElementById(idDropDown);
        var category1 = ele.options[ele.selectedIndex].value;// got the selected category here
        var price1=c.item(4).innerHTML;// got the price here
        var quantity1=c.item(8).firstChild.childNodes[1].value // got quantity here
        var name1=c.item(1).innerHTML; // got name here
      // got all values for the object now
      // when the add to cart button is clicked it gets all these values , stores them in an object, appends 
      // that object in the global arry which will be passed through local storage

        var object={
            name:name1,
            category:category1,
            price:price1,
            quantity:quantity1

        };
        cartItems.push(object);
        
        console.log(cartItems);


}

function cartPage(){



localStorage.cartData=JSON.stringify(cartItems);



}
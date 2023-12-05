// alert('hi tamil')
let productarray=[];

function validation(){
    var product=document.getElementById('product').value;    
    var quantity=document.getElementById('quantity').value;    
    var rate=document.getElementById('rate').value;    
    var discript=document.getElementById('discription').value;
    var id=document.getElementById('id').value;

    if(product==""){
        document.getElementById("product-error").innerHTML="Enter the product names";
    }
    else{
        document.getElementById("product-error").innerHTML="";
    }
    if(quantity==""){
        error1="Enter the quantity number";
    }
    else{
        error1="";
    }
    if(rate==""){
        error2="Enter the rate ";
  
    }
    else{
        error2="";
    }
    if(discript==""){
        error3="Write the content ";
  
    }
    else{
        error3="";
    }

    document.getElementById("quantity-error").innerHTML=error1;
    document.getElementById("rate-error").innerHTML=error2;
    document.getElementById("discription-error").innerHTML=error3;
  if(id!='')
{
     
    for(var i=0;i<productarray.length;i++ ){
        if(id==i){
          productarray[i].product=product;      
           productarray[i].quantity=quantity;      
            productarray[i].rate=rate;      
         productarray[i].discription=discript;  

        }
        
        localStorage.setItem('productarray', JSON.stringify(productarray));
       

        reset();

        buildtable(JSON.parse(localStorage.getItem("productarray") || "[]"));   
    }



  }else{

if(product!="" && quantity!="" && rate!="" && discript!=""){
        let num={
            id: Date.now(),
            product:product,
            quantity:quantity,
            rate:rate,
            discription:discript
        }
        productarray.push(num);

        localStorage.setItem('productarray', JSON.stringify(productarray));

        console.log('productdatd',productarray);
        reset();
        buildtable(JSON.parse(localStorage.getItem("productarray") || "[]"));   
    }
}

}
function reset(){
    document.myform.reset();
}   

function buildtable(data){
    var table=document.getElementById("table")
    // console.log('Form data:', data);s
    table.innerHTML ="";
    for(var i=0;i<data.length;i++){
        var row =`<tr> 
                    <td>${data[i].product}</td> 
                    <td>${data[i].quantity}</td> 
                    <td>${data[i].rate}</td>
                    <td>${data[i].discription}</td>
                    <td>
                        <button class="edit" style="padding:8px 13px 8px 13px;background-color:green;color:white;" onclick=edit(${i})>Edit</button>
                        <button class="del" style="padding:5px 15px 5px 15px;background-color:red;color:white;"  onclick=del(${data[i].id})>Delete</button>
                    </td>

                </tr>`
                 table.innerHTML  +=row;

}

}




function edit(idNumber){

    for(var i=0;i<productarray.length;i++ ){
        if(idNumber==i){
                        document.getElementById('id').value=idNumber;      

            document.getElementById('product').value=productarray[i].product;      
            document.getElementById('quantity').value=productarray[i].quantity;      
            document.getElementById('rate').value=productarray[i].rate;      
            document.getElementById('discription').value=productarray[i].discription;      

        }

    }

}
function del(idNumber){
    // alert("delete")
    console.log(idNumber)
    productarray.splice(delet,1);
    buildtable(productarray); 
    localStorage.removeItem('product');
    }
function update(){
    // alert('hi tamil')
   
   
            // document.getElementById('product').value=product;      
            // document.getElementById('quantity').value=quantity;      
            // document.getElementById('rate').value=rate;      
            // document.getElementById('discription').value=discription;     
       
      
     for(var i=0;i<productarray.length;i++ ){
        if(id==i){
            document.getElementById('product').value=productarray[i].product;      
            document.getElementById('quantity').value=productarray[i].quantity;      
            document.getElementById('rate').value=productarray[i].rate;      
            document.getElementById('discription').value=productarray[i].discription;      

        }

    }

}
   

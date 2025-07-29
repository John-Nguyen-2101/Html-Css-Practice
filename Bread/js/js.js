var giohang = new Array();
function addcart(x){
var products = x.parentElement.children;
var hinh = products[0].src;
var namepr= products[1].innerText;
var price=products[2].children[0].innerText;
var amount=products[2].children[1].value;
var pr= new Array(hinh,namepr,price,amount);
giohang.push(pr);
console.log(giohang);
showcount();

}
function showcount(){
    document.getElementById("countsp").innerHTML=giohang.length;
}
function change(){
    let x=document.getElementById("orderonline");
    if(x.style.display=="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
}
function displaycart(){
    var y=document.getElementById("detail-cart");
    if(y.style.display=="none"){
        y.style.display="block";
    }else{
        y.style.display="none";
    }showmycart();
}
function showmycart(){
    var ttgh="";
    var tong=0;
    for(var i=0;i<giohang.length;i++){
        var tt=parseInt(giohang[i][2])*parseInt(giohang[i][3]);
        tong+=tt;
        ttgh+=` 
                    <tr class="color-row2">
                        <td>${i+1}</td>
                        <td><img src="${giohang[i][0]}" alt="" style="width: 200px;"></td>
                        <td>${giohang[i][1]}</td>
                        <td>${giohang[i][3]}</td>
                        <td>$${giohang[i][2]}</td>
                        <td>$${tt}</td>
                    </tr>
                `;
    }
    ttgh+=` <tr class="color-row">
                        <td colspan="5">Total bill</td>
                        <td>$${tong}</td>
                    </tr>`;
    document.getElementById("mycart").innerHTML=ttgh;
}

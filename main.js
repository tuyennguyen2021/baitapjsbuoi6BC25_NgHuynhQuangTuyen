function writenLog () {
    var myString="";
    for (var param of arguments) {
        myString+=`${param} -`;
    }
    console.log(myString);
    
};

writenLog ('12', '123',"log3");

//bài tập 1

var n = 0;
var tong = 0;
while (tong < 10000) {
    tong+=n;
    n++;

}
console.log('Sô nguyên dương nhỏ nhât', n-1);
document.getElementById("ketQua").innerHTML='sô nguyên dương nhỏ nhất là : ' + (n-1);

//bài tập 2: s(n)= x + x^2+x^3+...x^n

document.getElementById("tinhTong").onclick = function () {
    var nhapSoX = document.getElementById("nhapX").value*1;
    var nhapSoN = document.getElementById("nhapN").value*1;

    tinhTongS(nhapSoX, nhapSoN );
}

function tinhTongS(x, n){
    var i=1;
    var x;
    console.log('x: ',x);
    var n;
    console.log('n:',n);
    var S = 0;
    var tich = 1;
    while(i<=n){
        tich = tich*x;
        S = S + tich;
        i++;
    }
    console.log('tổng là: ', S);
    document.getElementById("txtKetQua").innerHTML =S;
}

//bài tập 3: n!=1*2...*n

document.getElementById("tinhGiaiThua").onclick = function () {
    var nhapNumber = document.getElementById("txtNumber").value*1;

    tinhGiaiThua(nhapNumber);

}

function tinhGiaiThua(n){

    var n;
    var i=1;
    var GT=1;

    while(i<=n){
        GT=GT*i;
        i++;
    }

    console.log('tổng giai thừa là: ', GT);
    document.getElementById("txtKetQua2").innerHTML =GT;

}

//bài tập 4: viết chương trình tạo the 10 thẻ div chan the

document.getElementById("taoTheDiv").onclick = function () {
    var taoDiv ="";
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 0){
            taoDiv+= '<div class="bg-danger p-4">' + 'div chẳn' + i + '</div>';
        }else{
            taoDiv+= '<div class="bg-primary p-4">' + 'div lẻ' + i + '</div>';
        }
    }
    document.getElementById("txtKetQua4").innerHTML =taoDiv;
    
}

















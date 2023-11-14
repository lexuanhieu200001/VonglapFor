//bai1
/*let text=''
let i;
for ( i = 0 ; i < 5; i++) {
    text += "Number i is =" + i + "<br>";
}
document.write(text);*/
//bai2 Tính tổng các phần tử từ 0 đến số vừa nhập vào.
let number = +prompt('number');
let total = 0;
for ( i = 0 ; i <= number ; i+= 1) {
    total += i;
}
document.write(total);
n=Math.random();
n=Math.floor(n*6);
n=n+1;

m=Math.random();
m=Math.floor(m*6);
m=m+1;

if(n>m){
    document.querySelector("h1").innerHTML="🚩 Player 1 win";
}
else if(n<m){
    document.querySelector("h1").innerHTML="🚩 Player 2 win";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw";
}
document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+m+".png");
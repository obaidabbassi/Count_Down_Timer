function changeBg(){
var count=0;
let colors=["red","orange","yellow","pink","purple"]



var img=["url(/bg1.jpg)","url(/bg2.jpg)","url(/bg3.jpg)","url(bg4.jpg)","url(bg5.jpg)","url(/bg6.png)","url(/bg7.jpg)"]
var m=Math.ceil(Math.random()*img.length-1)
console.log("I m before"+m)
if(m<0){

Math.ceil(Math.random()*img.length+1)

console.log(m)

}
console.log("I m after"+m)

var k=document.getElementById("bg");

// document.body.style.backgroundImage = "url('img_tree.png')";

k.style.backgroundImage= img[m];

}
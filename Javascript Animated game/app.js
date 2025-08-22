// var GabruPostion=20;
// var forward= false;
// var backward= false;
// function moveGabru(type){
//      var Gabru=document.getElementById("Gabru");
//      if(type==="forward"){
//         GabruPostion+=5;
//         Gabru.style.left=GabruPostion+"px";
//      if(!forward){
//         Gabru.src="images/lee forward.gif"
//      }
//      forward=true;

//        if(type==="backward"){
//         GabruPostion-=5;
//         Gabru.style.left=GabruPostion+"px";
       
//         if(!backward){
//         Gabru.src="images/lee backward.gif"
//         }
//         backward=true;
    
// }
// }

// function action(event){
//    if(event.key==="g"){
//     moveGabru("forward")
//    }else(event.key==="a")
//    {
//     moveGabru("backward")
//    }
// }


// window.addEventListener("keydown",action)





//GAME NO 2
var billyPosition=20;
var billyForward=false;
var billyBackward=false;
var rotate=false;
 var billy=document.getElementById("billy");
 var ryuPosition=20;
var ryuForward=false;
var ryuBackward=false;
 var ryu=document.getElementById("ryu");

function moveRyu(type){
  
   if(type==="forward"){
      ryuBackward=false;
      ryuPosition += 10;
       ryu.style.right=ryuPosition +"px"
      if(!ryuForward){
        ryu.src="images/ryu forward.gif";
      }
    ryuForward=true;
   }
     
   if(type==="backward"){
      ryuForward=false;
      ryuPosition -= 10;
      ryu.style.right=billyPosition +"px"
      if(! ryuBackward){
       ryu.src="images/ryu forward.gif";
      }
    ryuBackward=true;
   }
}


function moveBilly(type){
  
   if(type==="forward"){
      billyBackward=false;
      billyPosition += 10;
       billy.style.left=billyPosition +"px"
      if(!billyForward){
        billy.src="images/billy forward.gif";
      }
    billyForward=true;
   }
     
   if(type==="backward"){
      billyForward=false;
      billyPosition -= 16;
       billy.style.left=billyPosition +"px"
      if(! billyBackward){
        billy.src="images/billy forward.gif";
      }
       billyBackward=true;
   }
   if(type===" "){
      if(!rotate){
     billy.src="images/billy rotate.gif";
      }
      rotate=true;
   }
}




function action(event){
if(event.key==="b"){
   moveBilly("forward")
}else if(event.key==="i")
{
   moveBilly("backward")
}
else if(event.key==="ArrowLeft")
{
   moveRyu("forward")
}
else if(event.key==="ArrowRight")
{
   moveRyu("backward")
}
else if(event.key===" ")
{
   moveRyu(" ")
}
}
function resetAction(){
        billy.src="images/billy forward.gif"
        billyForward=false;
        billyBackward=false;
        rotate=false;

}
window.addEventListener("keydown",action)
window.addEventListener("keyup",resetAction)


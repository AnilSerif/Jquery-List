$(function(){
        

  $("#btn").click(function(){

          function sayıUret(){

               return Math.round(Math.random()*9);
       
          }  
         
          $(".c1").hide();


         $("#div1").html(sayıUret()).fadeIn(1000).css({"background-color":"beige","color":"green"});
        
         $("#div2").html(sayıUret()).fadeIn(1500).css({"background-color":"beige","color":"green"});        
         
         $("#div3").html(sayıUret()).fadeIn(2000).css({"background-color":"beige","color":"green"});
     
         $("#div4").html(sayıUret()).fadeIn(2500).css({"background-color":"beige","color":"green"});              

         $("#div5").html(sayıUret()).fadeIn(3000).css({"background-color":"beige","color":"green"});
     
         $("#div6").html(sayıUret()).fadeIn(3500).css({"background-color":"beige","color":"green"}); 

         $("#div7").html(sayıUret()).fadeIn(4000).css({"background-color":"beige","color":"green"});
           
     
          
         setInterval(function(){

          $("#div1").addClass("hover");
          $("#div2").addClass("hover");
          $("#div3").addClass("hover");
          $("#div4").addClass("hover");
          $("#div5").addClass("hover");
          $("#div6").addClass("hover");
          $("#div7").addClass("hover");

          },4500);          
     });
      



     $("#btn1").click(function(){

          location.reload(true);

     })







});
// betting app/ User puts how many they have to bet.
// Each turn they can bet a certain ammount
// heads or tails...win: double money they bet,
// loose: loose all the money they bet

var totalMoney;

$(document).ready(function(){

  $("#deposit").on("click",function(){
    totalMoney = parseInt($("#bank").val());
    $("span").text("Bank = $"+totalMoney);
    //Hide elements
   $("#deposit").css('display','none');
    $("#bank").css("display","none");
  });

  $("#heads").on("click",function(){
    var bet = parseInt($("#bet").val());
    //throw random number function

    if (bet>totalMoney){
      alert("Not enough money")
    } else {
      var cas = casinoMove();
      if (cas =='heads'){
        totalMoney += bet;
        } else {
        totalMoney -= bet;
        }
      $("span").text("Bank = $"+totalMoney);
      console.log(totalMoney);
      }
    });

    $("#tails").on("click",function(){
      var bet = parseInt($("#bet").val());

      if (bet>totalMoney){
        alert("Not enough money")
      }else{

      //throw random number function
      var cas = casinoMove();
      if (cas =='tails'){
        totalMoney += bet;
        } else{
        totalMoney -= bet;
        }
        $("span").text("Bank = $"+totalMoney);
        console.log(totalMoney);
      }
   });

  function casinoMove(){
    var move = Math.floor(Math.random()*2);
    if (move==1){
      return "heads";
    } else{
      return "tails";
    }

  }


});

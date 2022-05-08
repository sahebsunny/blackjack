

cards1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'ace', 'jack', 'king', 'queen']
cards2 = ['spades', 'diamonds', 'hearts', 'diamonds']


let count = 0
ar =["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10"]

document.getElementById("box1").style.display = 'none'
document.getElementById("box2").style.display = 'none'
document.getElementById("box3").style.display = 'none'
document.getElementById("box4").style.display = 'none'
document.getElementById("box5").style.display = 'none'
document.getElementById("box6").style.display = 'none'
document.getElementById("box7").style.display = 'none'
document.getElementById("box8").style.display = 'none'
document.getElementById("box9").style.display = 'none'
document.getElementById("box10").style.display = 'none'

document.getElementById("box11").style.display = 'none'
document.getElementById("box12").style.display = 'none'
document.getElementById("box13").style.display = 'none'
document.getElementById("box14").style.display = 'none'


let button_start = document.getElementById("btn")
let but_hit = document.getElementById("hit")
let but_stand = document.getElementById("stand")
but_hit.style.display = 'none'
but_stand.style.display = 'none'

let dealer_no = document.getElementsByClassName("num1")[0]
dealer_no.style.display ='none'
let player_no = document.getElementsByClassName("num2")[0]
player_no.style.display ='none'
let game_result = document.getElementsByClassName("result_board")[0]
game_result.style.display ='none'
let new_game = document.getElementById('new_game')
new_game.style.display ='none'

let increment_deal = 0
let increment_payer = 0

let rand1 = 0
let rand2 = 0

let img_src = ''
let deal_2nd_card = ''

let player_sum = 0
let dealer_sum = 0

let tempp = 0


function check() {

  if (dealer_sum > player_sum && dealer_sum < 21) {
    game_result.style.display ='block'
    game_result.innerHTML = "You lose...🥲"
    return;
  }
  else if (dealer_sum > 21) {
    game_result.style.display ='block'
    game_result.innerHTML = "You Win!!!😆"
    return;
  }
  else if (dealer_sum == 21) {
    game_result.style.display ='block'
    game_result.innerHTML = "Dealer Black Jack..."
    alert("Dealer Black Jack...")
    return;
  }
  else if (dealer_sum === player_sum) {
    game_result.style.display ='block'
    game_result.innerHTML = "   Push..."
  }
  else if (dealer_sum < player_sum && dealer_sum < 21) {
    dealer_play()
  }
}




but_stand.addEventListener("click", dealer_play);


function dealer_play(){

  but_hit.style.display = 'none'
  but_stand.style.display = 'none'
  dealer_no.innerHTML = dealer_sum

    if (player_sum == 21){
        game_result.style.display ='block'
        alert("Black Jack")
        game_result.innerHTML = "Black Jack!!👑"
        return;
      }

    else if (dealer_sum > player_sum && dealer_sum < 21) {
      game_result.style.display ='block'
      game_result.innerHTML = "You lose...🥲"
      let de = document.getElementById("box4")
      de.innerHTML = `<img class="card_img" src="${deal_2nd_card}" alt="sp2.png">`
      return;
    }

    else if (dealer_sum == 21) {
      game_result.style.display ='block'
      game_result.innerHTML = "Dealer Black Jack..."
      alert("Dealer Black Jack...")
    }

  let de = document.getElementById("box4")
  de.innerHTML = `<img class="card_img" src="${deal_2nd_card}" alt="sp2.png">`

  if (dealer_sum < 21) {

    setTimeout(function(){

              let xp1 = document.getElementById(ar[count])
              xp1.style.display = 'block'
              xp1.style.marginTop = "10%";
              var pos = 0;
              id = setInterval(function() {
                  if (pos == 835 + increment_deal) {
                    clearInterval(id);
                    }
                  else {
                    pos += 5;
                    xp1.style.right = pos + 'px';
                  }
              }, 1);
              count++
              increment_deal -= 105

              rand1 = Math.random() * 12;
              rand1 = Math.floor(rand1);
              dealer_sum += point(cards1[rand1])
              dealer_no.innerHTML = dealer_sum

              rand2 = Math.random() * 3;
              rand2 = Math.floor(rand2);
              img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
              xp1.innerHTML = `<img class="card_img" src="${img_src}" alt="sp2.png">`
              check()

            }, 600)

      }
    }


document.getElementById("hit").addEventListener("click", function() {
  let xp = document.getElementById(ar[count])
  xp.style.display = 'block'
  xp.style.marginTop = "30%";


  var pos = 0;
  let id = setInterval(function() {
      if (pos == 610 + increment_payer) {
        clearInterval(id);
        }
      else {
        pos += 5;
        xp.style.right = pos + 'px';
      }
  }, 1);
  count++
  increment_payer -= 90

  rand1 = Math.random() * 12;
  rand1 = Math.floor(rand1);
  tempp = point(cards1[rand1])
  player_sum += tempp
  player_no.innerHTML = player_sum
  rand2 = Math.random() * 3;
  rand2 = Math.floor(rand2);
  img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
  xp.innerHTML = `<img class="card_img" src="${img_src}" alt="sp2.png">`

  if (player_sum>21){
    game_result.style.display ='block'
    game_result.innerHTML = "Busted - You lose"
    but_hit.style.display = 'none'
    but_stand.style.display = 'none'
  }
  if (player_sum === 21){
    game_result.style.display ='block'
  }

});



function start(z) {

          document.getElementById("log_b").style.display = 'none'
          document.getElementsByClassName("start_game_head")[0].style.display = 'none'
          let xp = document.getElementById(ar[count])
          xp.style.display = 'block'
          xp.style.marginTop = "30%";
          var pos = 0;

          id = setInterval(function() {
              if (pos == 700 + increment_payer) {
                clearInterval(id);
                }
              else {
                pos += 5;
                xp.style.right = pos + 'px';
              }
          }, 1);
          count++
          increment_payer -= 105
          console.log(increment_payer);
          rand1 = Math.random() * 12;
          rand1 = Math.floor(rand1);
          console.log(rand1);
          player_sum += point(cards1[rand1])

          rand2 = Math.random() * 3;
          rand2 = Math.floor(rand2);
          console.log(rand2);
          img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
          console.log(img_src);
          console.log("img_" + count);
          xp.innerHTML = `<img class="card_img" src="${img_src}" alt="sp2.png">`

  setTimeout(function(){

          let xp1 = document.getElementById(ar[count])
          xp1.style.display = 'block'
          xp1.style.marginTop = "10%";
          var pos = 0;
          id = setInterval(function() {
              if (pos == 700 + increment_deal) {
                clearInterval(id);
                }
              else {
                pos += 5;
                xp1.style.right = pos + 'px';
              }
          }, 1);
          count++
          increment_deal -= 105

          rand1 = Math.random() * 12;
          rand1 = Math.floor(rand1);
          dealer_sum += point(cards1[rand1])
          dealer_no.innerHTML = dealer_sum

          rand2 = Math.random() * 3;
          rand2 = Math.floor(rand2);
          img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
          xp1.innerHTML = `<img class="card_img" src="${img_src}" alt="sp2.png">`

        }, 600);

        setTimeout(function(){

                let xp1 = document.getElementById(ar[count])
                xp1.style.display = 'block'
                xp1.style.marginTop = "30%";
                var pos = 0;
                id = setInterval(function() {
                    if (pos == 715 + increment_deal) {
                      clearInterval(id);
                      }
                    else {
                      pos += 5;
                      xp1.style.right = pos + 'px';
                    }
                }, 1);
                count++
                increment_deal -= 105

                rand1 = Math.random() * 12;
                rand1 = Math.floor(rand1);
                tempp = point(cards1[rand1])
                player_sum += tempp
                player_no.innerHTML = player_sum
                rand2 = Math.random() * 3;
                rand2 = Math.floor(rand2);
                img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
                xp1.innerHTML = `<img class="card_img" src="${img_src}" alt="sp2.png">`

              }, 1200);

              // 4 card
              setTimeout(function(){

                      let xp1 = document.getElementById(ar[count])
                      xp1.style.display = 'block'
                      xp1.style.marginTop = "10%";
                      var pos = 0;
                      // clearInterval(id);
                      id = setInterval(function() {
                          if (pos == 820 + increment_deal) {
                            clearInterval(id);
                            }
                          else {
                            pos += 5;
                            xp1.style.right = pos + 'px';
                            // xp.style.top = pos + 'px';
                          }
                      }, 1);
                      count++
                      increment_deal -= 105

                      rand1 = Math.random() * 12;
                      rand1 = Math.floor(rand1);
                      dealer_sum += point(cards1[rand1])
                      rand2 = Math.random() * 3;
                      rand2 = Math.floor(rand2);
                      img_src = `cards/${cards1[rand1]}_of_${cards2[rand2]}.png`
                      deal_2nd_card = img_src
                      xp1.innerHTML = `<img class="card_img" src="card_back_2.png" alt="sp2.png">`

                    }, 1800);

      button_start.style.display = "none"

      but_hit.style.display = 'block'
      but_stand.style.display = 'block'
      but_hit.style.left = '40%'
      but_stand.style.left = '40%'
      new_game.style.display ='block'


      let idd = setInterval(function() {
        dealer_no.style.display ='block'
        player_no.style.display ='block'
            clearInterval(idd);
      }, 2100);
}


function point(x) {
    switch (x) {
    case 'jack':
      return 10;
      break;
    case 'king':
      return 10;
      break;
    case 'queen':
      return 10;
      break;
    case 'ace':
      return 11;
      break;
    case '2':
      return 2;
      break;
    case '3':
      return 3;
      break;
    case '4':
       return 4;
      break;
    case '5':
      return 5;
      break;
    case '6':
      return 6;
      break;
    case '7':
      return 7;
      break;
    case '8':
      return 8;
      break;
    case '9':
      return 9;
      break;
    case '10':
      return 10;
      break;

  }
}



// var z = window.matchMedia("(max-width: 500px)")
// z.addListener(start)

var forward=0;
function moveCharacterOne() {
    console.log(event.keyCode)
    console.log(forward)
    var character = document.getElementById('characterOne');
    if(event.keyCode === 68 && forward < 1220){
        forward = forward + 20;
        character.style.left = forward + 'px'
        character.style.height = "250px"
        character.src = '/Images/firstCharacter/walk.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
        },200);
    }
    if(event.keyCode === 65  && forward > 20){
        forward = forward - 20;
        character.style.left = forward + "px"
        character.style.height = "250px"
        character.src = '/Images/firstCharacter/walk.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
        },200);
    }
    if(event.keyCode === 87){
        character.src = '/Images/firstCharacter/jump.gif';
        character.style.height = "430px"
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif';
            character.style.height = "250px"
        },1500);
    }
    if(event.keyCode === 83){
        character.style.height = "150px"
        character.src = '/Images/firstCharacter/sitting.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
            character.style.height = '250px'
        },1100);
    }
    if(event.keyCode === 90){
        character.style.height = "375px"
        character.src = '/Images/firstCharacter/action1.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
            character.style.height = '250px'
        },1600);
    }
    if(event.keyCode === 88){
        character.style.height = "280px"
        character.src = '/Images/firstCharacter/action2.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
            character.style.height = '250px'
        },1700);
    }
    if(event.keyCode === 69){
        character.src = '/Images/firstCharacter/punch1.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
        },850);
    }
    if(event.keyCode === 70){
        character.style.height = "295px"
        character.src = '/Images/firstCharacter/punch2.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
            character.style.height = '250px'
        },900);
    }
    if(event.keyCode === 67){
        character.style.height = "295px"
        character.src = '/Images/firstCharacter/punch3.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
            character.style.height = '250px'
        },900);
    }
//*******************************Second Character********************************************* */
    
var characterTwo = document.getElementById('characterTwo')
    if(event.keyCode === 37  && forward < 1220){
        forward = forward + 20;
        characterTwo.style.right = forward + 'px'
        characterTwo.src = '/Images/secondCharacter/walk.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
        },300);
    }
    if(event.keyCode === 39 && forward > 20){
        forward = forward - 20;
        characterTwo.style.right = forward + 'px'
        characterTwo.src = '/Images/secondCharacter/walk.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
        },300);
    }
    if(event.keyCode === 38){
        forward = forward - 20;
        characterTwo.style.right = forward + 'px'
        characterTwo.style.height = "400px"
        characterTwo.src = '/Images/secondCharacter/jump.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
            characterTwo.style.height = "250px"
        },1400);
    }
    if(event.keyCode === 40){
        characterTwo.style.height = "400px"
        characterTwo.src = '/Images/secondCharacter/sitting.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
            characterTwo.style.height = "250px"
        },1000);
    }
    if(event.keyCode === 97){
        characterTwo.style.height = "390px"
        characterTwo.src = '/Images/secondCharacter/action1.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
            characterTwo.style.height = "250px"
        },2200);
    }
    if(event.keyCode === 98){
        characterTwo.style.height = "280px"
        characterTwo.src = '/Images/secondCharacter/action2.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
            characterTwo.style.height = "250px"
        },1800);
    }
    if(event.keyCode === 99){
        characterTwo.style.height = "220px"
        characterTwo.src = '/Images/secondCharacter/action3.gif';
        setTimeout(function(){
            characterTwo.src ='/Images/secondCharacter/standing.gif'
            characterTwo.style.height = "250px"
        },2500);
    }
}
window.onkeydown = moveCharacterOne;
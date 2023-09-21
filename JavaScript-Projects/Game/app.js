var forward=0;
function moveCharacterOne() {
    console.log(event.keyCode)
    var character = document.getElementById('characterOne');
    if(event.keyCode === 68){
        forward = forward + 20;
        character.style.left = forward + 'px'
        character.style.height = "250px"
        character.src = '/Images/firstCharacter/walk.gif';
        setTimeout(function(){
            character.src ='/Images/firstCharacter/standingstill.gif'
        },200);
    }
    if(event.keyCode === 65){
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
}
window.onkeydown = moveCharacterOne;
var element = document.querySelectorAll('.link');
var scoreboard = document.querySelector('div .score');
var titre = document.getElementById('title');

scoreboard.classList.remove('score');
scoreboard.classList.add('remove_display');

for(var i = 0;  i < element.length; i++){
   var p = element[i];
   
    p.addEventListener('mouseover', function(){
        this.classList.add('active');
        scoreboard.classList.add('score');
        scoreboard.classList.remove('remove_display');

        scoreboard.addEventListener('mouseover', function(){
            scoreboard.classList.add('score');
            scoreboard.classList.remove('remove_display');
        })
        scoreboard.addEventListener('mouseout', function(){
            scoreboard.classList.add('remove_display');
        })
    })
    p.addEventListener('mouseout', function(){
        this.classList.remove('active');
        scoreboard.classList.add('remove_display');
    })
}

scoreboard.addEventListener('mouseout', function(){
    scoreboard.classList.add('remove_display');
   
})

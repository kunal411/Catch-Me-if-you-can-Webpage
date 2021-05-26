var box = document.getElementById("catch-me");
box.addEventListener("mouseover", function(event){
    var maxWidth = window.innerWidth - 90;
    var maxHeight = window.innerHeight - 90;
    var newX = Math.floor(Math.random() * (maxWidth));
    var newY = Math.floor(Math.random() * (maxHeight));
    box.style.top = newY + 'px';
    box.style.left = newX + 'px';
});
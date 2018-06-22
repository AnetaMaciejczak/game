document.addEventListener("DOMContentLoaded", function () {

    var board = document.querySelector(".plansza");
    var counter = 0;

    timer = setInterval(function () {
        var zombie = document.createElement("div");

        zombie.classList.add("zombie");

        /*usatwiamy losowąlokalizację*/


        var position_horizontal = Math.floor(Math.random()*(250-5+1)+5);
        zombie.style.bottom = position_horizontal + "px";


        if (position_horizontal > 150) {
            var scaleBig = Math.random()*(0.75-0.2)+0.2;
            zombie.style.transform = "scale("+scaleBig+")";
        } else {
            var scaleSmall = Math.random()*(1.2-0.76)+0.76;
            zombie.style.transform = "scale("+scaleSmall+")";
        }

        var time = Math.random()*(10-4)+4;
        zombie.style.animationDuration = "0.5s," +time+"s";
        zombie.style.zIndex = 300- position_horizontal;

        board.appendChild(zombie);

        zombie.addEventListener("click", function () {
            this.remove();

            counter+=1;
            document.querySelector(".result").innerText = counter;
            console.log(counter);
        });

        zombie.addEventListener("animationend", function (event) {
            this.remove()
        });

    }, 1000);

});
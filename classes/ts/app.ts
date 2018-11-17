let ball: Ball;

let setView = function() : void 
{
    let ballView = document.getElementById("ball");
    let ballNameView = document.getElementById("ballName");
    if (ballView !== null && ballNameView !== null) {
        ballNameView.innerHTML = ball.getName();
        ballView.style.backgroundColor = ball.color;
        ballView.style.animationDuration = `${ball.bounceRate}ms`;
    }
}

let onDodgeBallClick = function() : void  {
    ball = new DodgeBall();
    ball.name = "My dodge ball";
    ball.color = "#e53935";
    setView();
}

let onBasketBallClick = function() : void  {
    ball = new BasketBall();
    ball.name = "Basketball 1";
    // ball.color = "#ff6f00";
    ball.color = "asdf";
    setView();
}

let onNBABallClick = function() : void  {
    ball = new BasketBall();
    ball.name = "Basketball 2";
    ball.color = "#f4511e";
    (<BasketBall>ball).isNBA = true;
    setView();
}

window.onload = function() {
    let btn = document.getElementById("dodgeBtn");
    if (btn !== null) {
        btn.addEventListener("click", onDodgeBallClick, false);
    }

    btn = document.getElementById("basketBtn");
    if (btn!== null) {
        btn.addEventListener("click", onBasketBallClick, false);
    }

    btn = document.getElementById("nbaBtn");
    if (btn !== null) {
        btn.addEventListener("click", onNBABallClick, false);
    }
};


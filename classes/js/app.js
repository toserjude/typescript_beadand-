"use strict";
var ball;
var setView = function () {
    var ballView = document.getElementById("ball");
    var ballNameView = document.getElementById("ballName");
    if (ballView !== null && ballNameView !== null) {
        ballNameView.innerHTML = ball.getName();
        ballView.style.backgroundColor = ball.color;
        ballView.style.animationDuration = ball.bounceRate + "ms";
    }
};
var onDodgeBallClick = function () {
    ball = new DodgeBall();
    ball.name = "My dodge ball";
    ball.color = "#e53935";
    setView();
};
var onBasketBallClick = function () {
    ball = new BasketBall();
    ball.name = "Basketball 1";
    // ball.color = "#ff6f00";
    ball.color = "asdf";
    setView();
};
var onNBABallClick = function () {
    ball = new BasketBall();
    ball.name = "Basketball 2";
    ball.color = "#f4511e";
    ball.isNBA = true;
    setView();
};
window.onload = function () {
    var btn = document.getElementById("dodgeBtn");
    if (btn !== null) {
        btn.addEventListener("click", onDodgeBallClick, false);
    }
    btn = document.getElementById("basketBtn");
    if (btn !== null) {
        btn.addEventListener("click", onBasketBallClick, false);
    }
    btn = document.getElementById("nbaBtn");
    if (btn !== null) {
        btn.addEventListener("click", onNBABallClick, false);
    }
};

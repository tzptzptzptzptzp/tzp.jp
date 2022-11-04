let game = document.getElementById("js-game");

document.getElementById("js-game-character").addEventListener("click", function() {
    this.classList.add("move");
    game.classList.add("visible");
});

let mole = document.querySelectorAll(".js-mole");
let totalPoint = 0;
for (let i =0; i < mole.length;i++) {
    mole[i].addEventListener("click", function() {
        totalPoint++;
        console.log(totalPoint);
    });
};

const playGame = () => {
    totalPoint = 0;
    game.classList.remove("visible");
    new Promise((resolve) => {
        countDown = async () => {
            await count(3);
            await count(2);
            await count(1);
            await count(0);
            count("");
            return resolve();
        };
        count = (num) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    document.getElementById("js-count-down").style.display = "block";
                    document.getElementById("js-count-down").textContent = num;
                    resolve();
                },1000);
            });
        }
        countDown();
    }).then(() => {
        new Promise((resolve) => {
            //もぐら叩きゲーム
            let random = Math.floor( Math.random() * 10 );
            let randomPrev = null;
            let active = document.getElementsByClassName("active");
            let count = 0;
            const whackAMole = setInterval(function() {
                random = Math.floor( Math.random() * 4 );
                while (random == randomPrev) {
                    random = Math.floor( Math.random() * 4 );
                };
                randomPrev = random;
                new Promise((resolve) => {
                    for (let i = 0;i < active.length;i++) {
                        active[i].classList.remove("active");
                    };
                    resolve();    
                }).then(() => {
                    if (random == 0) {
                        mole[0].classList.add("active");
                    } else if (random == 1) {
                        mole[1].classList.add("active");
                    } else if (random == 2) {
                        mole[2].classList.add("active");
                    } else {
                        mole[3].classList.add("active");
                    };
                    count++;
                })
                if (count === 25) {
                    clearInterval(whackAMole);
                    setTimeout(function() {
                        for (let i = 0;i < active.length;i++) {
                            active[i].classList.remove("active");
                        };
                        return resolve();
                    },1000)
                };
            }, 1000);
        }).then(() => {
            document.getElementById("js-game-text").style.display = "none";
            document.getElementById("js-game-text-result").style.display = "flex";
            document.getElementById("js-total-point").textContent = totalPoint;
            if (totalPoint < 15) {
                document.getElementById("js-point-judge").textContent = "D";
                document.getElementById("js-rank-comment").textContent = "ちょっとやばい！";
            } else if (totalPoint < 30) {
                document.getElementById("js-point-judge").textContent = "C";
                document.getElementById("js-rank-comment").textContent = "まだまだだな〜！";
            } else if (totalPoint < 45) {
                document.getElementById("js-point-judge").textContent = "B";
                document.getElementById("js-rank-comment").textContent = "本気出してよ〜！";
            } else if (totalPoint < 60) {
                document.getElementById("js-point-judge").textContent = "A";
                document.getElementById("js-rank-comment").textContent = "や、やるなー!!!!";
            } else {
                document.getElementById("js-point-judge").textContent = "S";
                document.getElementById("js-rank-comment").textContent = "参りました、、、";
            }
            game.classList.add("visible");
            console.log(totalPoint);
        });

    });

};

document.getElementById("js-start").addEventListener("click", playGame);
document.getElementById("js-restart").addEventListener("click", playGame);

document.getElementById("js-close").addEventListener("click", function() {
    game.classList.remove("visible");
    document.getElementById("js-game-character").classList.remove("move");
    totalPoint = 0;
    setTimeout(function() {
        document.getElementById("js-game-text").style.display = "flex";
        document.getElementById("js-game-text-result").style.display = "none";
    }, 800);
});


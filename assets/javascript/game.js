var game = {
    wins: 0,
    loses: 0,
    score: 0,
    gnum: 0,
    gameset: true,
    ruby: 0,
    diamond: 0,
    topaz: 0,
    emerald: 0,
};

function gamenum(){
    game.gnum = Math.floor(Math.random()*120)+19;
    $("#number").html(game.gnum);
}
gamenum();

for(let i = 1; i <= 4; ++i){
    $("#c" + i).on("click", function(){
        if(game.gameset){
            game.ruby = Math.floor(Math.random()*12)+1;
            game.diamond = Math.floor(Math.random()*12)+1;
            game.topaz = Math.floor(Math.random()*12)+1;
            game.ruby = Math.floor(Math.random()*12)+1;
            game.gameset = false;
        }

        if(i == 1){
            game.score += game.ruby;
            $("#snum").text(game.score);
        }else if(i == 2){
            game.score += game.diamond;
            $("#snum").text(game.score);
        }else if(i == 3){
            game.score += game.topaz;
            $("#snum").text(game.score);
        }else if(i == 4){
            game.score += game.emerald;
            $("#snum").text(game.score);
        }

        console.log("Ruby: " + game.ruby);
        console.log("Diamond: " + game.diamond);
        console.log("Topaz: " + game.topaz);
        console.log("Emerald: " + game.emerald);

        if(game.score == game.gnum){
            gamenum();
            game.gameset = true;
            game.score = 0;
            $("#snum").text(game.score);
            $("#result").text("You Won!!");
            $("#loses").text("Loses: " + game.loses);
        }else if(game.score > game.gnum){
            gamenum();
            game.gameset = true;
            game.score = 0;
            $("#snum").text(game.score);
            $("#result").text("You Lost!!");
            $("#wins").text("Wins: " + game.wins);
        }

    });
}


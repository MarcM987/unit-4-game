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

$("#ruby").on("click", function(){
    if(game.gameset){
        game.ruby = Math.floor(Math.random()*12)+1;
    }
    $("#snum").text(game.ruby);
});


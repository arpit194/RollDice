$( document ).ready(function() {

    let canRoll = true;

    function roll() {
        canRoll = false;
        $("#roll").css('background-color', "#777");
        $("#roll").html("Rolling");
        let waited = 10;
        let interval = 100;
        var intervalID = setInterval(() => {
            document.getElementById("dice").innerHTML = Math.floor(Math.random() * 6) + 1;
            interval += 10;
            waited--;
            if(waited <= 0) {
                clearInterval(intervalID);
                canRoll = true;
                $("#roll").css('background-color', "#DCE1DE");
                $("#roll").html("Roll Dice");
                console.log("test");
            }
        }, interval);
    }

    document.getElementById("roll").addEventListener("click", () => {
        if(canRoll){
            roll();
        }
    });
});
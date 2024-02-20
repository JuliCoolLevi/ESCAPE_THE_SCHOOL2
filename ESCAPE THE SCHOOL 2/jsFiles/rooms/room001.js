var money = 0;
var pizza = 0;
var tasks = 0;
var phone = 0;
var aviQuiz = 0;
//spawn room
function room001() {
    document.getElementById("background").src = "CSSfiles/images/starting-room.png";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("Arthur").style.display = "block";
    document.getElementById("arrow1").style.display = "block";
    document.getElementById("arrow2").style.display = "none";
    document.getElementById("arrow2").style.display = "none";
    document.getElementById("arrow6").style.display = "none";
    document.getElementById("arrow22").style.display = "none";
    if (phone == 0) { //if phone is not collected then shows, if it is 1 then do not show
        document.getElementById("juliusPhone").style.display = "block";
    } else if (phone = 1) {
        document.getElementById("juliusPhone").style.display = "none";
    }

}

function phoneItem() { //if phone gets collected then inventory item shows
    document.getElementById("juliusPhone").style.display = "none";
    phone = phone + 1;
    document.getElementById("phoneItem").style.display = "block";
}

function hallway1() { //ALL ASSETS ARE MADE AND CODED TO SHOW OR NOT SHOW WHEN HEADED TO A DIFFERENT ROOM
    document.getElementById("background").src = "CSSfiles/images/Hallway1.png";
    document.getElementById("arrow1").style.display = "none";
    document.getElementById("arrow2").style.display = "block";
    document.getElementById("arrow3").style.display = "none";
    document.getElementById("arrow4").style.display = "none";
    document.getElementById("arrow5").style.display = "none";
    document.getElementById("arrow6").style.display = "block";
    document.getElementById("arrow7").style.display = "none";
    document.getElementById("money1").style.display = "none";
    document.getElementById("arrow8").style.display = "none";
    document.getElementById("arrow22").style.display = "block";
    document.getElementById("juliusPhone").style.display = "none";
    document.getElementById("Arthur").style.display = "block";
    document.getElementById("arthurStairs").style.display = "none";

}

function washroomHallway() {
    document.getElementById("background").src = "CSSfiles/images/staffWashroom.png";
    document.getElementById("arrow2").style.display = "none";
    document.getElementById("arrow3").style.display = "block";
    document.getElementById("arrow4").style.display = "none";
    document.getElementById("arrow5").style.display = "block";
    document.getElementById("arrow6").style.display = "none";
    document.getElementById("arrow22").style.display = "none";
    document.getElementById("arthurWashroom").style.display = "none";
    document.getElementById("Arthur").style.display = "block";
    document.getElementById("steve").style.display = "none";
}

function washroom() {
    document.getElementById("background").src = "CSSfiles/images/boysWashroom.gif";
    document.getElementById("arrow3").style.display = "none";
    document.getElementById("arrow4").style.display = "block";
    document.getElementById("arrow5").style.display = "none";
    document.getElementById("Arthur").style.display = "none";
    document.getElementById("arthurWashroom").style.display = "block";
    document.getElementById("steve").style.display = "block";
}

function steveLines() {
    alert("Someone told me there is a creeper nearby. So I am here to take care of it!");
}

function stairs() {
    document.getElementById("background").src = "CSSfiles/images/stairway.png"
    document.getElementById("arrow2").style.display = "none";
    document.getElementById("arrow6").style.display = "none";
    document.getElementById("arrow7").style.display = "block";
    document.getElementById("arrow8").style.display = "block";
    document.getElementById("arrow9").style.display = "none";
    document.getElementById("arrow10").style.display = "none";
    document.getElementById("arrow22").style.display = "none";
    document.getElementById("Arthur").style.display = "none";
    document.getElementById("arthurStairs").style.display = "block";
    if (money == 0) {
        document.getElementById("money1").style.display = "block";
    } else if (money = 5) {
        document.getElementById("money1").style.display = "none";
    }
}

function money2() {
    document.getElementById("money1").style.display = "none";
    money = money + 5;
    document.getElementById("moneyItem").style.display = "block";
}

function pizza1() {
    if (money == 0) {
        alert("(...You do not have enough money...)");
    }
    if (money == 5 && pizza == 0) {
        money = money - 1;
        pizza++;
        alert("MAMA MIA! PLEASURE DOING BUSINESS WITH YOU!");
        document.getElementById("moneyItem").style.display = "none";
        document.getElementById("pizza_box").style.display = "block";
    }
    if (money == 4 && pizza == 2); {
        alert("(One per customer)");
    }
}

function officeHallway() {
    document.getElementById("background").src = "CSSfiles/images/office-room.gif";
    document.getElementById("money1").style.display = "none";
    document.getElementById("arrow8").style.display = "none";
    document.getElementById("arrow7").style.display = "none";
    document.getElementById("arrow9").style.display = "block";
    document.getElementById("arrow10").style.display = "block";
    document.getElementById("arrow11").style.display = "none";
    document.getElementById("arrow12").style.display = "none";
    document.getElementById("arrow16").style.display = "none";
    document.getElementById("Arthur").style.display = "block";
    document.getElementById("arthurStairs").style.display = "none";
}

function cafeteriaHallway() {
    document.getElementById("background").src = "CSSfiles/images/Hallway2.gif";
    document.getElementById("arrow9").style.display = "none";
    document.getElementById("arrow10").style.display = "none";
    document.getElementById("arrow11").style.display = "block";
    document.getElementById("arrow12").style.display = "block";
    document.getElementById("arrow13").style.display = "none";
    document.getElementById("arrow14").style.display = "none";
    document.getElementById("arrow16").style.display = "block";
    document.getElementById("arrow17").style.display = "none";
    document.getElementById("arrow18").style.display = "none";
    document.getElementById("arrow20").style.display = "none";
    document.getElementById("Avi").style.display = "none";
}

function cafeteriaRoom() {
    document.getElementById("background").src = "CSSfiles/images/cafeteriaRoom.png";
    document.getElementById("arrow9").style.display = "none";
    document.getElementById("arrow10").style.display = "none";
    document.getElementById("arrow11").style.display = "none";
    document.getElementById("arrow12").style.display = "none";
    document.getElementById("arrow13").style.display = "block";
    document.getElementById("arrow14").style.display = "block";
    document.getElementById("arrow15").style.display = "none";
    document.getElementById("cafeteriaCashier").style.display = "none";
    document.getElementById("arrow16").style.display = "none";
    document.getElementById("Avi").style.display = "block";
    document.getElementById("Jadin").style.display = "none";
}

function jadinLines() {
    alert("Hello good sir!");
}

function aviTask() {
    if (aviQuiz == 0) {
        alert("Can you get a perfect score on this quiz I created?");
        alert("I'll only help you escape if you answer perfectly.");
        var counter = 0;

        var question1 = prompt("What year did Avengers Endgame came out?");
        if (question1 != "2019") {
            alert("Incorrect.");
        } else {
            alert("Correct");
            counter++;
        }
        var question2 = prompt("How many hours are there in two days?");
        if (question2 != "48") {
            alert("Wrong");
        } else {
            alert("Correct again");
            counter++;
        }
        var question3 = prompt("Who painted the Mona Lisa?");
        if (question3 != "Da Vinci") {
            alert("Incorrect!");
        } else {
            alert("Good job!");
            counter++;
        }
        var question4 = prompt("How many years are there in a millennium?");
        if (question4 != "1000") {
            alert("Nope.");
        } else {
            alert("You got it!");
            counter++;
        }
        var question5 = prompt("Last question! Whats 9 + 10?");
        if (question5 != "19") {
            alert("You dumb.");
        } else {
            alert("Noice.");
            counter++;
        }
        if (counter < 5) {
            alert("I'll only help you if you get a perfect. Try again!");
        } else {
            alert("Your intellect is in tip-top shape! I can now help you escape");
            aviQuiz++;
            tasks = tasks + 1;
        }
    }
    if (aviQuiz == 1) {
        alert("Thanks for your help!");
    }
}

function cafeteriaReception() {
    document.getElementById("background").src = "CSSfiles/images/cafeteriaCashier.gif";
    document.getElementById("arrow13").style.display = "none";
    document.getElementById("arrow14").style.display = "none";
    document.getElementById("arrow15").style.display = "block";
    document.getElementById("cafeteriaCashier").style.display = "block";
    document.getElementById("Avi").style.display = "none";
    document.getElementById("Jadin").style.display = "block";
}

function courtyardHallway() {
    document.getElementById("background").src = "CSSfiles/images/courtyard-Hallway.png";
    document.getElementById("arrow16").style.display = "none";
    document.getElementById("arrow12").style.display = "none";
    document.getElementById("arrow11").style.display = "none";
    document.getElementById("arrow17").style.display = "block";
    document.getElementById("arrow18").style.display = "block";
    document.getElementById("arrow19").style.display = "none";
    document.getElementById("arrow20").style.display = "block";
    document.getElementById("arrow21").style.display = "none";
    document.getElementById("Pauly").style.display = "none";
    document.getElementById("Julius").style.display = "none";
    document.getElementById("securityGuard").style.display = "none";
    document.getElementById("arthurCourtyard").style.display = "none";
    document.getElementById("Arthur").style.display = "block";
    document.getElementById("upArrow_escape").style.display = "none";
}

function courtyard() {
    document.getElementById("background").src = "CSSfiles/images/Courtyard.png";
    document.getElementById("arrow17").style.display = "none";
    document.getElementById("arrow18").style.display = "none";
    document.getElementById("arrow19").style.display = "block";
    document.getElementById("arrow20").style.display = "none";
    document.getElementById("Pauly").style.display = "block";
    document.getElementById("Julius").style.display = "block";
    document.getElementById("arthurCourtyard").style.display = "block";
    document.getElementById("Arthur").style.display = "none";
}

function paulyTask() {
    if (money == 0 || money == 5) {
        alert("Oh you need help escaping? Me, Julius and Avi could help you.");
        alert("We will try to distract the guard if you do something for us.");
        alert("I'm feeling kinda hungry so can you please buy me a box of pizza?");
    } else if (pizza == 1) {
        document.getElementById("pizza_box").style.display = "none";
        alert("AYO THE PIZZAS HERE!");
        pizza = pizza + 1
        tasks = tasks + 1;
    } else if (tasks < 3 && pizza == 2) {
        alert("We can't distract the guard yet. (complete other tasks)");
    }
    if (tasks == 3) {
        alert("Thanks for the pizza. Don't worry about the security guard, we told him his PS5 broke!");
    }
}

function juliusTask() {
    if (phone == 0) {
        alert("Oh, you need help?");
        alert("If you find my phone, I will help you.");
        alert("My teacher forgot to give me my phone at the end of the day.");
        alert("It should be somewhere on the second floor.");
    } else if (phone == 1) {
        document.getElementById("phoneItem").style.display = "none";
        alert("Thanks man!");
        phone = phone + 1;
        tasks = tasks + 1;
    } else if (tasks < 3) {
        alert("We can't help you yet. (complete other tasks)");
    } else if (tasks == 3) {
        alert("Thanks for retreiving my phone. You should talk to Pauly about the guard!");
    }
}


function exitHallway() {
    document.getElementById("background").src = "CSSfiles/images/EXIT.png";
    document.getElementById("arrow17").style.display = "none";
    document.getElementById("arrow18").style.display = "none";
    document.getElementById("arrow20").style.display = "none";
    document.getElementById("arrow21").style.display = "block";
    document.getElementById("securityGuard").style.display = "block";
    if (tasks == 3) {
        document.getElementById("securityGuard").style.display = "none";
        document.getElementById("upArrow_escape").style.display = "block";
    }
}

function guardLine() {
    alert("I can't let you leave. (he's scary...)");
}

function escaped() {
    document.getElementById("background").src = "CSSfiles/images/escapeBackground.gif";
    document.getElementById("Arthur").style.display = "none";
    document.getElementById("arrow21").style.display = "none";
    document.getElementById("upArrow_escape").style.display = "none";
}





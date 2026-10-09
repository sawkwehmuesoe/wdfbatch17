$(document).ready(function(){

    // console.log("hi");

    // Theme Toggle for light mode and dark mode 

    $("#themetoggle").click(function(){
        $("body").toggleClass("dark-mode");
        localStorage.setItem("theme",$("body").hasClass("dark-mode") ? "dark" : "light");
    });

    // Load them from localStorage 

    if(localStorage.getItem("theme") === "dark"){
        $("body").addClass("dark-mode");
    }

    const quizs = [
        {
            question:"What do you use a phone for?",
            options:["Cooking","Sleeping","Calling","Driving"],
            answer:"Calling"
        },
        {
            question:"Which one is a smartphone brand?",
            options:["Apple","Banana","Tomato","Carrot"],
            answer:"Apple"
        },
        {
            question:"Which app lets you make video calls?",
            options:["Calculator","Camera","Phone","FaceTime"],
            answer:"FaceTime"
        }
    ];

    let currentidx = 0;
    let currentscore = 0;

    function showquestion(){
        const currentquiz = quizs[currentidx];
        console.log(currentquiz);

        $("#question").text(currentquiz.question);
        $(".options").empty();

        currentquiz.options.forEach(option=>{
            $(".options").append(`<button type="button" class="optionbtn">${option}</button>`);
        });

        $(".nextbtn").hide();

        
    }

    showquestion();

    $(".options").on("click",".optionbtn",function(e){
            // console.log(e.target);
            // console.log(this);
            // console.log(this.innerText);

            console.log($(this));

            const selected = $(this).text();
            // console.log(selected);
            const correct = quizs[currentidx].answer;

            if(selected === correct){
                // console.log("yes");
                $(this).addClass("correct");
                currentscore++;
            }else{
                // console.log("no");
                $(this).addClass("wrong");
                $(`.optionbtn:contains(${correct})`).addClass("correct")
            }

            $(".optionbtn").attr("disabled",true);
            $(".nextbtn").show();
    });


    $(".nextbtn").click(function(){
        currentidx++;

        if(currentidx < quizs.length){
            showquestion();
        }else{
            showresult();
        }

    });

    function showresult(){
        // console.log("result");
        $("#result").show();
        $("#quizcontainer").hide();
        $(".nextbtn").hide();
        $("#result").html(`<h3>Your Score: ${currentscore}/${quizs.length}</h3>
                <button type="button" id="restartbtn">Restart</button> `);
    }

    $("#result").on('click',"#restartbtn",function(){
        currentidx = 0;
        currentscore = 0;
        $("#result").hide();
        $("#quizcontainer").show();
        showquestion();

        // location.reload();
    })

});


// click()
// toggleClass()
// hasClass()
// addClass()
// text()
// append()
// $("").on(event,selector,callback)
// attr(attrubutename,value)
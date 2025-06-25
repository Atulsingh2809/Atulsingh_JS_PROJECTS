// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id === 'red')
//         {
//             body.style.backgroundColor = e.target.id;
//         }


// });

// });


// window.onload = function () {
//     // Get all color buttons
//     const redBtn = document.getElementById("red");
//     const yellowBtn = document.getElementById("yellow");
//     const greenBtn = document.getElementById("green");
//     const blueBtn = document.getElementById("blue");

//     // Set background color when each is clicked
//     redBtn.addEventListener("click", function () {
//         document.body.style.backgroundColor = "red";
//     });

//     yellowBtn.addEventListener("click", function () {
//         document.body.style.backgroundColor = "yellow";
//     });

//     greenBtn.addEventListener("click", function () {
//         document.body.style.backgroundColor = "green";
//     });

//     blueBtn.addEventListener("click", function () {
//         document.body.style.backgroundColor = "blue";
//     });
// };

window.onload = function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            document.body.style.backgroundColor = button.id;
        });
    });
};

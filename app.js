// Approach 1: Normal appraoch
var nav_anchor_tags = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < nav_anchor_tags.length; i++) {
  nav_anchor_tags[i].addEventListener("click", function (event) {
    event.preventDefault();
    // prevents the hyperlink to directly take the control to the destination.
    var target_id = this.innerText.trim().toLowerCase();
    var target = document.getElementById(target_id);
    var scroll_interval = setInterval(function () {
      var coordinates = target.getBoundingClientRect();
      if (coordinates.top <= 0) {
        clearInterval(scroll_interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 50);
  });
}

// Approach 2: Function scrollVertically is being passed some arguments.
//            This code represents an illustration to write the code more neatly.
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;

// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         //    interval = setInterval(scrollVertically, 20, targetSection);

//         interval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 20);
//     });
// }

// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }

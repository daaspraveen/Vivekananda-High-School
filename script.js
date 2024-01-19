function menucolor() {
    var File_location = window.location.pathname;

    const all_menu_link = document.querySelectorAll(".menu-li a");

    all_menu_link.forEach(function (menulink) {
        menulink.style.backgroundColor = "none";
    });

    all_menu_link.forEach(function (current_link) {
        // Add a leading '/' to current_link.href for comparison
        if (current_link.href.endsWith(File_location) || 
            (File_location === "/" && current_link.href.endsWith("/")) || (File_location === "" && current_link.href.endsWith("")) ) {
            current_link.style.backgroundColor = "black";
        }
    });
};



if (window.innerWidth <= 612) {
    /*==========  HAMBURGER ICON FOR - MOBILE SIZE =============  */
    var menubar_1 = document.getElementById("hamburger-icon");
    if (menubar_1) {
        menubar_1.addEventListener("click", function menutogs() {
            var menu_option = document.querySelector(".menuoptions");
            menu_option.style.display = menu_option.style.display === "block" ? "none" : "block";
        });
    }
}

if (window.location.pathname.split('/').pop() === 'index.html' || window.location.pathname.split('/').pop() === '') {
    // Handle mouseover and mouseout events to stop and start auto-sliding
    var slider_1 = document.querySelector('.sliding-images-box');
    if (slider_1) {
        /* ========= IMAGES SLIDING ==========*/
        var currentIndex_1 = 0;
        var intervalId_1; // Variable to store the interval ID
        var nextSlide_1 = function () {
            currentIndex_1 = (currentIndex_1 + 1) % 3;
            updateSlider_1();
        };
        var updateSlider_1 = function () {
            var translateValue = -currentIndex_1 * 100 + '%';
            slider_1.style.transform = 'translateX(' + translateValue + ')';
        };
        var startAutoSlide = function () {
            intervalId_1 = setInterval(nextSlide_1, 3000); // Change 3000 to the desired interval in milliseconds
        };
        var stopAutoSlide_1 = function () {
            if (intervalId_1) {
                clearInterval(intervalId_1);
            }
        };
        slider_1.addEventListener('mouseover', stopAutoSlide_1);
        slider_1.addEventListener('mouseout', startAutoSlide);
        // Start auto-sliding initially
        startAutoSlide();
        // Set click event listeners for left and right buttons
        var slideLeftBtn = document.querySelector('.left-slide-btn');
        if (slideLeftBtn) {
            slideLeftBtn.addEventListener('click', function () {
                currentIndex_1 = (currentIndex_1 - 1 + 3) % 3; // Ensure a positive index value
                updateSlider_1();
                stopAutoSlide_1(); // Stop auto-sliding on user interaction
            });
        }
        var slideRightBtn = document.querySelector('.right-slide-btn');
        if (slideRightBtn) {
            slideRightBtn.addEventListener('click', function () {
                currentIndex_1 = (currentIndex_1 + 1) % 3;
                updateSlider_1();
                stopAutoSlide_1(); // Stop auto-sliding on user interaction
            });
        }
        // === IMAGES SLIDING END ====
        //-----------------------------------------------------------
    }
}
//========== =====  HAMBURGER ICON END 
//-----------------------------------------------------------

console.log(window.innerWidth);

document.addEventListener('DOMContentLoaded', function() {
    menucolor();
})

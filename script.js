function menucolor(){
    var listItems = document.querySelectorAll('#navbar li');
    listItems.forEach(function (li) {
        // Check if li and anchor are not null or undefined
        if (li instanceof HTMLElement) {
            var anchor = li.querySelector('a');
            if (anchor) {
                var href = anchor.getAttribute('href');
                var fileName = href; // Extracting the file name from the href
                if (fileName === window.location.pathname.split('/').pop()) {
                    li.style.backgroundColor = 'black'; // Set the background color as needed
                    anchor.style.color = 'white';
                }
            }
        }
    });
}

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
else if (window.innerWidth >= 613) {
    /*==========   HAMBURGER ICON FOR - TABS AND DESKTOP SIZE  =============  */
    menucolor();
    console.log(window.innerWidth);
}
if (window.location.pathname.split('/').pop() === 'index.html') {
    // Handle mouseover and mouseout events to stop and start auto-sliding
    menucolor()
    
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


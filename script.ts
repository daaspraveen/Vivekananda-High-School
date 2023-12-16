if (window.innerWidth <= 612) {
    /*==========  HAMBURGER ICON FOR - MOBILE SIZE =============  */
    const menubar = document.getElementById("hamburger-icon") as HTMLElement;

    if (menubar) {
        menubar.addEventListener("click", function menutogs() {
            const menu_option = document.querySelector(".menuoptions") as HTMLElement;
            menu_option.style.display = menu_option.style.display === "block" ? "none" : "block";
        });
    }
}
else if (window.innerWidth >= 613) {
    /*==========   HAMBURGER ICON FOR - TABS AND DESKTOP SIZE  =============  */
    const listItems = document.querySelectorAll('#navbar li');

    listItems.forEach((li) => {
        // Check if li and anchor are not null or undefined
        if (li instanceof HTMLElement) {
            const anchor = li.querySelector('a') as HTMLAnchorElement | null;

            if (anchor) {
                const href = anchor.getAttribute('href');
                const fileName = href; // Extracting the file name from the href

                if (fileName === window.location.pathname.split('/').pop()) {
                    li.style.backgroundColor = 'black'; // Set the background color as needed
                    anchor.style.color = 'white';
                }
            }
        }
    });
}

if (window.location.pathname.split('/').pop() === 'index.html') {
    // Handle mouseover and mouseout events to stop and start auto-sliding
    const slider = document.querySelector('.sliding-images-box') as HTMLElement;

    if (slider) {
        /* ========= IMAGES SLIDING ==========*/
        let currentIndex = 0;
        let intervalId: number | undefined; // Variable to store the interval ID

        const nextSlide = function ():void {
            currentIndex = (currentIndex + 1) % 3;
            updateSlider();
        }

        const updateSlider = function ():void{
            const translateValue = -currentIndex * 100 + '%';
            slider.style.transform = 'translateX(' + translateValue + ')';
        }

        const startAutoSlide = function ():void {
            intervalId = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds
        }

        const stopAutoSlide = function ():void{
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
        slider.addEventListener('mouseover', stopAutoSlide);
        slider.addEventListener('mouseout', startAutoSlide);

        // Start auto-sliding initially
        startAutoSlide();

        // Set click event listeners for left and right buttons
        const slideLeftBtn = document.querySelector('.left-slide-btn') as HTMLElement | null;
        if (slideLeftBtn) {
            slideLeftBtn.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + 3) % 3; // Ensure a positive index value
                updateSlider();
                stopAutoSlide(); // Stop auto-sliding on user interaction
            });
        }

        const slideRightBtn = document.querySelector('.right-slide-btn') as HTMLElement | null;
        if (slideRightBtn) {
            slideRightBtn.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % 3;
                updateSlider();
                stopAutoSlide(); // Stop auto-sliding on user interaction
            });
        }
        // === IMAGES SLIDING END ====
        //-----------------------------------------------------------
    }
}
//========== =====  HAMBURGER ICON END 
//-----------------------------------------------------------
//
//
//
//

//Loading Animation
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.querySelector(".loading-screen");
    const loadingScreenShown = sessionStorage.getItem("loadingScreenShown");

    if (!loadingScreenShown) {
        function moveLoadingScreenUp() {
            loadingScreen.style.transform = "translateY(-100%)";
            sessionStorage.setItem("loadingScreenShown", "true");
        }
        setTimeout(moveLoadingScreenUp, 5000);
    } else {
        loadingScreen.style.display = "none";
    }
});



// Side Bar
var navLinks = document.getElementById("sidebar")
    function showMenu(){
        sidebar.style.right = "0"
        document.addEventListener('click', handleClickOutside, true);
    }
    function hideMenu(){
        sidebar.style.right = "-17rem"
        document.addEventListener('click', handleClickOutside, true);
    }
    function handleClickOutside(event) {
        if (!sidebar.contains(event.target) && event.target.tagName !== "BUTTON" && !event.target.classList.contains('material-symbols-rounded')) {
            hideMenu();
        }
    }

// Banner Scrollsnap
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const images = banner.querySelectorAll('img');
    const totalImages = images.length;
    let index = 0;

    setInterval(() => {
        index = (index + 1) % totalImages;
        banner.scrollTo({
            left: banner.clientWidth * index,
            behavior: 'smooth'
        });
    }, 5000); 
});


//Dark Mode 
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#toggleDark input');
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
    if (darkModeEnabled) {
        document.documentElement.classList.add('dark-theme');
        toggleSwitch.checked = true;
    }
    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.documentElement.classList.add('dark-theme');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark-theme');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});


// Product Quantity
document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');

    quantities.forEach(quantity => {
        const incrementButton = quantity.querySelector('.increment');
        const decrementButton = quantity.querySelector('.decrement');
        const quantityDisplay = quantity.querySelector('.quanti');

        incrementButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityDisplay.textContent, 10);
            quantityDisplay.textContent = currentQuantity + 1;
        });

        decrementButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityDisplay.textContent, 10);
            if (currentQuantity > 0) {
                quantityDisplay.textContent = currentQuantity - 1;
            }
        });
    });
});


// Terms and Conditions Popup
    var navLinks = document.getElementById("termsPopup")
    function ShowTerms(){
        termsPopup.style.bottom = "0"
        document.addEventListener('click', handleClickOutside, true);
    }
    function hideTerms(){
        termsPopup.style.bottom = "-1500px"
        document.addEventListener('click', handleClickOutside, true);
    }
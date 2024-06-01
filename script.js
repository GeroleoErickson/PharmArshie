
// Side Bar
var navLinks = document.getElementById("sidebar")
    function showMenu(){
        sidebar.style.right = "-0.1rem"
    }
    function hideMenu(){
        sidebar.style.right = "-17rem"
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


// 

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('#toggleDark input');

    // Retrieve dark mode preference from localStorage
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';

    // Apply dark theme class to body if dark mode is enabled
    if (darkModeEnabled) {
        document.documentElement.classList.add('dark-theme');
        toggleSwitch.checked = true;
    }

    // Add event listener for theme toggle
    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.documentElement.classList.add('dark-theme');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark-theme');
            localStorage.removeItem('dark-mode');
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
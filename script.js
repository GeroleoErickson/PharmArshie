

var navLinks = document.getElementById("sidebar")
    function showMenu(){
        sidebar.style.right = "-0.1rem"
    }
    function hideMenu(){
        sidebar.style.right = "-17rem"
    }




document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleDark').querySelector('input');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-theme');
        toggleSwitch.checked = true;
    }
    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.removeItem('dark-mode');
        }
    });
});




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
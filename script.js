// Add hover effect for the buttons
document.querySelectorAll('.demo-btn, .login-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Smooth scrolling for demo button
document.querySelector('.demo-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('why-us').scrollIntoView({
        behavior: 'smooth' // Smooth scroll
    });
});

// Smooth scrolling for About Us link
document.querySelector('a[href="#why-us"]').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('why-us').scrollIntoView({
        behavior: 'smooth' // Smooth scroll
    });
});

const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
    card.style.color = '#5a73d8'; // Change text color on hover
});

card.addEventListener('mouseleave', () => {
    card.style.color = '#ffffff'; // Reset text color when not hovered
});


document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

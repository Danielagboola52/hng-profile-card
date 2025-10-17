function updateTime() {
    
    const timeElement = document.getElementById('currentTime');
  
    const currentTimeMs = Date.now();
    
    timeElement.textContent = currentTimeMs.toLocaleString();
}

function initializeProfileCard() {
   
    updateTime();
    setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', initializeProfileCard);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

console.log('Profile Card loaded successfully! ✅');
console.log('Current time in milliseconds:', Date.now());
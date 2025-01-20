let slideIndex = 1;
let autoSlideInterval;

// Final stat values
const finalStats = {
    miles: 12000,
    days: 180,
    calls: 200
};

// Current stat values
let currentStats = {
    miles: 0,
    days: 0,
    calls: 0
};

// Number of slides
const totalSlides = document.querySelectorAll('.slide').length;

// Show slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" fade", "");
    }
    
    // Show current slide
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " fade";

    // Update stats based on current slide
    updateStats(slideIndex - 1, slides.length);
}

// Function to animate a single stat
function animateStat(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.floor(start + (end - start) * easeProgress);
        element.textContent = current.toLocaleString() + '+';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Function to update stats based on current slide
function updateStats(currentSlideIndex, totalSlides) {
    const progressRatio = (currentSlideIndex + 1) / totalSlides;
    
    // Calculate target values for this slide
    const targetStats = {
        miles: Math.floor(finalStats.miles * progressRatio),
        days: Math.floor(finalStats.days * progressRatio),
        calls: Math.floor(finalStats.calls * progressRatio)
    };
    
    // Animate each stat
    Object.keys(targetStats).forEach(stat => {
        const element = document.getElementById(stat);
        const start = currentStats[stat];
        const end = targetStats[stat];
        
        // Only animate if there's a change
        if (start !== end) {
            animateStat(element, start, end, 2000); // 2 second animation
            currentStats[stat] = end;
        }
    });
}

// Auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 7000); // Change image every 7 seconds
}

// Initial page load
window.onload = function() {
    // Hide stats initially
    document.querySelector('.stats-container').style.opacity = '0';
    
    // Show transition text
    setTimeout(() => {
        const overlay = document.querySelector('.transition-overlay');
        const text = document.querySelector('.transition-text');
        text.classList.add('fade-out');
        
        setTimeout(() => {
            overlay.classList.add('fade-out');
            
            // Show first slide and start slideshow
            showSlides(slideIndex);
            startAutoSlide();
            
            // Fade in stats container
            setTimeout(() => {
                document.querySelector('.stats-container').style.opacity = '1';
                document.querySelector('.page-container').style.opacity = '1';
            }, 1000);
        }, 2000);
    }, 2000);
};

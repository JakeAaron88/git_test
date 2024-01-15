// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElem = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: targetElem.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Fade-in elements on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Interactive tips section
const tips = document.querySelectorAll('.tip');

tips.forEach(tip => {
    tip.addEventListener('click', function() {
        const moreInfo = this.querySelector('.more-info');
        if(moreInfo.style.display === 'block') {
            moreInfo.style.display = 'none';
        } else {
            moreInfo.style.display = 'block';
        }
    });
});


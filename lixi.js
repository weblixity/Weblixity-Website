            const languageToggle = document.getElementById('languageToggle');
            const htmlElement = document.documentElement;

            document.addEventListener("DOMContentLoaded", function() {
                var savedLang = localStorage.getItem('weblixityLang');
                if (savedLang === 'ar') {
                    setArabic();
                } else if (savedLang === 'en') {
                    setEnglish();
                } else {
                    var userLang = navigator.language || navigator.userLanguage;
                    userLang = userLang.toLowerCase();
                    if (userLang.startsWith('ar')) {
                        setArabic();
                    } else {
                        setEnglish();
                    }
                }
            });

            languageToggle.addEventListener('click', function() {
                if (htmlElement.classList.contains('arabic')) {
                    setEnglish();
                    localStorage.setItem('weblixityLang', 'en');
                } else {
                    setArabic();
                    localStorage.setItem('weblixityLang', 'ar');
                }
            });

            function setArabic() {
                document.querySelectorAll('.en-text').forEach(e => e.classList.add('hidden'));
                document.querySelectorAll('.ar-text').forEach(e => e.classList.remove('hidden'));
                htmlElement.setAttribute('dir', 'rtl');
                htmlElement.setAttribute('lang', 'ar');
                htmlElement.classList.add('arabic');
            }

            function setEnglish() {
                document.querySelectorAll('.en-text').forEach(e => e.classList.remove('hidden'));
                document.querySelectorAll('.ar-text').forEach(e => e.classList.add('hidden'));
                htmlElement.setAttribute('dir', 'ltr');
                htmlElement.setAttribute('lang', 'en');
                htmlElement.classList.remove('arabic');
            }


            const mobileNavButton = document.getElementById('mobileNavButton');
            const mobileNavOverlay = document.getElementById('mobileNavOverlay');
            const closeMobileNavBtn = document.getElementById('closeMobileNav');

            function toggleMobileNav() {
                mobileNavOverlay.classList.toggle('hidden');
                document.body.classList.toggle('overflow-hidden');
            }

            if (mobileNavButton && mobileNavOverlay && closeMobileNavBtn) {
                mobileNavButton.addEventListener('click', toggleMobileNav);
                closeMobileNavBtn.addEventListener('click', toggleMobileNav);

                mobileNavOverlay.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', toggleMobileNav);
                });
            }
        
        function checkVisibility() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
        
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateDots();
            });
        });
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            updateDots();
        }, 3000);
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                    
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileNavButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                    }
                }
            });
        });


        document.addEventListener("DOMContentLoaded", function() {
            if (!document.querySelector('.floating-blobs')) {
                const blobs = document.createElement('div');
                blobs.className = 'floating-blobs pointer-events-none fixed inset-0 z-0';
                blobs.innerHTML = `
                    <div class="blob blob1"></div>
                    <div class="blob blob2"></div>
                    <div class="blob blob3"></div>
                    <div class="blob blob4"></div>
                `;
                document.body.prepend(blobs);
            }
        });

        



        








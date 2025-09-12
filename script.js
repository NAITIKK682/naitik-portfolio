// Initialize AOS for animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });



const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Button icon change
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ ";
  } else {
    toggleBtn.textContent = "🌙 ";
  }
});



    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4a6fa5'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.1,
                    sync: false
                }
            },
            lineLinked: {
                enable: true,
                distance: 150,
                color: '#4a6fa5',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_link: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                },
                bounce: {
                    distance: 200
                }
            }
        },
        retina_detect: true
    });

    // Initialize Typed.js for typing animation
    const typed = new Typed('.typed-text', {
        strings: ['AI/ML Enthusiast | Future Full Stack Developer | Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Form submission with EmailJS
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Send email via EmailJS
            emailjs.send('service_id', 'template_id', {
                'from_name': name,
                'from_email': email,
                'message': message
            })
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('FAILED...', error);
            });
        });
    }

    // Add dark mode toggle functionality
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
            document.documentElement.style.setProperty('--text-color', '#e0e0e0');
            document.documentElement.style.setProperty('--primary-color', '#4a6fa5');
            document.documentElement.style.setProperty('--secondary-color', '#3a5a85');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--primary-color', '#4a6fa5');
            document.documentElement.style.setProperty('--secondary-color', '#3a5a85');
        }
    });

    // Expand achievement cards
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.achievement-card');
            const expanded = card.querySelector('.expanded-content');
            
            if (expanded) {
                expanded.style.display = expanded.style.display === 'block' ? 'none' : 'block';
            } else {
                const content = this.parentNode.querySelector('p');
                const expandedContent = document.createElement('div');
                expandedContent.className = 'expanded-content';
                expandedContent.innerHTML = `
                    <p>${content.textContent}</p>
                    <p>Additional details about this achievement would go here...</p>
                    <p>This section expands to show more information about the accomplishment.</p>
                `;
                expandedContent.style.display = 'none';
                this.parentNode.insertBefore(expandedContent, this.nextSibling);
                this.textContent = 'Collapse';
            }
        });
    });

    // Add hover effects to skill bars
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.transition = 'width 1s ease-in-out';
    });

    // Add click effect to project buttons
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add hover effects to social icons
    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(74, 111, 165, 0.3)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
            ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(74, 111, 165, 0.6)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 1s ease-out';
            this.appendChild(ripple);
            
            setTimeout(() => {
                this.removeChild(ripple);
            }, 1000);
        });
    });

    // Add keyframes for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
// Функция для проверки email при отправке формы
function checkEmail() {
    const emailField = document.getElementById('emailField');
    const email = emailField.value.trim();
    
    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        alert('Пожалуйста, введите email адрес');
        emailField.focus();
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email адрес');
        emailField.focus();
        return false;
    }
    
    alert(`Спасибо за подписку! Мы отправили подтверждение на: ${email}`);
    emailField.value = ''; 
    return true;
}

// Функция для обработки нажатия Enter в поле email
function setupEmailEnter() {
    const emailField = document.getElementById('emailField');
    
    if (emailField) {
        emailField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkEmail();
            }
        });
    }
}

// Плавная прокрутка для якорных ссылок
function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Добавление класса active при скролле для навигации
function setupScrollSpy() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Обработчик гет ин точ
function setupGetInTouchButton() {
    const getInTouchBtn = document.querySelector('.hero-about .btn');
    
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function() {
            // Прокрутка к секции контактов
            const contactsSection = document.querySelector('footer');
            if (contactsSection) {
                contactsSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Анимация появления элементов при скролле
function setupScrollAnimation() {
    const elements = document.querySelectorAll('.block, .info, .text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}


function setupLogoClick() {
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // клткабельный лого
        logo.style.cursor = 'pointer';
    }
}

// Функция для обработки отправки всех форм
function setupFormHandlers() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь можно добавить логику отправки формы
            console.log('Форма отправлена');
        });
    });
}

// Основная функция инициализации
function init() {
    setupEmailEnter();
    setupSmoothScroll();
    setupScrollSpy();
    setupGetInTouchButton();
    setupScrollAnimation();
    setupLogoClick();
    setupFormHandlers();
    
    console.log('Game Website initialized successfully!');
}



document.addEventListener('DOMContentLoaded', init);

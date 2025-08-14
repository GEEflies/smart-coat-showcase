// Static HTML/CSS/JavaScript version of the Powder Coating Website
// Maintaining exact same functionality as React/TypeScript version

// Global State
let scrollY = 0;
let activeStep = 1;
let selectedCategory = 'all';
let selectedPortfolioItem = null;
let isFormSubmitting = false;
let isFormSubmitted = false;
let isProcessVisible = false;

// Process Steps Data
const processSteps = [
    {
        id: 1,
        title: 'Predúprava povrchu',
        description: 'Odmasťovanie, čistenie a chemická úprava povrchu pre dokonalú adhéziu náteru.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/ocistenie-kovoveho-zabradlia-pred-lakovanim-nitra.jpg',
        duration: '30-60 min',
        temperature: '40-60°C',
        details: ['Alkalické čistenie', 'Odstraňovanie hrdze', 'Fosfátovanie', 'Konečné oplachovanie'],
        icon: `<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-2.26-.9 0-1.29.81-1.29 1.71 0 .7.44 1.35 1.02 1.35.75 0 1.33-.7 1.33-1.44 0-.79-.68-1.44-1.52-1.44A2.84 2.84 0 0 0 5 12.02C5 14.5 6.22 16.3 7 16.3z"/>
              <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6"/>
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>`
    },
    {
        id: 2,
        title: 'Aplikácia prášku',
        description: 'Elektrostatické nanášanie práškového laku v kontrolovanom prostredí pre rovnomerné pokrytie.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/aplikacia-modreho-praskoveho-nateru-na-plech-nitra.jpg',
        duration: '15-30 min',
        temperature: '20-25°C',
        details: ['Elektrostatický náboj', 'Rovnomerné nanášanie', 'Kontrola hrúbky', 'Kvalitná kontrola'],
        icon: `<path d="M3 3h18v18H3zM9 9h6v6H9z"/>`
    },
    {
        id: 3,
        title: 'Vypaľovanie',
        description: 'Tepelné spracovanie v priemyselnej peci pre vytvorenie tvrdého a odolného povrchu.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/priemyselna-susiaca-pec-so-zelennym-ramom-nitra.jpg',
        duration: '20-40 min',
        temperature: '160-200°C',
        details: ['Presná teplota', 'Kontrolovaný čas', 'Rovnomerné vypaľovanie', 'Chladenie'],
        icon: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`
    },
    {
        id: 4,
        title: 'Kontrola kvality',
        description: 'Finálna kontrola kvality, testovanie adhézie a príprava na expedíciu.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/zabradlie-po-praskovom-lakovani-nitra.jpg',
        duration: '10-15 min',
        temperature: 'Izbová',
        details: ['Vizuálna kontrola', 'Test adhézie', 'Meranie hrúbky', 'Finálne balenie'],
        icon: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>`
    }
];

// Portfolio Items Data
const portfolioItems = [
    {
        id: 1,
        category: 'industrial',
        title: 'Lakovacia linka - Kompletná renovácia',
        description: 'Komplexná obnova priemyselnej lakovacej linky so zeleným rámom a modernými technológiami.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovacia-linka-s-dopravnikovym-systemom-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/oplachova-kabina-s-technologickymi-nadobami-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 5.0,
        tags: ['Priemyselné zariadenia', 'Zelená farba', 'Modernizácia']
    },
    {
        id: 2,
        category: 'architectural',
        title: 'Kovové zábradlie - Biela elegancia',
        description: 'Moderné kovové zábradlie s dokonalou bielou povrchovou úpravou pre exteriérové použitie.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/cierne-praskove-lakovanie-zabradlia-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/priprava-zabradlia-na-praskove-lakovanie-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 4.9,
        tags: ['Zábradlie', 'Biela farba', 'Exteriér']
    },
    {
        id: 3,
        category: 'furniture',
        title: 'Kovový stôl - Sivá sofistikovanosť',
        description: 'Elegantný kovový stôl s kvalitnou sivou povrchovou úpravou pre moderné interiéry.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/kovova-konstrukcia-so-sivym-praskovym-naterom-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/praskove-lakovanie-pracovneho-stola-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 4.8,
        tags: ['Nábytok', 'Sivá farba', 'Interiér']
    },
    {
        id: 4,
        category: 'specialized',
        title: 'Oceľový rebrík - Čierna odolnosť',
        description: 'Priemyselný oceľový rebrík s vysoce odolnou čiernou povrchovou úpravou.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/praskove-lakovanie-oceloveho-rebrika-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/zavesny-system-na-praskove-lakovanie-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 4.9,
        tags: ['Rebrík', 'Čierna farba', 'Odolnosť']
    },
    {
        id: 5,
        category: 'colorful',
        title: 'Červené komponenty - Výrazný dizajn',
        description: 'Špecializované kovové komponenty v živej červenej farbe pre výrazný vizuálny dopad.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/praskovo-lakovany-ocelovy-ram-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/cierne-praskove-lakovanie-kovovej-konstrukcie-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 5.0,
        tags: ['Červená farba', 'Komponenty', 'Dizajn']
    },
    {
        id: 6,
        category: 'industrial',
        title: 'Priemyselná pec - Zelená modernizácia',
        description: 'Kompletná renovácia priemyselnej pece s moderným zeleným dizajnom a funkcionalitou.',
        image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/vysoka-priemyselna-vypalovacia-pec-s-kolajnicou-nitra.jpg',
        beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/priemyselna-susiaca-pec-so-zelennym-ramom-nitra.jpg',
        location: 'Nitra',
        date: '2024',
        rating: 4.9,
        tags: ['Pec', 'Zelená farba', 'Modernizácia']
    }
];

const categories = ['all', 'industrial', 'architectural', 'furniture', 'colorful', 'specialized'];
const categoryLabels = {
    all: 'Všetko',
    industrial: 'Priemyselné',
    architectural: 'Architektonické',
    furniture: 'Nábytok',
    colorful: 'Farebné',
    specialized: 'Špecializované'
};

// Initialize the application
function init() {
    // Setup scroll handler for parallax effects
    setupScrollHandler();
    
    // Setup process section functionality
    setupProcessSection();
    
    // Setup portfolio section functionality
    setupPortfolioSection();
    
    // Setup contact form functionality
    setupContactForm();
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
    
    // Initial render
    updateProcessStep(1);
    renderPortfolioItems();
}

// Scroll Handler for Parallax Effects
function setupScrollHandler() {
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // Update parallax grid
        const parallaxGrid = document.querySelector('.parallax-grid');
        if (parallaxGrid) {
            parallaxGrid.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    });
}

// Process Section Setup
function setupProcessSection() {
    // Setup step click handlers
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.addEventListener('click', () => {
            updateProcessStep(index + 1);
        });
    });
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (activeStep > 1) {
                updateProcessStep(activeStep - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (activeStep < processSteps.length) {
                updateProcessStep(activeStep + 1);
            }
        });
    }
    
    // Setup intersection observer for progress line
    const processSection = document.querySelector('.process-section');
    if (processSection) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isProcessVisible = true;
                    updateProgressLine();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(processSection);
    }
}

// Update Process Step
function updateProcessStep(stepId) {
    activeStep = stepId;
    const step = processSteps[stepId - 1];
    
    // Update step circles
    const stepCircles = document.querySelectorAll('.step-circle');
    const stepTitles = document.querySelectorAll('.step-title');
    const processStepElements = document.querySelectorAll('.process-step');
    
    stepCircles.forEach((circle, index) => {
        circle.classList.toggle('active', index + 1 <= stepId);
    });
    
    stepTitles.forEach((title, index) => {
        const stepElement = processStepElements[index];
        stepElement.classList.toggle('active', index + 1 === stepId);
    });
    
    // Update step details
    const processImage = document.getElementById('process-image');
    const processDuration = document.getElementById('process-duration');
    const processTemperature = document.getElementById('process-temperature');
    const processOperations = document.getElementById('process-operations');
    const processIcon = document.getElementById('process-icon');
    const currentStepSpan = document.getElementById('current-step');
    const processTitle = document.getElementById('process-title');
    const processDesc = document.getElementById('process-desc');
    
    if (processImage) processImage.src = step.image;
    if (processImage) processImage.alt = step.title;
    if (processDuration) processDuration.textContent = step.duration;
    if (processTemperature) processTemperature.textContent = step.temperature;
    if (currentStepSpan) currentStepSpan.textContent = stepId;
    if (processTitle) processTitle.textContent = step.title;
    if (processDesc) processDesc.textContent = step.description;
    
    if (processIcon) {
        processIcon.innerHTML = step.icon;
    }
    
    if (processOperations) {
        processOperations.innerHTML = step.details.map(detail => `
            <div class="detail-item">
                <div class="detail-dot"></div>
                <span>${detail}</span>
            </div>
        `).join('');
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    
    if (prevBtn) {
        prevBtn.style.display = stepId > 1 ? 'inline-flex' : 'none';
    }
    
    if (nextBtn) {
        nextBtn.style.display = stepId < processSteps.length ? 'inline-flex' : 'none';
    }
    
    updateProgressLine();
}

// Update Progress Line
function updateProgressLine() {
    const progressLine = document.querySelector('.progress-line');
    if (progressLine && isProcessVisible) {
        const percentage = (activeStep / processSteps.length) * 100;
        progressLine.style.width = `${percentage}%`;
    }
}

// Portfolio Section Setup
function setupPortfolioSection() {
    // Setup category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            setSelectedCategory(category);
        });
    });
}

// Set Selected Category
function setSelectedCategory(category) {
    selectedCategory = category;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });
    
    // Re-render portfolio items
    renderPortfolioItems();
}

// Render Portfolio Items
function renderPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    const filteredItems = selectedCategory === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === selectedCategory);
    
    portfolioGrid.innerHTML = filteredItems.map((item, index) => `
        <div class="portfolio-item card-modern animate-fade-in-up" 
             style="animation-delay: ${index * 0.1}s" 
             data-item-id="${item.id}">
            <div class="portfolio-image-container">
                <img src="${item.image}" alt="${item.title}" class="portfolio-image" />
                <div class="portfolio-overlay">
                    <button class="btn btn-outline glass">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </button>
                    <button class="btn btn-outline glass">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </button>
                </div>
                
                <div class="portfolio-category-badge">${categoryLabels[item.category]}</div>
                
                <div class="portfolio-rating">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
                    </svg>
                    <span>${item.rating}</span>
                </div>
            </div>

            <div class="portfolio-content">
                <div>
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-description">${item.description}</p>
                </div>

                <div class="portfolio-meta">
                    <div class="portfolio-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${item.location}</span>
                    </div>
                    <div class="portfolio-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${item.date}</span>
                    </div>
                </div>

                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>

                ${selectedPortfolioItem === item.id ? `
                    <div class="portfolio-expanded animate-fade-in-up">
                        <div class="before-after-grid">
                            <div class="before-after-item">
                                <h4>Pred úpravou</h4>
                                <img src="${item.beforeImage}" alt="Pred úpravou" />
                            </div>
                            <div class="before-after-item">
                                <h4>Po úprave</h4>
                                <img src="${item.image}" alt="Po úprave" />
                            </div>
                        </div>
                        
                        <button class="btn btn-modern btn-full">
                            Viac detailov
                            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12,5 19,12 12,19"/>
                            </svg>
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Add click handlers to portfolio items
    const portfolioItemElements = portfolioGrid.querySelectorAll('.portfolio-item');
    portfolioItemElements.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = parseInt(item.getAttribute('data-item-id'));
            selectedPortfolioItem = selectedPortfolioItem === itemId ? null : itemId;
            renderPortfolioItems();
        });
    });
}

// Contact Form Setup
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (isFormSubmitting) return;
        
        isFormSubmitting = true;
        
        // Update button state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        contactForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
        
        isFormSubmitting = false;
        isFormSubmitted = true;
    });
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
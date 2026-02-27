const NAV_ITEMS = [
  { label: 'Home', path: 'index.html' },
  { label: 'About', path: 'pages/about.html' },
  { label: 'Menu', path: 'pages/menu.html' },
  { label: 'Offers', path: 'pages/offers.html' },
  { label: 'Music', path: 'pages/music.html' },
  { label: 'Cake', path: 'pages/cake.html' },
  { label: 'Services', path: 'pages/services.html' },
  { label: 'Contact', path: 'pages/contact.html' },
];

function getRelativePath(targetPath) {
    const isRoot = !window.location.pathname.includes('/pages/');
    
    if (isRoot) {
        return targetPath;
    } else {
        if (targetPath === 'index.html') return '../index.html';
        return targetPath.replace('pages/', '');
    }
}

function renderHeader() {
    const headerContainer = document.getElementById('header-placeholder');
    if (!headerContainer) return;

    const isRoot = !window.location.pathname.includes('/pages/');
    const logoSrc = "https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/8625b4e735541303cb02ff7964ca459fc8c207eb/3%20-%20Copy.jpg";
    const currentPage = document.body.getAttribute('data-page') || '';

    let navLinksHtml = NAV_ITEMS.map(item => {
        const isActive = currentPage.toLowerCase() === item.label.toLowerCase();
        const href = getRelativePath(item.path);
        const activeClass = isActive ? 'text-primary' : 'text-gray-300';
        return `<a href="${href}" class="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${activeClass}">${item.label}</a>`;
    }).join('');

    let mobileNavLinksHtml = NAV_ITEMS.map(item => {
        const isActive = currentPage.toLowerCase() === item.label.toLowerCase();
        const href = getRelativePath(item.path);
        const activeClass = isActive ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5';
        return `<a href="${href}" class="block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wider ${activeClass}">${item.label}</a>`;
    }).join('');

    headerContainer.innerHTML = `
      <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent border-transparent">
        <div class="w-full px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <a href="${getRelativePath('index.html')}" class="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <img src="${logoSrc}" alt="Phoenix Logo" class="h-12 w-12 object-cover rounded-full border-2 border-pink-200/20 group-hover:border-primary/50 transition-colors" />
              <div class="flex flex-col">
                  <span class="font-serif text-2xl font-bold text-white tracking-wide leading-none group-hover:text-primary transition-colors">PHOENIX</span>
                  <span class="text-[9px] text-gray-400 font-medium tracking-[0.3em] uppercase leading-none mt-1">Restaurant & Bar</span>
              </div>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 items-center">
              ${navLinksHtml}
              <div class="flex flex-col items-end">
                <a href="tel:+211910249910" class="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-bold text-xs shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 border border-primary/50 flex items-center gap-2">
                    <span class="material-icons text-sm">call</span>
                    Book a Table
                </a>
                <a href="tel:+211910249910" class="text-white/80 hover:text-primary text-[10px] font-bold mt-0.5 tracking-wider transition-colors">
                    +211 910 249 910
                </a>
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-btn" class="text-gray-300 hover:text-primary p-2 focus:outline-none">
                <span class="material-icons text-2xl">menu</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-background-base border-t border-white/10 px-4 pt-2 pb-6 space-y-2 absolute w-full shadow-2xl">
            ${mobileNavLinksHtml}
             <div class="pt-4">
                  <a href="tel:+211910249910" class="block w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg transition-all">
                    Book a Table (+211 910 249 910)
                  </a>
              </div>
        </div>
      </nav>
    `;

    // Add interactivity
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('.material-icons');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-background-base/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
            navbar.classList.remove('bg-transparent', 'border-transparent');
        } else {
             if (mobileMenu.classList.contains('hidden')) {
                navbar.classList.remove('bg-background-base/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
                navbar.classList.add('bg-transparent', 'border-transparent');
             }
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.textContent = 'close';
            navbar.classList.add('bg-background-base/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
            navbar.classList.remove('bg-transparent', 'border-transparent');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.textContent = 'menu';
            if (window.scrollY <= 20) {
                 navbar.classList.remove('bg-background-base/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5');
                 navbar.classList.add('bg-transparent', 'border-transparent');
            }
        }
    });
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="bg-black text-white pt-20 pb-8 border-t border-white/10">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <div class="flex items-center gap-2 mb-6">
                        <span class="material-icons text-primary text-3xl">local_fire_department</span>
                        <span class="font-bold text-xl tracking-tight uppercase">PHOENIX RESTAURANT & BAR</span>
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                        Experience the finest dining and nightlife in Juba. Join us for unforgettable evenings and delicious flavors.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/share/17hnBW48vM/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                             </svg>
                        </a>
                         <a href="https://www.instagram.com/phoenixjuba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                             </svg>
                        </a>
                        <a href="https://www.tiktok.com/@phoenixrestaurantandbar?_r=1&_t=ZS-941Ss7b1xLe" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-400 group">
                             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                             </svg>
                        </a>
                    </div>
                </div>

                <div>
                     <h3 class="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
                     <ul class="space-y-3 text-sm text-gray-400">
                         <li><a href="${getRelativePath('pages/menu.html')}" class="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Our Menu</a></li>
                         <li><a href="${getRelativePath('pages/contact.html')}" class="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Book a Table</a></li>
                         <li><a href="${getRelativePath('pages/music.html')}" class="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Events Gallery</a></li>
                         <li><a href="${getRelativePath('pages/about.html')}" class="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">About Us</a></li>
                     </ul>
                </div>

                <div>
                     <h3 class="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h3>
                     <ul class="space-y-4 text-sm text-gray-400">
                         <li class="flex items-start gap-3">
                             <span class="material-icons text-primary text-sm mt-0.5">location_on</span>
                             <span>Behind Phenicia, Ministries Road,<br/>Juba, South Sudan</span>
                         </li>
                         <li class="flex items-center gap-3">
                             <span class="material-icons text-primary text-sm">phone</span>
                             <a href="tel:+211910249910" class="hover:text-white transition-colors">+211 910 249 910</a>
                         </li>
                         <li class="flex items-center gap-3">
                             <span class="material-icons text-primary text-sm">email</span>
                             <a href="mailto:info@phoenixrestaurantbar.com" class="hover:text-white transition-colors">info@phoenixrestaurantbar.com</a>
                         </li>
                     </ul>
                </div>
                 <div>
                    <h3 class="font-bold text-sm uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">Opening Hours</h3>
                    <ul class="space-y-3 text-gray-400 text-sm">
                        <li class="flex justify-between border-b border-white/5 pb-2">
                            <span>Mon - Sun</span>
                            <span class="text-white font-medium">24 Hours</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2026 Phoenix Bar & Restaurant. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
      
      <!-- Floating Buttons -->
      <div class="fixed bottom-6 left-6 z-50">
          <a href="https://wa.me/211910249910" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300" title="Chat on WhatsApp">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-8 h-8"/>
          </a>
      </div>

      <div id="scroll-to-top" class="fixed bottom-6 right-6 z-50 transition-all duration-500 opacity-0 translate-y-10 pointer-events-none">
          <button class="flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-110" title="Scroll to top">
              <span class="material-icons">arrow_upward</span>
          </button>
      </div>
    `;

    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const scrollBtn = scrollTopBtn.querySelector('button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            scrollTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            scrollTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            scrollTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initMenuAccordions() {
    const accordions = document.querySelectorAll('.menu-accordion-toggle');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const icon = this.querySelector('.material-icons');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('opacity-100', 'pb-8');
                content.classList.add('opacity-0');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.remove('opacity-0');
                content.classList.add('opacity-100', 'pb-8');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initMenuAccordions();

    // Handle Reservation Form
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const message = `*New Table Reservation*\n\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nGuests: ${data.guests}\nRequests: ${data.requests}`;
            const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Handle Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
         contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const message = `*New Website Message*\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`;
            const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Handle Cake Order Form
    const cakeOrderForm = document.getElementById('cake-order-form');
    if (cakeOrderForm) {
        cakeOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const message = `*New Cake Order*\n\nName: ${data.name}\nPhone: ${data.phone}\nCake Type: ${data.cakeType}\nDate Needed: ${data.date}\nMessage on Cake: ${data.message}`;
            const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Hash Scroll Handling
    if (window.location.hash) {
        setTimeout(() => {
            const element = document.getElementById(window.location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});
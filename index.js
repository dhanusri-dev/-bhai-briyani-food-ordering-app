// ==========================================
// BHAI BIRYANI - SINGLE PAGE APPLICATION CODE
// ==========================================

// --- 1. STATE MANAGEMENT ---
// This holds the dynamic data of our app (current view, cart items, etc.)
const state = {
    view: 'home',       // Current page: 'home', 'menu', 'booking'
    cart: [],           // List of items added to cart
    modalItem: null,    // The item currently shown in the popup modal
    searchQuery: ''     // Search text (optional for now)
};

// --- 2. APP DATA ---
// All the information (Biryanis, Reviews, etc.) is stored here.
// You can easily add more items by copying the format.
const data = {
    biryanis: [
        { id: 1, name: "Hyderabadi Chicken Dum", price: 350, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80", desc: "Aromatic basmati rice cooked with tender chicken and authentic Hyderabadi spices." },
        { id: 2, name: "Royal Mutton Biryani", price: 450, img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=80", desc: "Succulent mutton pieces marinated overnight and slow-cooked to perfection." },
        { id: 3, name: "Prawns Biryani", price: 420, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80", desc: "Fresh prawns cooked with spicy masala and saffron rice." },
        { id: 4, name: "Paneer Tikka Biryani", price: 290, img: "https://imgs.search.brave.com/L34lCv2ndmRzOEJbtgE9Z5zzKs2axH9diDvV2gij6mE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZWxpY2lvdXMt/bWFyaW5hdGVkLXBh/bmVlci1iaXJ5YW5p/LXdpdGgtc21va3kt/dGFuZG9vcmktZmxh/dm9yXzE2Nzg1Ny03/NDM4NS5qcGc_c2Vt/dD1haXNfaW5jb21p/bmcmdz03NDAmcT04/MA", desc: "Grilled paneer cubes layered with fragrant rice and veggies." },
        { id: 5, name: "Egg Dum Biryani", price: 250, img: "https://imgs.search.brave.com/BJ1x-oc9h5K2-9DnI1vuPn8Hw8wtBXnlrKlbzbSJLaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJhYmhhdGtoYWJh/ci5jb20vX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vd3BtZWRp/YS5wcmFiaGF0a2hh/YmFyLmNvbS91cGxv/YWRzLzIwMjYvMDIv/RGhhYmEtU3R5bGUt/RWdnLUJpcnlhbmkt/UmVjaXBlLUluLUhp/bmRpLmpwZyZ3PTM4/NDAmcT03NQ", desc: "Classic egg biryani with rich gravy and roasted eggs." },
        { id: 6, name: "Special Mandhi", price: 550, img: "https://imgs.search.brave.com/TMKPMx4IWinJU6FKQli-VQMvzCL4Ie0pOBMRsf0yGPg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lZ2ct/YmlyeWFuaS1rZXJh/bGEtc3R5bGUtYmly/aXlhbmktbWFkZS11/c2luZy1qZWVyYS1y/aWNlLXNwaWNlcy1h/cnJhbmdlZC1lYXJ0/aGVuLXdhcmUtcmFp/dGhhLWxlbW9uLXBp/Y2tsZS1hcy1zaWRl/LTIxNzIxODU0Ny5q/cGc", desc: "Traditional Arabian rice dish served with slow-cooked meat." },
        { id: 7, name: "Kolkata Chicken Biryani", price: 320, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80", desc: "Flavorful rice with potato and soft chicken, a Kolkata classic." },
        { id: 8, name: "Malabar Fish Biryani", price: 400, img: "https://imgs.search.brave.com/KMdTFtjhb09cHywC1JpAJ3T0m0qc309pwMhchkFiCSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbWFyaWFz/bWVudS5jb20vd3At/Y29udGVudC91cGxv/YWRzL0Zpc2gtQmly/aXlhbmkucG5nP2Zp/dD02NTAsODI4JnNz/bD0x", desc: "Short grain rice cooked with seer fish and kerala spices." },
        { id: 9, name: "Keema Biryani", price: 380, img: "https://imgs.search.brave.com/QQDTfvsAcLz1hG9QsDXU3Ez1WCJwQqSI5WUSZ4MOkV0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9rZWVtYS1r/aGVlbWEtYmlyeWFu/aS1mcmFncmFudC1z/cGljeS0yNjBudy0x/MjY3NTYxMTgwLmpw/Zw", desc: "Minced meat cooked with aromatic spices and basmati rice." },
        { id: 10, name: "Vegetable Supreme", price: 240, img: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80", desc: "Loaded with fresh garden vegetables and exotic spices." },
        { id: 11, name: "Tangdi Kabab", price: 280, img: "https://imgs.search.brave.com/dKbEVlAWrwLDaqskmpu2OAk23TjRpZNjgYbDgeE9df8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jaGlj/a2VuLXRhbmdkaS1r/YWJhYi1kZWxpY2lv/dXMtbWVsdC1tb3V0/aC1hcHBldGl6ZXIt/cHJlcGFyZWQtc29m/dC1tb2lzdC1tYXJp/bmF0ZWQtYXJvbWF0/aWMtaW5kaWFuLXNw/aWNlcy1zZWxlY3Rp/dmUtMjI1OTI4MjU0/LmpwZw", desc: "Spiced grilled chicken drumsticks, a perfect starter." },
        { id: 12, name: "Butter Chicken", price: 340, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80", desc: "Creamy tomato curry with tender chicken pieces." }
    ],
    reviews: [
        { user: "Rahul K.", text: "Best Biryani in town! The spices are authentic.", rating: 5 },
        { user: "Sarah M.", text: "Loved the Mandhi. Great service!", rating: 4 },
        { user: "Ahmed", text: "Truly royal taste. Will visit again.", rating: 5 },
        { user: "Priya", text: "The mutton was so tender. Highly recommended.", rating: 5 },
        { user: "Arjun S.", text: "Fast delivery and amazing packaging.", rating: 5 },
        { user: "Fatima", text: "Authentic Hyderabadi flavor!", rating: 4 }
    ]
};

// --- 3. HELPER FUNCTIONS ---

// Update the state and refresh the UI automatically
const setState = (newState) => {
    Object.assign(state, newState);
    renderApp(); // This is the magic line that redraws the screen!
};

// Add an item to the cart array
const addToCart = (item) => {
    state.cart.push(item);
    setState({}); // Trigger update
    toggleCart(true); // Open cart drawer
};

// Helper to create HTML elements easily in JS
// Usage: el('div', 'class-name', 'Start Text', { id: 'myID' })
const el = (tag, cls, text = '', props = {}) => {
    const element = document.createElement(tag);
    if (cls) element.className = cls;
    if (text) element.textContent = text;
    Object.entries(props).forEach(([k, v]) => {
        if (k.startsWith('on')) element.addEventListener(k.substring(2).toLowerCase(), v);
        else element.setAttribute(k, v);
    });
    return element;
};

// --- 4. COMPONENTS (Building Blocks of the UI) ---

// Navigation Bar
const Navbar = () => {
    const nav = el('nav', 'navbar');

    // Logo (Clicking goes to Home)
    const brand = el('div', 'nav-brand', 'BHAI BIRYANI', { onclick: () => setState({ view: 'home' }) });

    // Menu Links
    const ul = el('ul', 'nav-menu');
    ['Home', 'Menu', 'Book a Table', 'Outlet'].forEach(item => {
        const li = el('li', '');
        const link = el('a', `nav-link ${state.view === item.toLowerCase() ? 'active' : ''}`, item, {
            onclick: () => setState({ view: item === 'Home' ? 'home' : item === 'Menu' ? 'menu' : 'booking' })
        });
        li.appendChild(link);
        ul.appendChild(li);
    });

    // Right Side Actions (Search + Cart)
    const actions = el('div', 'nav-actions');
    const search = el('input', 'search-bar', '', { placeholder: 'Search...', type: 'text' });

    const cartBtn = el('div', 'cart-btn', '', { onclick: () => toggleCart(true) });
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="cart-badge">${state.cart.length}</span>`;

    actions.append(search, cartBtn);
    nav.append(brand, ul, actions);
    return nav;
};

// Hero Section (Top Banner)
const Hero = () => {
    const section = el('section', 'hero-split');

    const textDiv = el('div', 'hero-text');
    textDiv.append(
        el('h1', '', 'Royal Biryani Bliss'),
        el('p', '', 'Experience the authentic taste of Hyderabad. Our biryani is made with secret royal spices, aged basmati rice, and pure ghee. A culinary journey that tells a story of tradition.'),
        el('button', 'btn-gold', 'ORDER NOW', { onclick: () => setState({ view: 'menu' }) })
    );

    const imgDiv = el('div', 'hero-img');
    // Using your custom image here
    imgDiv.appendChild(el('img', '', '', { src: 'https://imgs.search.brave.com/CKj5DQRaFgoa2HCXYNIyC4dH5cvz-ecSedRFoO6PDYM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDAv/NzAzLzk0OS9zbWFs/bC9haS1nZW5lcmF0/ZWQtcm95YWwtZmVh/c3QtbWFzdGVyLXRo/ZS1hcnQtb2YtY2hp/Y2tlbi1iaXJ5YW5p/LWF0LWhvbWUtZ2Vu/ZXJhdGl2ZS1haS1w/aG90by5qcGc' }));

    section.append(textDiv, imgDiv);
    return section;
};

// Features Section (Why Choose Us)
const Features = () => {
    const section = el('section', 'features-section');
    section.innerHTML = `<h2 class="section-title">Why Choose Bhai Biryani?</h2>`;

    const grid = el('div', 'features-grid');
    const features = [
        { icon: 'fa-fire', title: 'Authentic Taste', desc: 'Cooked with secret spices from royal kitchens.' },
        { icon: 'fa-box-open', title: 'Premium Packaging', desc: 'Spill-proof, heat-retaining boxes for fresh delivery.' },
        { icon: 'fa-truck', title: 'Lightning Fast', desc: 'Hot biryani delivered to your doorstep in 30 mins.' },
        { icon: 'fa-seedling', title: 'Fresh Ingredients', desc: 'Farm-fresh meat and premium aged basmati rice.' }
    ];

    features.forEach(f => {
        const card = el('div', 'feature-card');
        card.innerHTML = `
            <i class="fas ${f.icon} feature-icon"></i>
            <h3>${f.title}</h3>
            <p style="color:#ccc;">${f.desc}</p>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
};

// Menu Grid (List of Biryanis)
const MenuGrid = () => {
    const section = el('section', 'menu-section');
    section.appendChild(el('h2', 'section-title', 'Our Signature Biryanis'));

    const grid = el('div', 'menu-grid');
    data.biryanis.forEach(item => {
        // Clicking a card opens the detailed modal
        const card = el('div', 'menu-card', '', { onclick: () => openModal(item) });
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-info">
                <h3 class="menu-title">${item.name}</h3>
                <span class="menu-price">₹${item.price}</span>
            </div>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
};

// Gallery Section (Visual Grid)
const Gallery = () => {
    const section = el('section', 'gallery-section');
    section.innerHTML = `<h2 class="section-title">Our Culinary Art</h2>`;

    const grid = el('div', 'gallery-grid');
    const images = [
        './images/img1.png', // Plating
        './images/img2.png', // Spices
        './images/img3.png', // Kitchen
        './images/img4.png'  // Feast
    ];

    images.forEach(src => {
        const img = el('img', 'gallery-img', '', { src });
        grid.appendChild(img);
    });

    section.appendChild(grid);
    return section;
};

// FAQ Section (Accordions)
const FAQ = () => {
    const section = el('section', 'faq-section');
    section.innerHTML = `<h2 class="section-title">Frequently Asked Questions</h2>`;

    const faqs = [
        { q: "Is the meat Halal?", a: "Yes, we use 100% certified Halal meat for all our preparations." },
        { q: "Do you offer bulk orders?", a: "Absolutely! For party orders over 20 guests, please use the 'Book a Table' or Contact form for special rates." },
        { q: "What is your delivery radius?", a: "We deliver across the city within a 10km radius from our main outlet. Orders above ₹1000 get free delivery." },
        { q: "Do you have vegan options?", a: "Yes, our Vegetable Supreme Biryani and several starters are 100% vegetarian. We can also customize dishes to be vegan on request." },
        { q: "How can I track my order?", a: "Use the 'Track Order' link in the navigation menu or check your confirmation SMS for a live tracking link." },
        { q: "What are your opening hours?", a: "We are open from 11:00 AM to 11:00 PM every day of the week." }
    ];

    faqs.forEach(item => {
        const div = el('div', 'faq-item');
        const question = el('div', 'faq-question', item.q);
        question.innerHTML += `<i class="fas fa-chevron-down faq-toggle"></i>`;

        const answer = el('div', 'faq-answer', item.a);

        // Toggle answer visibility on click
        question.onclick = () => {
            div.classList.toggle('active');
        };

        div.append(question, answer);
        section.appendChild(div);
    });

    return section;
};

// Reviews Section (Marquee Scroll)
const Reviews = () => {
    const section = el('section', 'reviews-section');
    section.innerHTML = `<h2 class="section-title" style="margin-bottom:1rem;">What Customers Say</h2>`;

    const wrapper = el('div', 'marquee-container');
    // Duplicate reviews to create seamless infinite scroll effect
    [...data.reviews, ...data.reviews, ...data.reviews].forEach(r => {
        const card = el('div', 'review-card');
        card.innerHTML = `
            <div class="stars">${'★'.repeat(r.rating)}</div>
            <p>"${r.text}"</p>
            <small style="display:block; margin-top:0.5rem; color:#aaa;">- ${r.user}</small>
        `;
        wrapper.appendChild(card);
    });

    section.appendChild(wrapper);
    return section;
};

// App Download Banner
const AppBanner = () => {
    const section = el('section', 'app-banner');
    section.innerHTML = `
        <div class="app-text">
            <h2>Download the App & Get 20% OFF</h2>
            <p>Order faster, track live, and get exclusive rewards.</p>
        </div>
        <div class="app-buttons">
            <a href="#" class="app-btn"><i class="fab fa-apple"></i> App Store</a>
            <a href="#" class="app-btn"><i class="fab fa-google-play"></i> Google Play</a>
        </div>
    `;
    return section;
};

// Booking Form Section
const BookingForm = () => {
    const section = el('section', 'booking-section');
    section.innerHTML = `<h2 class="section-title">Book A Table</h2>`;

    const form = el('form', 'booking-form', '', { onsubmit: (e) => { e.preventDefault(); alert('Table Booked Successfully!'); } });
    form.innerHTML = `
        <div class="form-group"><input type="text" placeholder="Name" required></div>
        <div class="form-group"><input type="tel" placeholder="Phone Number" required></div>
        <div class="form-group"><input type="number" placeholder="Number of Guests" min="1" required></div>
        <div class="form-group"><input type="datetime-local" required></div>
        <button type="submit" class="btn-gold">CONFIRM BOOKING</button>
    `;

    section.appendChild(form);
    return section;
};

// Modal Component (Popup for details)
const Modal = () => {
    if (!state.modalItem) return el('div', 'hidden');

    const overlay = el('div', 'modal-overlay active', '', {
        onclick: (e) => { if (e.target === overlay) closeModal(); }
    });

    const content = el('div', 'modal-content');
    content.innerHTML = `
        <span class="close-modal">×</span>
        <img src="${state.modalItem.img}" class="modal-img">
        <div class="modal-details">
            <h2>${state.modalItem.name}</h2>
            <p style="color:#ccc; margin-bottom:1rem;">${state.modalItem.desc}</p>
            <h3 style="color:var(--accent-gold); margin-bottom:2rem;">₹${state.modalItem.price}</h3>
            <button class="btn-gold">ADD TO CART</button>
        </div>
    `;

    content.querySelector('.close-modal').onclick = closeModal;
    content.querySelector('.btn-gold').onclick = () => { addToCart(state.modalItem); closeModal(); };

    overlay.appendChild(content);
    return overlay;
};

// Cart Drawer Component (Slide-out cart)
const CartDrawer = () => {
    const drawer = el('div', 'cart-drawer', '', { id: 'cartDrawer' });
    const total = state.cart.reduce((sum, item) => sum + item.price, 0);

    drawer.innerHTML = `
        <div class="cart-header">
            <h2>Your Cart</h2>
            <span style="cursor:pointer; font-size:1.5rem;" onclick="toggleCart(false)">×</span>
        </div>
        <div class="cart-items">
            ${state.cart.map(item => `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>₹${item.price}</span>
                </div>
            `).join('') || '<p style="color:#666; text-align:center;">Cart is empty</p>'}
        </div>
        <div class="cart-total">
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; font-weight:bold;">
                <span>Total:</span>
                <span>₹${total}</span>
            </div>
            <button class="btn-gold" style="width:100%" onclick="alert('Checkout')">CHECKOUT</button>
        </div>
    `;
    return drawer;
};

// --- LOGIC HELPERS ---
const openModal = (item) => { state.modalItem = item; renderApp(); };
const closeModal = () => { state.modalItem = null; renderApp(); };
const toggleCart = (open) => {
    const drawer = document.getElementById('cartDrawer');
    if (open) drawer.classList.add('open');
    else drawer.classList.remove('open');
};

// --- 5. MAIN RENDER FUNCTION ---
// This function clears the screen and redraws everything based on the current state (view).
const renderApp = () => {
    const app = document.getElementById('app');
    app.innerHTML = '';

    // Always show Navbar, Cart, and Modal (if active)
    app.appendChild(Navbar());
    app.appendChild(CartDrawer());
    app.appendChild(Modal());

    // Switch Content Based on View
    if (state.view === 'home') {
        app.appendChild(Hero());
        app.appendChild(Features());
        app.appendChild(MenuGrid());
        app.appendChild(Gallery());
        app.appendChild(Reviews());
        app.appendChild(FAQ());
        app.appendChild(AppBanner());
    } else if (state.view === 'menu') {
        app.appendChild(MenuGrid());
    } else if (state.view === 'booking') {
        app.appendChild(BookingForm());
    }
};

// Start the App when the page loads
document.addEventListener('DOMContentLoaded', renderApp);

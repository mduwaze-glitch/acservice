import Image from "next/image";
'use client';
import React, { useState } from 'react';
// Interfaces for our dynamic state
interface ServiceItem {
  id: string;
  category: string;
  name: string;
  rating: string;
  reviews: string;
  price: string;
  features: string[];
  badge?: string;
}
interface FAQItem {
  question: string;
  answer: string;
}
export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingService, setBookingService] = useState('AC Jet Wash Service');
  const [bookingArea, setBookingArea] = useState('Jayanagar');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const phoneNo = "8778184915";
  const formattedPhone = "87781 84915";
  // Categories list
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'service', label: 'Jet Washing & Service' },
    { id: 'repair', label: 'AC Repair & Fix' },
    { id: 'gas', label: 'Gas Refilling' },
    { id: 'install', label: 'Installation / Fitting' },
  ];
  // Service details list (pricing & features)
  const services: ServiceItem[] = [
    {
      id: 's1',
      category: 'service',
      name: 'Split AC Jet Wash Service',
      rating: '4.8',
      reviews: '3.4K reviews',
      price: '₹599',
      badge: 'Best Seller',
      features: [
        'Deep cleaning of filter, indoor coils and outdoor unit',
        'Jet pump wash for high-pressure cleaning',
        'Drain pipe flushing to prevent future leaks',
        'Final check of cooling efficiency and gas levels'
      ]
    },
    {
      id: 's2',
      category: 'service',
      name: 'Window AC Service',
      rating: '4.7',
      reviews: '1.2K reviews',
      price: '₹399',
      features: [
        'Filter cleaning and chemical spray cleaning',
        'Coil washing & drain tray flush',
        'Operational efficiency check'
      ]
    },
    {
      id: 's3',
      category: 'repair',
      name: 'AC Repair & Diagnostic Visit',
      rating: '4.9',
      reviews: '2.8K reviews',
      price: '₹249',
      badge: 'Fast Dispatch',
      features: [
        'Complete inspection of compressor, motor and electrics',
        'Identification of water leakage or noise issues',
        'Detailed quotation before commencing repair work'
      ]
    },
    {
      id: 's4',
      category: 'gas',
      name: 'AC Gas Refill (Complete Charge)',
      rating: '4.8',
      reviews: '4.1K reviews',
      price: '₹1,999',
      badge: '30-Day Leak Warranty',
      features: [
        'Pre-repair nitrogen testing for gas leak identification',
        'Leakage repair & vacuuming of pipeline',
        'Precision eco-friendly refrigerant gas filling (R32 / R410a / R22)',
        'Post-fill temperature performance validation'
      ]
    },
    {
      id: 's5',
      category: 'install',
      name: 'Split AC Installation',
      rating: '4.9',
      reviews: '2.5K reviews',
      price: '₹1,199',
      features: [
        'Accurate indoor and outdoor bracket mounting',
        'Copper pipe connection and gas check',
        'Drain pipe placement and initial layout config'
      ]
    },
    {
      id: 's6',
      category: 'install',
      name: 'AC Uninstallation & Dismantling',
      rating: '4.7',
      reviews: '980 reviews',
      price: '₹499',
      features: [
        'Safe refrigerant gas backup into the compressor',
        'Dismantling of indoor and outdoor chassis',
        'Packaging copper wires and plumbing safe'
      ]
    }
  ];
  // Brand logos list
  const brands = [
    'Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Lloyd', 
    'Hitachi', 'Panasonic', 'O General', 'Godrej', 'Haier', 'Carrier'
  ];
  // Bangalore local coverage zones
  const areas = [
    'Jayanagar', 'JP Nagar', 'Koramangala', 'BTM Layout', 'HSR Layout', 
    'Basavanagudi', 'Banashankari', 'Indiranagar', 'Whitefield', 'Bellandur'
  ];
  // FAQ items GMB targeted
  const faqs: FAQItem[] = [
    {
      question: "What are your working hours in Jayanagar, Bangalore?",
      answer: "Ahmed AC Services is open 7 days a week, from 9:00 AM to 7:00 PM, including public holidays. We provide same-day AC repair and installation visits."
    },
    {
      question: "How fast can you repair an AC in South Bangalore?",
      answer: "For locations in South Bangalore like Jayanagar, JP Nagar, and Koramangala, we typically send an expert technician to your doorstep within 90 minutes of receiving your phone call."
    },
    {
      question: "Which AC brands do you service?",
      answer: "We offer professional maintenance, installation, and gas charging for all major AC brands, including Voltas, LG, Samsung, Daikin, Blue Star, Lloyd, Panasonic, and Hitachi."
    },
    {
      question: "What is your pricing model for AC service?",
      answer: "We practice simple and transparent pricing. There are no hidden fees. General service starts from ₹399, and a comprehensive diagnosis visit is just ₹249 (which is waived off if you proceed with our repair service)."
    },
    {
      question: "Do you provide a warranty on AC repair work?",
      answer: "Yes! All AC repairs, installations, and gas refills conducted by Ahmed AC Services come with an official 30-day service warranty."
    }
  ];
  // Handle Form Submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    
    // Construct WhatsApp message URL
    const message = `Hello Ahmed AC Services, I want to book a service.%0A*Name:* ${bookingName}%0A*Phone:* ${bookingPhone}%0A*Service Required:* ${bookingService}%0A*Location:* ${bookingArea}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${phoneNo}&text=${message}`;
    
    setFormSubmitted(true);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll down to service section to guide user
    const element = document.getElementById('services-grid-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  // Filter services based on activeCategory tab
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
    <>
      {/* Navbar */}
      <nav className="navbar" id="nav-header">
        <div className="container">
          <div className="brand">
            <span className="brand-title">Ahmed AC Services<span className="brand-dot">.</span></span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Our Services</a>
            <a href="#brands" className="nav-link">Brands We Fix</a>
            <a href="#why-choose-us" className="nav-link">Why Us</a>
            <a href="#faqs" className="nav-link">FAQs</a>
          </div>
          <div className="nav-cta">
            <a href={`tel:${phoneNo}`} className="btn btn-outline" id="header-call-btn">
              📞 Call: {formattedPhone}
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-text">
              <div className="hero-location">
                📍 Headquartered in Jayanagar, Bangalore
              </div>
              <h1>Professional AC Repair, Service & Fitting in Bangalore</h1>
              <p className="hero-subtitle">
                Urban Company-quality AC services at your doorstep. Certified local experts for all split & window AC problems. Same-day service with a 30-day warranty.
              </p>
              
              <div className="hero-cta-group">
                <a href={`tel:${phoneNo}`} className="btn btn-primary" id="hero-btn-call">
                  📞 Call Now: {formattedPhone}
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?phone=91${phoneNo}&text=Hello Ahmed AC Services, I need assistance with my Air Conditioner in Bangalore.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 WhatsApp Booking
                </a>
              </div>
              {/* UC Category Grid */}
              <div className="category-grid">
                <div className="category-card" onClick={() => handleCategoryClick('service')}>
                  <div className="category-icon">💧</div>
                  <span className="category-title">Jet Cleaning</span>
                </div>
                <div className="category-card" onClick={() => handleCategoryClick('repair')}>
                  <div className="category-icon">🛠️</div>
                  <span className="category-title">AC Repair</span>
                </div>
                <div className="category-card" onClick={() => handleCategoryClick('gas')}>
                  <div className="category-icon">💨</div>
                  <span className="category-title">Gas Refill</span>
                </div>
                <div className="category-card" onClick={() => handleCategoryClick('install')}>
                  <div className="category-icon">⚙️</div>
                  <span className="category-title">Installation</span>
                </div>
              </div>
            </div>
            {/* Quick GMB Booking Form */}
            <div>
              <div className="booking-card">
                <h3 className="booking-title">Book Doorstep AC Service</h3>
                <p className="booking-subtitle">Quick Response - Service starts within 90 minutes</p>
                {formSubmitted ? (
                  <div className="text-center" style={{ padding: '20px 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✅</div>
                    <h4 style={{ marginBottom: '8px' }}>Booking Initiated!</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      We are opening WhatsApp to instantly coordinate your appointment with Ahmed AC Services.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="btn btn-outline" 
                      style={{ marginTop: '16px' }}
                    >
                      Book Another Service
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-name">Your Name</label>
                      <input 
                        type="text" 
                        id="client-name"
                        className="form-control" 
                        placeholder="e.g. Rahul Kumar" 
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="client-phone"
                        className="form-control" 
                        placeholder="e.g. 9876543210" 
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="service-type">Select Service Needed</label>
                      <select 
                        id="service-type"
                        className="form-control"
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                      >
                        <option value="AC Jet Wash Service">AC Jet Wash Service (₹599)</option>
                        <option value="Window AC Service">Window AC Service (₹399)</option>
                        <option value="AC Complete Diagnostic">AC Complete Diagnostic (₹249)</option>
                        <option value="AC Gas Charging/Refill">AC Gas Charging/Refill (₹1,999)</option>
                        <option value="AC Installation">AC Installation (₹1,199)</option>
                        <option value="AC Uninstallation">AC Uninstallation (₹499)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="area-locality">Select Your Locality</label>
                      <select 
                        id="area-locality"
                        className="form-control"
                        value={bookingArea}
                        onChange={(e) => setBookingArea(e.target.value)}
                      >
                        {areas.map((a, i) => (
                          <option key={i} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      Send Booking via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Listing Section */}
      <section className="section-padding services-section" id="services">
        <div className="container">
          <h2 className="text-center" id="services-grid-anchor">Browse AC Services & Rates</h2>
          <p className="text-lead text-center">
            Simple, honest pricing for home AC servicing. Select a category below to filter our pricing.
          </p>
          <div className="services-layout">
            {/* Sidebar Tabs */}
            <div className="services-sidebar">
              <h4 className="sidebar-title">Categories</h4>
              <ul className="sidebar-list">
                {categories.map((c) => (
                  <li key={c.id}>
                    <button 
                      onClick={() => setActiveCategory(c.id)}
                      className={`sidebar-item ${activeCategory === c.id ? 'active' : ''}`}
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Service Cards */}
            <div className="services-content">
              {filteredServices.map((service) => (
                <div key={service.id} className="service-card" id={`service-item-${service.id}`}>
                  <div className="service-info">
                    {service.badge && <span className="service-badge">{service.badge}</span>}
                    <h3>{service.name}</h3>
                    <div className="service-rating">
                      <span className="rating-star">★</span> 
                      <strong>{service.rating}</strong> 
                      <span>({service.reviews})</span>
                    </div>
                    <div className="service-price">
                      Starts at {service.price}
                    </div>
                    <ul className="service-bullets">
                      {service.features.map((feat, index) => (
                        <li key={index}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-action">
                    <div className="service-img-placeholder">
                      Certified Expert
                    </div>
                    <a href={`tel:${phoneNo}`} className="btn btn-primary" style={{ width: '100%' }}>
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
      </section>
      {/* Why Choose Us */}
      <section className="section-padding" id="why-choose-us">
        <div className="container">
          <h2 className="text-center">Why Bangaloreans Choose Ahmed AC Services</h2>
          <p className="text-lead text-center">
            Designed for transparent, reliable doorstep AC repairs without the hassle of middlemen.
          </p>
          <div className="props-grid">
            <div className="prop-card">
              <div className="prop-icon">⏰</div>
              <h4 className="prop-title">90 Mins Response</h4>
              <p className="prop-desc">We dispatch local Jayanagar technicians quickly to your home within 90 minutes.</p>
            </div>
            <div className="prop-card">
              <div className="prop-icon">💼</div>
              <h4 className="prop-title">Certified Experts</h4>
              <p className="prop-desc">Experienced professionals skilled in all split and window AC models.</p>
            </div>
            <div className="prop-card">
              <div className="prop-icon">🛡️</div>
              <h4 className="prop-title">30-Day Warranty</h4>
              <p className="prop-desc">Peace of mind with an absolute 30-day warranty on all AC operations.</p>
            </div>
            <div className="prop-card">
              <div className="prop-icon">🏷️</div>
              <h4 className="prop-title">Transparent Rates</h4>
              <p className="prop-desc">Fixed rates are verified on the phone before arriving. No surprise charges.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Brands Serviced */}
      <section className="section-padding section-secondary" id="brands">
        <div className="container">
          <h2 className="text-center">Air Conditioner Brands We Service</h2>
          <p className="text-lead text-center">
            Specialized servicing, general repair, and fitting parts for all leading brands.
          </p>
          <div className="brands-grid">
            {brands.map((brand, i) => (
              <div key={i} className="brand-card">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Local Coverage Areas */}
      <section className="section-padding" id="coverage">
        <div className="container">
          <h2 className="text-center">AC Service Coverage Areas in Bangalore</h2>
          <p className="text-lead text-center">
            Located in Jayanagar, we serve core South and East Bangalore neighborhoods.
          </p>
          <div className="areas-grid">
            {areas.map((area, i) => (
              <div key={i} className={`area-pill ${area === 'Jayanagar' ? 'active' : ''}`}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section Accordion */}
      <section className="section-padding section-secondary" id="faqs">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <p className="text-lead text-center">Got questions about your AC? We have answers.</p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                id={`faq-item-${index}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* GMB Ranking / Contact Banner */}
      <section className="container">
        <div className="gmb-banner">
          <div className="gmb-layout">
            <div>
              <h2 className="gmb-title">Ranked ⭐ 4.9 on Google Maps</h2>
              <p className="gmb-desc">
                Serving Jayanagar residential houses, offices, and apartments with clean, reliable cooling solutions. Call us directly for priority booking.
              </p>
              <div className="gmb-badge-list">
                <div className="gmb-badge">
                  <span>⏱️ 9 AM - 7 PM Daily</span>
                </div>
                <div className="gmb-badge">
                  <span>🗓️ Available All Week</span>
                </div>
                <div className="gmb-badge">
                  <span>📞 Direct Phone Line</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href={`tel:${phoneNo}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>
                📞 Call {formattedPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer" id="footer-section">
        <div className="container">
          <div className="footer-layout">
            <div className="footer-brand">
              <div className="footer-brand-title">Ahmed AC Services</div>
              <p>Your local AC repair, cleaning, and installation experts in Bangalore. Serving households for over 5 years with honest cooling solutions.</p>
              <p>📍 Jayanagar 4th Block, Bengaluru, 560011</p>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-list">
                <li><a href="#services">AC Jet Cleaning</a></li>
                <li><a href="#services">AC Repair & Diagnosis</a></li>
                <li><a href="#services">Gas Charging & Charging</a></li>
                <li><a href="#services">Split AC Installation</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Areas We Serve</h4>
              <ul className="footer-list">
                <li>Jayanagar</li>
                <li>Koramangala</li>
                <li>JP Nagar</li>
                <li>HSR Layout</li>
                <li>BTM Layout</li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Contact</h4>
              <ul className="footer-list">
                <li>Call: <a href={`tel:${phoneNo}`}>{formattedPhone}</a></li>
                <li>WhatsApp: <a href={`https://api.whatsapp.com/send?phone=91${phoneNo}`}>{formattedPhone}</a></li>
                <li>Open Hours: 9:00 AM - 7:00 PM</li>
                <li>Operational: Mon - Sun (All Week)</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ahmed AC Services. All rights reserved.</p>
            <p>Designed for local SEO ranking in Bengaluru.</p>
          </div>
        </div>
      </footer>
      {/* Sticky Bottom Call Bar for Mobile View */}
      <div className="sticky-bottom-bar" id="mobile-sticky-bar">
        <div className="sticky-bar-layout">
          <a href={`tel:${phoneNo}`} className="btn btn-primary" style={{ width: '100%' }}>
            📞 Call Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          <a 
            href={`https://api.whatsapp.com/send?phone=91${phoneNo}&text=Hello Ahmed AC Services, I need immediate AC assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            rel="noopener noreferrer" 
            className="btn btn-whatsapp" 
            style={{ width: '100%' }}
          >
            Documentation
            💬 WhatsApp
          </a>
        </div>
      </main>
    </div>
      </div>
    </>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const message = `*New Table Reservation*\n\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nGuests: ${data.guests}\nRequests: ${data.requests}`;
    
    const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/2a9dcce765d88b135e622de07ce19e0dccaa1f89/h.jpg.png"
            alt="Dark moody bar interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background-base"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-4 mb-8 flex-wrap justify-center">
             <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-black/40 text-primary backdrop-blur-md border border-primary/30 uppercase tracking-widest">
                <span className="material-icons text-sm mr-1">restaurant</span> Dine-in
             </span>
             <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-black/40 text-primary backdrop-blur-md border border-primary/30 uppercase tracking-widest">
                <span className="material-icons text-sm mr-1">shopping_bag</span> Takeout
             </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-black/40 text-primary backdrop-blur-md border border-primary/30 uppercase tracking-widest">
                <span className="material-icons text-sm mr-1">delivery_dining</span> Delivery
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
             Great Food.<br className="hidden md:block"/> Crafted Drinks. <span className="text-primary text-glow">Unforgettable Nights.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Fine dining meets vibrant nightlife in the heart of Juba. Open 24 hours for your cravings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/menu" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl shadow-lg shadow-primary/20 text-white bg-primary hover:bg-primary-hover transition-all duration-200 transform hover:scale-105">
                View Menu
            </NavLink>
             <NavLink to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-xl shadow-sm text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200">
                Reserve a Table
            </NavLink>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <div className="relative z-20 mt-8 mx-4 md:mx-8">
         <div className="bg-background-surface shadow-2xl rounded-xl border border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <NavLink to="/contact#map" className="p-8 flex items-center justify-center gap-5 hover:bg-background-elevated transition-colors group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                    <span className="material-icons">location_on</span>
                </div>
                <div className="text-left">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-gray-400 group-hover:text-white transition-colors">Juba, South Sudan</p>
                </div>
            </NavLink>
             <div className="p-8 flex items-center justify-center gap-5 hover:bg-background-elevated transition-colors group cursor-default">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                    <span className="material-icons">schedule</span>
                </div>
                <div className="text-left">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Opening Hours</h3>
                    <p className="text-gray-400">Open 24/7 Everyday</p>
                </div>
            </div>
             <a href="tel:+211910249910" className="p-8 flex items-center justify-center gap-5 hover:bg-background-elevated transition-colors group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                    <span className="material-icons">call</span>
                </div>
                <div className="text-left">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Contact Us</h3>
                    <p className="text-gray-400 group-hover:text-white transition-colors">+211 910 249 910</p>
                </div>
            </a>
         </div>
      </div>

       {/* Weekly Offers & Specials */}
       <section className="py-24 w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Don't Miss Out</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Weekly Offers & Specials</h2>
                </div>
                <NavLink to="/offers" className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-white transition-colors">
                    View All Offers <span className="material-icons ml-1 text-lg">arrow_forward</span>
                </NavLink>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Monday */}
                 <div className="bg-card-dark rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/5 group flex flex-col h-full">
                    <div className="bg-primary/10 p-4 border-b border-primary/20">
                         <h3 className="text-xl font-black text-white uppercase tracking-wide">MONDAY</h3>
                    </div>
                    <div className="p-6 flex-grow space-y-6">
                        <div>
                             <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">Morning</span>
                             <h4 className="text-white font-bold text-lg mb-1">Buy one get one free pizza</h4>
                             <p className="text-gray-400 text-sm">From 11:00am–6:00pm</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                             <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">Evening</span>
                             <h4 className="text-white font-bold text-lg mb-1">20% off on All Beverages</h4>
                             <p className="text-gray-400 text-sm">From 3:00pm till late</p>
                        </div>
                    </div>
                </div>

                {/* Tuesday */}
                <div className="bg-card-dark rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/5 group flex flex-col h-full">
                    <div className="bg-primary p-4 border-b border-primary/20">
                         <h3 className="text-xl font-black text-black uppercase tracking-wide">TUESDAY</h3>
                    </div>
                    <div className="p-6 flex-grow space-y-6">
                        <div>
                             <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">Morning</span>
                             <h4 className="text-white font-bold text-lg mb-1">Buy one get one free burger</h4>
                             <p className="text-gray-400 text-sm">From 11:00am–6:00pm</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                             <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">Evening</span>
                             <h4 className="text-white font-bold text-lg mb-1">20% off on All Beverages</h4>
                             <p className="text-gray-400 text-sm">From 3:00pm till late</p>
                        </div>
                    </div>
                </div>

                {/* Wednesday */}
                <div className="bg-card-dark rounded-xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/5 group flex flex-col h-full">
                     <div className="bg-primary/10 p-4 border-b border-primary/20">
                         <h3 className="text-xl font-black text-white uppercase tracking-wide">WEDNESDAY</h3>
                    </div>
                    <div className="p-6 flex-grow space-y-6">
                        <div>
                             <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">Morning</span>
                             <h4 className="text-white font-bold text-lg mb-1">20% off on All Beverage and food</h4>
                             <p className="text-gray-400 text-sm">From 11:00am–6:00pm</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                             <div className="flex items-center gap-2 mb-1">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider block">Evening</span>
                                <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded">LADIES NIGHT</span>
                             </div>
                             <h4 className="text-white font-bold text-lg mb-1">Early bird free glass of Cocktail or Mocktail</h4>
                             <p className="text-gray-400 text-sm">From 6:00pm–8:00pm</p>
                        </div>
                    </div>
                </div>

            </div>
       </section>

       {/* About Us Section */}
       <section className="py-20 bg-background-base overflow-hidden relative w-full">
           <div className="w-full px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   {/* Image Side */}
                   <div className="relative group">
                       <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                       <div className="relative rounded-2xl overflow-hidden h-[600px] w-full shadow-2xl">
                           <img 
                               src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/2a9dcce765d88b135e622de07ce19e0dccaa1f89/ab.jpg.png" 
                               alt="Dining atmosphere" 
                               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                       </div>
                   </div>

                   {/* Content Side */}
                   <div>
                       <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                       <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                           Where Flavor Meets <br/>
                           The Rhythm of The Night
                       </h2>
                       <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                           Phoenix Bar & Restaurant was born from a desire to create a space in Juba that never sleeps. We blend the sophistication of a fine dining steakhouse with the electric energy of a premium lounge. Whether you're here for a power lunch, a family dinner, or to dance the night away, we promise an experience that rises above the rest.
                       </p>

                       <div className="flex flex-wrap gap-4 mb-12">
                           <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all">
                               Learn More
                           </button>
                           <button className="px-8 py-3 rounded-lg bg-primary text-white font-bold flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                               <span className="material-icons text-xl">verified</span>
                               #1 Rated Restaurant in Juba
                           </button>
                       </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                           {/* Feature 1 */}
                           <div>
                               <div className="mb-3">
                                   <span className="material-icons text-primary text-3xl">restaurant</span>
                               </div>
                               <h3 className="text-white font-bold text-lg mb-2">Quality Food</h3>
                               <p className="text-gray-500 text-sm leading-relaxed">Locally sourced ingredients, world-class chefs.</p>
                           </div>

                           {/* Feature 2 */}
                           <div>
                               <div className="mb-3">
                                   <span className="material-icons text-primary text-3xl">local_bar</span>
                               </div>
                               <h3 className="text-white font-bold text-lg mb-2">Signature Drinks</h3>
                               <p className="text-gray-500 text-sm leading-relaxed">Expert mixologists crafting unique cocktails.</p>
                           </div>

                           {/* Feature 3 */}
                           <div>
                               <div className="mb-3">
                                   <span className="material-icons text-primary text-3xl">music_note</span>
                               </div>
                               <h3 className="text-white font-bold text-lg mb-2">Atmosphere</h3>
                               <p className="text-gray-500 text-sm leading-relaxed">Modern decor with a warm, welcoming vibe.</p>
                           </div>

                           {/* Feature 4 */}
                           <div>
                               <div className="mb-3">
                                   <span className="material-icons text-primary text-3xl">volunteer_activism</span>
                               </div>
                               <h3 className="text-white font-bold text-lg mb-2">Top Service</h3>
                               <p className="text-gray-500 text-sm leading-relaxed">Attentive staff ensuring your comfort.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       {/* Featured Menu Sections */}
       <section className="py-20 bg-background-surface w-full">
           <div className="w-full px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Menu Highlights</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Taste the Best of Phoenix</h2>
                    <p className="max-w-2xl mx-auto text-gray-400">From our grill to your plate, experience flavors that ignite your senses.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Item 1 */}
                   <div className="bg-background-elevated rounded-xl shadow-lg border border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                       <div className="h-64 overflow-hidden relative">
                           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfaY1z5A7JPvXwgY_Xg_aHr4gTEJfuxRKMHoFWCx4MuDD_4qD7laUqQBH-ZcQTOH2iwAGPYS1CfO8qMwi7FxUBoo6y-HGR1e74oXOkCrizH2YhbAj78ohED84qOVgc2sNRGLXWVpicGJw50lcqu1X2DrqazxuBTXuhJQWZl7fNSuRj7jKfRS3Y3shWsRXU0X6jeFc6bJtkcgF4XJ2QjVlRx3RQ549jSWgIgJMsYollhJWvtib_84W9Thf2f6JeQOc2nZcA40BQ_sk" alt="Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"/>
                       </div>
                       <div className="p-6">
                           <div className="flex justify-between items-start mb-2">
                               <h3 className="text-xl font-bold text-white">Popular Dishes</h3>
                               <span className="material-icons text-primary">local_fire_department</span>
                           </div>
                           <p className="text-gray-400 mb-6 text-sm">Our most loved plates, featuring steaks, pastas, and local South Sudanese favorites.</p>
                           <NavLink to="/menu" className="inline-flex items-center text-primary font-semibold text-sm hover:text-white transition-colors">
                                View Full Menu <span className="material-icons text-sm ml-1">arrow_forward</span>
                           </NavLink>
                       </div>
                   </div>

                   {/* Item 2 */}
                   <div className="bg-background-elevated rounded-xl shadow-lg border border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                       <div className="h-64 overflow-hidden relative">
                           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZqchsooFpnCAivgp9CMdteWBWNwPz_zXQOcH-i3I9tEgO41e2OtddNBuLa6AMS5cHRIgCadWUESYuY7SCjjEEj-599oc4ycIwkdEz5wmUd3PUyX5XdaU1F6NwF9m_7dggfIego3qr_spNFcG49oQoie2Ull2eV8EChaY84kEGbnHeO3m5RLfjbamycdcaBQczDzoEoZA_Mgy2vgP3sQIRwFrjtLpPYlxwep1XgNROu11LTnSWDbPw4UNG02UXBHayNcomwSpshw0" alt="Cocktails" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"/>
                       </div>
                       <div className="p-6">
                           <div className="flex justify-between items-start mb-2">
                               <h3 className="text-xl font-bold text-white">Signature Cocktails</h3>
                               <span className="material-icons text-primary">local_bar</span>
                           </div>
                           <p className="text-gray-400 mb-6 text-sm">Handcrafted drinks designed to elevate your evening. Try the 'Phoenix Rising'.</p>
                           <NavLink to="/menu" className="inline-flex items-center text-primary font-semibold text-sm hover:text-white transition-colors">
                                View Drinks Menu <span className="material-icons text-sm ml-1">arrow_forward</span>
                           </NavLink>
                       </div>
                   </div>

                   {/* Item 3 */}
                   <div className="bg-background-elevated rounded-xl shadow-lg border border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                       <div className="h-64 overflow-hidden relative">
                           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Znbrlr5XO3tv8h_eG-LCXiuDAl0VoTtspyWdvalFk0rmOXvlB6eZcrk0-rGJR8AGBzenZZd_UNHfsrxnDm3ayn-_5u5LzBIsT8-J32sL3UsKVcGk5Qc6obiOPHPqe3JdERPSpZSFvJtEPByNxy_TInbmfX3AmhB5MwVvJfQXRpMx8SApcvbplwYCl5GkZeI_bNjMqSUgphnB1P6dUqG8Ox9iKV9fRRcRM0ELmNNBdVm5Lf5_FWYTwkJs8KiySHPrhDAcNPirAB8" alt="Dessert" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"/>
                       </div>
                       <div className="p-6">
                           <div className="flex justify-between items-start mb-2">
                               <h3 className="text-xl font-bold text-white">Desserts</h3>
                               <span className="material-icons text-primary">icecream</span>
                           </div>
                           <p className="text-gray-400 mb-6 text-sm">Sweet endings to perfect meals. Fresh pastries, ice creams, and cakes.</p>
                           <NavLink to="/menu" className="inline-flex items-center text-primary font-semibold text-sm hover:text-white transition-colors">
                                View Desserts <span className="material-icons text-sm ml-1">arrow_forward</span>
                           </NavLink>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       {/* Live Entertainment Section */}
       <section className="py-24 bg-background-base w-full text-center">
           <div className="w-full px-4 sm:px-6 lg:px-8">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Live Entertainment</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Feel The Beat</h2>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12">
                    Join us for live bands and DJ sets featuring the best local and international artists. The stage comes alive every week.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {[
                        { day: 'TUE' },
                        { day: 'THU' },
                        { day: 'FRI' },
                        { day: 'SUN' }
                    ].map((item) => (
                        <div key={item.day} className="bg-card-dark border border-white/10 rounded-xl p-8 min-w-[160px] hover:border-primary transition-colors duration-300 group cursor-default">
                             <span className="block text-primary font-bold text-2xl group-hover:scale-110 transition-transform">{item.day}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <NavLink to="/music" className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                        View Full Schedule
                     </NavLink>
                     <NavLink to="/contact" className="px-8 py-3.5 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all">
                        Reserve for Live Music
                     </NavLink>
                </div>
           </div>
       </section>

       {/* What Our Guests Say Section */}
       <section className="py-20 bg-background-base w-full">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Guests Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Review 1 */}
                    <div className="bg-background-elevated p-8 rounded-xl border border-white/5 relative">
                        <span className="absolute top-6 right-6 material-icons text-6xl text-white/5">format_quote</span>
                        <div className="flex text-primary mb-4">
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                            "Absolutely the best steak in Juba! The atmosphere is electric on Saturday nights. Highly recommend booking a table in advance."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Sarah M.</h4>
                                <p className="text-gray-500 text-xs">Local Guide</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-background-elevated p-8 rounded-xl border border-white/5 relative">
                        <span className="absolute top-6 right-6 material-icons text-6xl text-white/5">format_quote</span>
                        <div className="flex text-primary mb-4">
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                            "Great service and even better cocktails. The 'Phoenix Rising' is a must-try. Perfect spot for after-work drinks."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-700"></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">David K.</h4>
                                <p className="text-gray-500 text-xs">Frequent Visitor</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-background-elevated p-8 rounded-xl border border-white/5 relative">
                         <span className="absolute top-6 right-6 material-icons text-6xl text-white/5">format_quote</span>
                        <div className="flex text-primary mb-4">
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star</span>
                            <span className="material-icons text-sm">star_half</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                            "A gem in the city. The live band on Sunday was soothing and the food quality is consistent. Will be back."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-rose-700"></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Grace L.</h4>
                                <p className="text-gray-500 text-xs">Food Blogger</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </section>

       {/* Table Reservation Section */}
       <section className="py-20 bg-background-base w-full">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="bg-card-dark rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex flex-col lg:flex-row">
                   {/* Form Side */}
                   <div className="w-full lg:w-1/2 p-8 md:p-12">
                       <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Book Your Spot</span>
                       <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Table Reservation</h2>
                       
                       <form className="space-y-6" onSubmit={handleReservation}>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                   <input name="name" type="text" placeholder="John Doe" required className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
                               </div>
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                   <input name="phone" type="tel" placeholder="+211 ..." required className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" />
                               </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                                   <input name="date" type="date" required className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert" />
                               </div>
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Time</label>
                                   <input name="time" type="time" required className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert" />
                               </div>
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Guests</label>
                                   <select name="guests" className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all">
                                       <option>2 People</option>
                                       <option>3 People</option>
                                       <option>4 People</option>
                                       <option>5 People</option>
                                       <option>6+ People</option>
                                   </select>
                               </div>
                           </div>

                           <div>
                               <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests</label>
                               <textarea name="requests" rows={3} placeholder="Birthday, Anniversary, quiet table..." className="w-full bg-background-elevated border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"></textarea>
                           </div>

                           <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
                               Reserve Now
                           </button>
                       </form>
                   </div>

                   {/* Map Side */}
                   <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-[#242424]">
                        <iframe 
                            title="map"
                            src="https://maps.google.com/maps?q=4.8561186026652,31.58458740360121&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                        >
                        </iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-base/20 to-transparent pointer-events-none"></div>
                   </div>
               </div>
           </div>
       </section>
    </div>
  );
};

export default Home;
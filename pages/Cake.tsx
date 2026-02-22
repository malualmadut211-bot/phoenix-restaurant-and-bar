import React from 'react';
import { NavLink } from 'react-router-dom';

const Cake: React.FC = () => {
  const handleCakeOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const message = `*New Cake Order*\n\nName: ${data.name}\nPhone: ${data.phone}\nCake Type: ${data.cakeType}\nDate Needed: ${data.date}\nMessage on Cake: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredCakes = [
    { name: 'Chocolate Fudge Cake', desc: 'Rich chocolate layers with smooth fudge frosting', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Vanilla Celebration Cake', desc: 'Classic vanilla cake perfect for birthdays', img: 'https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/ea180822e934718ddcfce5fef2697ed2f747a1f2/ChatGPT%20Image%20Feb%2018%2C%202026%2C%2004_03_07%20PM.png' },
    { name: 'Red Velvet Cake', desc: 'Soft, rich, and topped with cream cheese frosting', img: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Black Forest Cake', desc: 'Chocolate sponge with cherries and whipped cream', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Fruit Cake', desc: 'Light sponge topped with fresh fruits', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Customized Birthday Cake', desc: 'Designed specifically for your celebration', img: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-background-base text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/ea180822e934718ddcfce5fef2697ed2f747a1f2/ChatGPT%20Image%20Feb%2018%2C%202026%2C%2004_08_24%20PM.png" alt="Delicious Cake" className="w-full h-full object-cover opacity-50"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background-base via-black/40 to-black/30"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-4 animate-fadeIn">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                    Delicious Cakes for <br/><span className="text-primary text-glow">Every Celebration</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
                    Freshly baked. Beautifully designed. Made to make your moments special.
                </p>
                <div className="mt-8">
                     <a href="#featured" className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30">
                        View Cakes
                    </a>
                </div>
            </div>
        </section>

        {/* Featured Cakes Section */}
        <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Sweet Indulgence</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Cakes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredCakes.map((cake, index) => (
                    <div key={index} className="bg-card-dark rounded-xl overflow-hidden border border-white/5 shadow-lg group hover:border-primary/50 transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <img src={cake.img} alt={cake.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{cake.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{cake.desc}</p>
                            <a 
                                href={`https://wa.me/211910249910?text=I'm interested in ordering the ${cake.name}`} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded transition-colors uppercase text-sm tracking-wider"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Custom Cake Orders Section */}
        <section className="py-24 bg-background-elevated relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
             
             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                         <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Made Just For You</span>
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Order Your Custom Cake</h2>
                         <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                             We create custom cakes for all your special occasions. Whether it's a grand wedding or an intimate birthday, our bakers bring your vision to life.
                         </p>
                         
                         <div className="grid grid-cols-2 gap-4 mb-10">
                             {['Birthdays', 'Weddings', 'Anniversaries', 'Corporate Events', 'Special Occasions', 'Theme Parties'].map(item => (
                                 <div key={item} className="flex items-center text-gray-400">
                                     <span className="material-icons text-primary text-sm mr-2">check_circle</span>
                                     {item}
                                 </div>
                             ))}
                         </div>

                         <div className="flex flex-col sm:flex-row gap-4">
                             <a href="https://wa.me/211910249910" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2 brightness-0 invert"/>
                                 Order via WhatsApp
                             </a>
                             <a href="tel:+211910249910" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-bold rounded-lg transition-all">
                                 <span className="material-icons mr-2">call</span>
                                 Call Now
                             </a>
                         </div>
                     </div>

                     {/* Custom Order Form */}
                     <div className="bg-card-dark p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
                         <h3 className="text-2xl font-bold text-white mb-6">Quick Custom Order</h3>
                         <form onSubmit={handleCakeOrder} className="space-y-4">
                             <div>
                                 <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                 <input name="name" type="text" placeholder="Your Name" required className="w-full bg-background-base border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                                 <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-background-base border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                 <div>
                                     <label className="block text-sm font-medium text-gray-400 mb-1">Cake Type</label>
                                     <select name="cakeType" className="w-full bg-background-base border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                         <option>Birthday</option>
                                         <option>Wedding</option>
                                         <option>Anniversary</option>
                                         <option>Custom Design</option>
                                     </select>
                                 </div>
                                 <div>
                                     <label className="block text-sm font-medium text-gray-400 mb-1">Date Needed</label>
                                     <input name="date" type="date" required className="w-full bg-background-base border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert"/>
                                 </div>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-400 mb-1">Message on Cake</label>
                                 <textarea name="message" rows={2} placeholder="Happy Birthday John..." className="w-full bg-background-base border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                             </div>
                             <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 mt-2">
                                 Submit Request
                             </button>
                         </form>
                     </div>
                 </div>
             </div>
        </section>

        {/* Cake Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Portfolio</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-white">Gallery</h2>
                 <p className="text-gray-400 mt-4">A glimpse of our recent creations.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                 <div className="col-span-1 md:col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
                      <img src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-bold tracking-wider uppercase">Wedding Cakes</span>
                      </div>
                 </div>
                 <div className="rounded-xl overflow-hidden group relative">
                      <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/ea180822e934718ddcfce5fef2697ed2f747a1f2/ChatGPT%20Image%20Feb%2018%2C%202026%2C%2004_00_22%20PM.png" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                 </div>
                 <div className="rounded-xl overflow-hidden group relative">
                      <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                 </div>
                 <div className="rounded-xl overflow-hidden group relative">
                      <img src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1000&auto=format&fit=crop" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                 </div>
                 <div className="rounded-xl overflow-hidden group relative">
                      <img src="https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1000&auto=format&fit=crop" alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                 </div>
            </div>
        </section>
    </div>
  );
};

export default Cake;
import React from 'react';
import { HERO_IMAGES } from '../constants';

const Contact: React.FC = () => {
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const message = `*New Website Message*\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/211910249910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-background-base text-gray-100 min-h-screen">
         <section className="relative h-[400px] flex items-center justify-center bg-gray-950 overflow-hidden">
             <div className="absolute inset-0 z-0">
                 <img src={HERO_IMAGES.contact} alt="Contact hero" className="w-full h-full object-cover opacity-30"/>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-base"></div>
             </div>
             <div className="relative z-10 text-center max-w-4xl px-4">
                 <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get in Touch</h1>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    Whether you're planning a special evening or have a quick question, we're here to help. Experience the warmth of Phoenix in the heart of Juba.
                 </p>
             </div>
         </section>

         <main className="w-full px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
             <div className="bg-card-dark rounded-xl shadow-2xl overflow-hidden border border-white/10">
                 <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
                     {/* Info Column */}
                     <div className="lg:col-span-2 bg-[#1f1f22] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start group/item">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shadow-sm border border-white/10 group-hover/item:border-primary/50 transition-colors">
                                        <span className="material-icons">location_on</span>
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Our Location</h3>
                                        <p className="text-gray-300 leading-relaxed">Behind Phenicia, Ministries Road,<br/>Juba, South Sudan</p>
                                    </div>
                                </div>
                                <div className="flex items-start group/item">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shadow-sm border border-white/10 group-hover/item:border-primary/50 transition-colors">
                                        <span className="material-icons">phone_in_talk</span>
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Call Us</h3>
                                        <p className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">+211 910 249 910</p>
                                        <p className="text-sm text-gray-500 mt-1">Available for reservations</p>
                                    </div>
                                </div>
                                <div className="flex items-start group/item">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary shadow-sm border border-white/10 group-hover/item:border-primary/50 transition-colors">
                                        <span className="material-icons">schedule</span>
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Opening Hours</h3>
                                        <p className="text-gray-300 font-medium">Open 24 Hours</p>
                                        <p className="text-sm text-gray-500 mt-1">Breakfast, Lunch & Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>

                     {/* Form Column */}
                     <div className="lg:col-span-3 p-10 lg:p-12">
                         <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                         <p className="text-gray-400 mb-8">Book a table or send an inquiry. We'll get back to you shortly.</p>
                         <form className="space-y-6" onSubmit={handleMessage}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input name="name" className="w-full bg-background-elevated border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="John Doe" type="text" required/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input name="email" className="w-full bg-background-elevated border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="john@example.com" type="email" required/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <input name="phone" className="w-full bg-background-elevated border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="+211 ..." type="tel" required/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <select name="subject" className="w-full bg-background-elevated border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none">
                                        <option>Table Reservation</option>
                                        <option>Private Event</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea name="message" className="w-full bg-background-elevated border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="Tell us about your requirements..." rows={4} required></textarea>
                            </div>
                            <div className="pt-2">
                                <button className="w-full md:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5" type="submit">
                                    Send Message
                                </button>
                            </div>
                         </form>
                     </div>
                 </div>
             </div>
         </main>
         
         {/* Map Section */}
         <section id="map" className="relative w-full h-[500px] bg-background-surface">
            {/* Interactive Map Overlay */}
            <div className="w-full h-full bg-gray-800 relative overflow-hidden">
                <iframe 
                    title="map"
                    src="https://maps.google.com/maps?q=4.8561186026652,31.58458740360121&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy">
                </iframe>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
            </div>
         </section>
    </div>
  );
};

export default Contact;
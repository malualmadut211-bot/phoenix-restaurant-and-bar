import React from 'react';
import { HERO_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-background-base text-gray-100">
        <header className="relative pt-24 h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={HERO_IMAGES.about} alt="About hero" className="w-full h-full object-cover scale-105"/>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-base via-transparent to-black/80"></div>
            </div>
             <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
                <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-[0.2em] mb-6 uppercase backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Established in Juba
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-glow">
                    About Phoenix <br/><span className="italic text-primary font-normal">Bar & Restaurant</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed tracking-wide opacity-90">
                     Where Great Food, Signature Drinks, and Unforgettable Nights Come Together.
                </p>
             </div>
        </header>

        <section className="py-24 relative overflow-hidden">
             <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-[128px]"></div>
             <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/40 to-transparent rounded opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-700"></div>
                        <img src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/2a9dcce765d88b135e622de07ce19e0dccaa1f89/a.jpg.png" alt="Chef plating" className="relative w-full h-[600px] object-cover rounded shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"/>
                        
                        <div className="absolute bottom-12 -left-8 bg-card-dark p-6 shadow-2xl border border-white/5 hidden md:block">
                            <p className="font-serif text-5xl text-primary mb-1">5<span className="text-2xl align-top">+</span></p>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Years of<br/>Excellence</p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                         <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
                            A Culinary Oasis in the <br/>
                            <span className="text-primary italic">Heart of Juba</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                             <p>
                                Phoenix Bar & Restaurant was born from a simple yet ambitious vision: to create a space in Juba where the warmth of hospitality meets world-class culinary standards. We aren't just a place to eat; we are a destination designed to ignite your senses.
                            </p>
                            <p>
                                Our journey began with a passion for fusion cuisine—blending local South Sudanese flavors with international techniques. Whether you're here for a power lunch, a romantic dinner, or to dance the night away, we've crafted an atmosphere that adapts to your mood.
                            </p>
                        </div>
                         <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-12">
                            <div>
                                <span className="block font-serif text-3xl text-white mb-1">24/7</span>
                                <span className="text-xs text-primary font-bold uppercase tracking-wider">Always Open</span>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <span className="block font-serif text-3xl text-white mb-1">100%</span>
                                <span className="text-xs text-primary font-bold uppercase tracking-wider">Fresh Ingredients</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <section className="py-24 bg-card-dark relative border-y border-white/5">
             <div className="w-full px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Why Choose Us</h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">The Phoenix Experience</h3>
                    <p className="text-gray-400 text-lg font-light">
                        We go beyond serving food. We curate experiences that resonate with the vibrant spirit of our city.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                         { icon: 'restaurant_menu', title: 'Exceptional Food', text: 'A menu crafted by expert chefs featuring premium steaks, fresh seafood, and local delicacies.' },
                         { icon: 'local_bar', title: 'Premium Bar', text: 'Signature cocktails, fine wines, and rare spirits served in an ambiance of pure sophistication.' },
                         { icon: 'music_note', title: 'Live Music', text: 'Experience the rhythm of Juba with live bands and DJ sets that turn dinner into a celebration.' },
                         { icon: 'schedule', title: 'Open 24 Hours', text: 'Whether it\'s a late-night craving or an early breakfast, our doors are always open for you.' },
                     ].map((item, i) => (
                         <div key={i} className="group p-8 bg-background-elevated rounded border border-white/5 hover:border-primary/50 hover:bg-[#202023] transition-all duration-500 relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                            <div className="w-12 h-12 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-icons text-4xl">{item.icon}</span>
                            </div>
                            <h4 className="font-serif text-xl text-white mb-3">{item.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{item.text}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    </div>
  );
};

export default About;
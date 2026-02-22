import React from 'react';
import { NavLink } from 'react-router-dom';

const LiveMusic: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-gray-100 flex flex-col items-center">
         {/* Hero / Header */}
         <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.2),_transparent_70%)]"></div>
             </div>
             
             <div className="relative z-10 text-center px-4 animate-fadeIn">
                 <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]">
                     Live <span className="text-primary text-glow">Music</span>
                 </h1>
                 <p className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.3em] uppercase mb-8">
                     Feel the Rhythm of Juba
                 </p>
             </div>
         </div>

         {/* Schedule Section */}
         <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
             <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                 <h2 className="text-3xl font-black text-center text-white mb-12 uppercase tracking-wide">Weekly Lineup</h2>

                 <div className="space-y-6">
                     {[
                         { day: 'Tuesday', event: 'Live band performance And Bucket Night', time: '5pm till late' },
                         { day: 'Thursday', event: 'Live band performance', time: '5pm to 8pm' },
                         { day: 'Thursday', event: 'Open Mic Karaoke', time: '8pm till late' },
                         { day: 'Friday', event: 'Variety Friday With Live band performance', time: '5pm to 8pm' },
                         { day: 'Sunday', event: 'Lifestyle Sunday With Live band performance', time: '5pm to 8pm' }
                     ].map((item, index) => (
                         <div key={index} className="group flex flex-col md:flex-row items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] cursor-default">
                             <div className="flex items-center gap-4 mb-2 md:mb-0">
                                 <span className="material-icons text-primary text-2xl group-hover:animate-pulse">equalizer</span>
                                 <span className="text-2xl font-bold text-white uppercase tracking-wider">{item.day}</span>
                             </div>
                             <div className="flex flex-col md:items-end text-center md:text-right">
                                <span className="text-gray-200 font-medium text-lg tracking-wide group-hover:text-white transition-colors">{item.event}</span>
                                <span className="text-primary text-sm font-bold tracking-wider mt-1 block uppercase">[{item.time}]</span>
                             </div>
                         </div>
                     ))}
                 </div>

                 <div className="mt-16 text-center">
                     <p className="text-gray-400 mb-6 italic">Don't miss a beat. Secure your spot on the dance floor.</p>
                     <NavLink 
                        to="/contact" 
                        className="inline-flex items-center px-10 py-4 bg-primary hover:bg-primary-hover text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all transform hover:-translate-y-1"
                     >
                         <span className="material-icons mr-2">event_seat</span>
                         Reserve a Table for Live Music
                     </NavLink>
                 </div>
             </div>
         </div>
    </div>
  );
};

export default LiveMusic;
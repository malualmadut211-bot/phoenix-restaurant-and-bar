import React from 'react';
import { REVIEWS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-background-base text-gray-100 min-h-screen pb-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlAoLYGlNAMlY1IBEjtcOfhPG5JlOCSznt6Grsj0wm7qpOxuWsXMtbn61r23mvDo4uBptySIlk1sLh8tNpsPc14rnAFPdWexf1WjAtmXQ-mS3w3ltoFKnSLF_h_-RVg2hqOok992IgHcj8ZHnPfeOiCgRtdu20-ppe5ed8fs8uphA5PwQVsPUatAGKMRgBbp8It5Z0FJHlVc5HgWqjxFKd1XbOjeSPZt1vxmOGt1ETT0oMXNPP1e8dWPtBWqeZfiYMkVLNVr-Ywtc" alt="Background" className="w-full h-full object-cover opacity-20"/>
           <div class="absolute inset-0 bg-gradient-to-b from-background-base/90 via-background-base/80 to-background-base"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow">Experience Juba's Finest</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Services, Amenities & Reviews</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                 Discover why Phoenix Bar & Restaurant is the preferred dining destination in Juba. From our comprehensive amenities to the voices of our cherished guests.
            </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
         <div className="bg-card-dark rounded-2xl shadow-2xl shadow-black/50 border border-white/5 overflow-hidden">
             <div className="p-8 md:p-12">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Service Options */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="p-3 bg-black/40 rounded-full text-gold-accent border border-white/5">
                                <span className="material-icons">restaurant</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Service Options</h3>
                        </div>
                        <ul className="space-y-4">
                            {['Dine-in', 'Takeout', 'Delivery', 'Outdoor seating'].map(item => (
                                 <li key={item} className="flex items-center text-gray-300 group">
                                    <span className="material-icons text-green-500 mr-3 text-sm">check_circle</span>
                                    <span className="group-hover:text-primary transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     {/* Accessibility */}
                    <div className="space-y-6 md:border-l md:border-r border-white/10 md:px-8">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="p-3 bg-black/40 rounded-full text-white border border-white/5">
                                <span className="material-icons">accessible</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Accessibility</h3>
                        </div>
                        <ul className="space-y-4">
                            {['Wheelchair accessible parking', 'Wheelchair accessible seating', 'Wheelchair accessible restroom'].map(item => (
                                 <li key={item} className="flex items-center text-gray-300 group">
                                    <span className="material-icons text-gold-accent mr-3 text-sm">wheelchair_pickup</span>
                                    <span className="group-hover:text-primary transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     {/* Amenities */}
                     <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="p-3 bg-black/40 rounded-full text-gold-accent border border-white/5">
                                <span className="material-icons">wifi</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Amenities</h3>
                        </div>
                        <ul className="space-y-4">
                            {['Clean Restrooms', 'Table service', 'Free parking lot', 'Free High-Speed Wi-Fi'].map(item => (
                                 <li key={item} className="flex items-center text-gray-300 group">
                                    <span className="material-icons text-gray-500 mr-3 text-sm">check_circle</span>
                                    <span className="group-hover:text-primary transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="border-t border-white/10"></div>
      </div>

      {/* Reviews Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Customer Reviews</h2>
           </div>

           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {/* Render Reviews */}
                {REVIEWS.map(review => (
                    <div key={review.id} className="break-inside-avoid bg-card-dark p-6 rounded-xl shadow-lg shadow-black/20 border border-white/5 hover:border-white/10 hover:shadow-xl transition-all">
                        <div className="flex items-center mb-4">
                             <div>
                                <h4 className="text-sm font-bold text-white">{review.name}</h4>
                                <p className="text-xs text-gray-400">{review.timeAgo}</p>
                            </div>
                            <div className="ml-auto flex text-gold-accent text-sm drop-shadow-sm">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-icons text-base">
                                        {i < Math.floor(review.rating) ? 'star' : (i < review.rating ? 'star_half' : 'star_border')}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {review.tags && (
                             <div className="mb-3">
                                 {review.tags.map(tag => (
                                     <span key={tag} className="inline-block px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/20 text-xs font-semibold mb-2">{tag}</span>
                                 ))}
                             </div>
                        )}
                        <p className="text-gray-200 text-sm leading-relaxed font-light">{review.text}</p>
                    </div>
                ))}
           </div>
      </section>
    </div>
  );
};

export default Services;
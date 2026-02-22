import React from 'react';

// Using a more flexible structure for offers to accommodate lists in any section
interface OfferSection {
  title?: string;
  subtitle?: string;
  time?: string;
  items?: string[];
}

interface DailyOffer {
  day: string;
  morning: OfferSection;
  evening: OfferSection;
}

const WEEKLY_OFFERS: DailyOffer[] = [
  {
    day: "MONDAY",
    morning: { title: "Buy one get one free pizza", time: "From 11:00am–6:00pm" },
    evening: { title: "20% off on All Beverages", time: "From 3:00pm till late" }
  },
  {
    day: "TUESDAY",
    morning: { 
        // Changed to use items to support multiple offers in morning
        time: "From 11:00am–6:00pm",
        items: [
            "Buy one get one free burger",
            "Buy a bucket of beer 4, get 2 free beers"
        ]
    },
    evening: { title: "20% off on All Beverages", time: "From 3:00pm till late" }
  },
  {
    day: "WEDNESDAY",
    morning: { title: "20% off on All Beverage and food", time: "From 11:00am–6:00pm" },
    evening: { title: "LADIES NIGHT", subtitle: "Early bird free glass of Cocktail or Mocktail", time: "From 6:00pm–8:00pm" }
  },
  {
    day: "THURSDAY",
    morning: { title: "Buy one get one free wrap or Sandwich", time: "From 11:00am–6:00pm" },
    evening: { title: "KARAOKE NIGHT", subtitle: "Sing on the stage for your table & get one cocktail Pitcher free", time: "From 4:30pm–9:00pm" }
  },
  {
    day: "FRIDAY",
    morning: { title: "20% off on our Breakfast Menu", time: "From 7:00am–11:00am" },
    evening: {
        items: [
            "Buy One Martel or Hennesy for your table Get 1 plate of kebab",
            "Buy 2-tequila & get free pizza"
        ]
    }
  },
  {
    day: "SATURDAY",
    morning: { title: "20% off on our Breakfast Menu", time: "From 7:00am–11:00am" },
    evening: {
        items: [
            "Buy One Martel or Hennesy for your table Get 1 plate of kebab",
            "Buy 2-tequila & get free pizza"
        ]
    }
  }
];

const OfferSectionRender: React.FC<{ section: OfferSection; type: 'Morning' | 'Evening' }> = ({ section, type }) => {
    const isMorning = type === 'Morning';
    const accentColor = isMorning ? 'text-primary' : 'text-orange-400';
    const bgColor = isMorning ? 'bg-primary/10' : 'bg-orange-500/10';
    const borderColor = isMorning ? 'border-primary/20' : 'border-orange-500/20';

    return (
        <div>
            <span className={`inline-block px-2 py-0.5 rounded ${bgColor} ${accentColor} text-[10px] font-bold uppercase tracking-wider mb-2 border ${borderColor}`}>{type}</span>
            
            {section.title ? (
                <>
                    <h3 className="text-lg font-bold text-white mb-1">{section.title}</h3>
                    {section.subtitle && (
                        <p className="text-sm text-gray-300 mb-2 italic">{section.subtitle}</p>
                    )}
                </>
            ) : (
                <ul className="space-y-3 mb-2">
                    {section.items?.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className={`material-icons ${isMorning ? 'text-primary' : 'text-primary'} text-sm mt-0.5`}>local_fire_department</span>
                            <span className="text-sm font-medium text-white">{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {section.time && (
                 <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                     <span className="material-icons text-sm">schedule</span>
                     <span>{section.time}</span>
                </div>
            )}
        </div>
    );
};

const Offers: React.FC = () => {
  return (
    <div className="bg-background-base min-h-screen text-gray-100">
         <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
             <div className="absolute inset-0 z-0">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpfXzTJcd7DNgm1LT9nPmhEXVuKLi9O8Iz0bP6Kysifo1Q66ei8v4nca_J-GleGn8lnUND5UlulGh4T4fUav5coMSvbaabPZLcRg8jTiLfPylUTya8VKHDCIB7qcUX96fSxzYeqA2Bhhv0JDSJIoGcCGfhdn7-GsFdCaXiavXS_fgY234Gweio0Y0YsgA2hkN7cKrNiZ6OuCD_r9UQ3PmpbhZJ14kEyLenyL3X9viFA3P520FjqvtZ-nxU1ACLJkdG94TdTmqVWy8" alt="Offers hero" className="w-full h-full object-cover opacity-25"/>
                 <div className="absolute inset-0 bg-gradient-to-b from-background-base/80 via-background-base/60 to-background-base"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
             </div>
             <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-black/40 text-primary border border-primary/30 text-xs font-bold tracking-[0.2em] mb-6 uppercase shadow-glow backdrop-blur-sm">Nightlife & Dining</span>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
                    Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Offers</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Elevate your evenings with our curated daily promotions. From golden hour sips to late-night beats in Juba.
                </p>
             </div>
         </header>

         <main className="w-full px-4 sm:px-6 lg:px-8 pb-24">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {WEEKLY_OFFERS.map((offer) => (
                    <div key={offer.day} className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-1 flex flex-col h-full group">
                        {/* Day Header */}
                        <div className="bg-white/5 p-6 border-b border-white/5 group-hover:bg-primary/5 transition-colors">
                            <h2 className="text-2xl font-black text-white tracking-widest uppercase text-center group-hover:text-primary transition-colors">{offer.day}</h2>
                        </div>
                        
                        <div className="p-6 flex flex-col h-full space-y-6">
                            <OfferSectionRender section={offer.morning} type="Morning" />
                            <div className="border-t border-white/10 border-dashed"></div>
                            <OfferSectionRender section={offer.evening} type="Evening" />
                        </div>
                    </div>
                ))}
             </div>
         </main>
    </div>
  );
};

export default Offers;
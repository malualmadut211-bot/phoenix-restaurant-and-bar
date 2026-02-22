import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

interface MenuSectionProps {
  title: string;
  note?: string;
  items: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, note, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card-dark/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/30 h-fit">
      <button 
        className="w-full p-6 md:p-8 flex justify-between items-center text-left bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 pr-4">
            <h3 className="text-xl md:text-2xl font-bold text-primary tracking-wide">{title}</h3>
            {note && <p className="text-sm text-gray-400 mt-1 italic">{note}</p>}
        </div>
        <span className={`material-icons text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
        </span>
      </button>
      <div 
        className={`px-6 md:px-8 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <ul className="space-y-4 border-t border-white/10 pt-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-baseline group">
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors text-sm md:text-base">{item}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  const fullMenuData = [
    {
      title: "BREAKFAST",
      items: [
        "French Toast (4pcs): with tea/coffee or glass of juice",
        "Baked Potato (4pcs): Grilled tomatoes (2pcs), Baked beans. fruit platter with tea or coffee",
        "Eggs of your choice: Fried Plantain, juice (small glass) or yoghurt, toasted bread",
        "Full English breakfast:(2 eggs of choice, 2 Sausages, bacon stripes, fruit salad with tea or coffee"
      ]
    },
    {
      title: "STARTERS",
      note: "[All Served With Bread Rolls]",
      items: [
        "Clear or creamy chicken soup",
        "Clear or creamy Mushroom Soup",
        "Clear Or Creamy Mixed Vegetable Soup",
        "Goats Soup"
      ]
    },
    {
      title: "SALADS",
      items: [
        "Garden Salad: (Mixture of fresh vegetables)",
        "Greek Salad: (Fresh Vegetable dices, Fetah Cheese, Black olives and a fine dressing (Vinaigrette)",
        "Italian Salad: (Fresh Vegetable dices, ham, Green or black olives, cheddar cheese and a fine dressing)",
        "Tuna Salad: (Tuna chunks with creamy diced Onions with crispy lattuce)",
        "Chicken ceaser salad"
      ]
    },
    {
      title: "SNACKS",
      items: [
        "Beef samosas: (4pcs Served with Sweet chilli sauce and lemon wedges)",
        "Plen Chips",
        "Masala Chips",
        "Beef Samosas 4 pics",
        "Vegetable Samosas pics",
        "Egg Rolls",
        "Fish Fingers with Chips",
        "Sausage Beef"
      ]
    },
    {
      title: "BURGERS",
      note: "(All served with chips)",
      items: [
        "Beef Burger",
        "Cheese Burger",
        "Chicken Cheese Burger",
        "Chicken Burger",
        "Phoenix special Burger"
      ]
    },
    {
      title: "CURRIES",
      note: "(All Served with rice or 2pcs of Chapatti)",
      items: [
        "Chicken Curry",
        "Beef curry",
        "Vegetable curry",
        "Fish curry"
      ]
    },
    {
      title: "PASTAS",
      items: [
        "Spaghetti Bolognese (Beef)",
        "Spaghetti Carbonara (Ham)",
        "Spaghetti Napolitana: (with tomato Sauce)",
        "Penne Pasta: (with Bolognese, carbonara or Napolitna)"
      ]
    },
    {
      title: "WRAPS",
      note: "(All served with chips)",
      items: [
        "Beef Wrap: (Beef stripes, vegetable stripes in taco wrap)",
        "Chicken Wrap: (Chicken stripes. Vegetable stripes in taco wrap)"
      ]
    },
    {
      title: "CHICKEN",
      items: [
        "Grilled Chicken Breast with Chips",
        "Chilli chicken: (Spicy chicken stripes, served with Rice)",
        "Fried Chicken with chips",
        "Chicken kebabs with chips",
        "Chicken wings with chips",
        "Phoenix chilli Chicken: (Spicy, served with Masala Chips)",
        "Chicken Dram Stick",
        "Crumbed Chicken Fillet",
        "Kuku Choma",
        "Chicken Pilau"
      ]
    },
    {
      title: "PIZZAS",
      items: [
        "Chicken Pizza: (Chicken dices and cheese)",
        "Vegie Pizza: (Vegetables)",
        "Margarita Pizza: (Tomato)",
        "Tuna Pizza: (Tuna chunks and cheese)",
        "Hawaii Pizza: (Ham, pineapple and cheese)",
        "Salami Pizza: (Salami)",
        "Mix Pizza: (Chicken, Beef. Tuna, Vegetable, Egg with Shadda Cheez)"
      ]
    },
    {
      title: "BEEF",
      items: [
        "Mushroom Steak",
        "Pepper Steak",
        "Beef stew",
        "Beef kebabs",
        "Beef Pilau: (Chicken Cutlet/Fish)"
      ]
    },
    {
      title: "GOAT",
      items: [
        "Goat Fry: (Served wet or dry with chips or plantain)"
      ]
    },
    {
      title: "SIZZLING",
      items: [
        "Sizzling Chicken:(Stripped chicken with vegies on sizzling plate)",
        "Beef Sizzling: (Striped Beef with vagies on Sizzling Plate)",
        "Vegetable sizzling"
      ]
    },
    {
      title: "FISH",
      note: "(All served chips, tata sauce)",
      items: [
        "Grilled Fish Fillet With Chips",
        "Fried Fish Fillet with Chips",
        "Whole Tilapia Fried Fish With Chips: (Whole Tilapia Baked Fish with herb garlic, butter, sauces with)",
        "Veg rice",
        "Crumbed fish filled Chapatti or chips"
      ]
    },
    {
      title: "SANDWICHES",
      items: [
        "Chicken Sandwich: (Chicken. Tomatoes, Onions and lettuce)",
        "Club Sandwich: (Chicken, Eggs, tomatoes)",
        "Cheese Sandwich: (Cheese Served with chips)",
        "B.L.T: (Bacon, lettuce and tomotoes)"
      ]
    },
    {
      title: "RICE",
      items: [
        "Vegetables fried rice",
        "Chicken fried rice",
        "Beef fried rice"
      ]
    },
    {
      title: "PORK",
      items: [
        "Port Ribs: (Grilled. honey glazed Served with Chips)",
        "Pork chops: (Salty. Served with Chips)",
        "Hawaii Pork",
        "Fried Pork"
      ]
    }
  ];

  const dessertsData = [
    "Fruit Salad",
    "Fruit platter",
    "Banana split: (split of banana, 2 scoops of ice cream and a rosette of whipped sweet cream",
    "Cream Caramel",
    "Apple pie: (served with vanilla sauce and an ice cream scoop)",
    "Chef Salad: Lettuce, Cucumba, Carrot, Tomatoes, Chicken Fillet, Bacon, Boil Eggs, Green Pepers. Black/Green Olives, Cheedar Cheese",
    "Avacado Salad: Mangoes Avocado, Tomato, Passiley. Unaigrette Dressing" 
  ];

  const drinksMenuData = [
    {
      title: "SOFT DRINKS",
      items: ["Sodas", "Water", "Sparkling Water"]
    },
    {
      title: "HOT BEVERAGES",
      items: [
        "Capucino", "Cafe Latte", "Maciato", "Espresso", "Espresso Maciato",
        "Drinking Chocolate", "Vanilla Late/Capucino", "Hezent Latte/Capucino",
        "Black Tea", "Green Tea, Vibiscousty"
      ]
    },
    {
      title: "COLD BEVERAGES",
      items: [
        "Iced Moccah", "Iced Capucino", "Iced Late", "Chocolate Cream Frapucino",
        "Vanilla Iced Frapucino", "Vanilla Iced Latte", "Iced Coffee Black",
        "Irish Coffee", "Americano", "Lemon Ginger Mint Tea"
      ]
    },
    {
      title: "FRESH JUICES",
      items: [
        "Pineapple", "Orange", "Lemon", "Watermelon", "Passion",
        "Ovacado (With milk)", "Papaya", "Phoenix Special"
      ]
    },
    {
      title: "BEER",
      items: [
        "Black Ice", "Castle Lite", "Club", "Corona", "Guiness", "Heineken",
        "Nile", "Savanah", "Tusker Larga", "Tusker Lite", "White Cap"
      ]
    },
    {
      title: "MOCKTAIL",
      items: [
        "Cindella", "Virgin Pinacolada", "Banana Peanut", "Pineapple Mints",
        "Cucumber Basil", "Virgin Mojito", "Electric Lemon"
      ]
    },
    {
      title: "CLASSIC COCKTAILS",
      items: [
        "Passion Mojito", "Sex On The Beach", "Innocent Sex", "Tequila Sunrise",
        "Screw Driver", "Long Island", "Blue Frog", "Blue Hawai", "Blue Lagoon",
        "Tom Collins", "Pink Pussy", "Margarita", "Classic Martino", "Whisky Sour",
        "Gin Sour", "London Mule", "Mosco Mule", "Screening Organism"
      ]
    },
    {
      title: "CLASSIC COCKTAILS",
      items: [
        "Blow Job", "Jeger Bomb", "Success", "Slippery Nipple", "Pinacolada",
        "Lemon Drop Martin", "Dawa", "Hand Gurnet"
      ]
    },
    {
      title: "WINES",
      items: [
        "Balaire Rose", "Lanson Rose", "Jackobs Greek C", "Svetonj Toscana",
        "Nedburg Souvana", "Nedburg Pinatage", "St. Mary's Natural Sweet Wine",
        "Dompo", "Dompo Semi & Dry Wine", "Drostdy - Hof Red", "Four You-Sweet Roze Wine",
        "4 Cousins - Red", "4 Cousins White", "4TH Street Red, White"
      ]
    },
    {
      title: "CHAMPAIGNE",
      items: ["Moet Chandon"]
    },
    {
      title: "SPARKLING WINE",
      items: ["Amarane Della Vapolicella", "J.C LE-Rock", "Martini Sparkling"]
    },
    {
      title: "LIQOUR",
      items: [
        "Malibu", "Contreau", "Amarula", "Zappa (Sambuca)", "Baileys",
        "Jagermeister", "Khalua", "Southern Comfort"
      ]
    },
    {
      title: "GINS",
      items: [
        "Hendricks", "Gilbeys", "Bombay", "Tanguery Gin", "Gordon",
        "Jim Beam", "UG Pineapple", "UG 1/2 Plain", "UG Coconut"
      ]
    },
    {
      title: "VODKA",
      items: ["Absolute Vodka", "Ciroc"]
    },
    {
      title: "APARATIFFS",
      items: ["Martini Bianco", "Martini Rosso", "Campari", "Martini Dry"]
    },
    {
      title: "RUM",
      items: ["Barcadi (Rum)", "Spiced Gold", "Havana Club", "Capt. Morgan Spiced"]
    },
    {
      title: "TEQUILA",
      items: ["Jose Tequila", "Camino", "Olmeca"]
    },
    {
      title: "WHISKEY",
      items: [
        "Black Label", "Red Label", "Gold Label", "Green Label", "Double Black",
        "Famous Gouse", "Glenfiditch 12 Years", "Glenfiditch 15 Years",
        "Glenfiditch 18 Years", "Glenfiditch 21", "Chivas 12 Years",
        "Chivas 18 Years", "Jack Daniels", "J.D Honey", "Jameson",
        "Jim Beam", "White Label Bullt"
      ]
    },
    {
      title: "COGNAC",
      items: [
        "Remy Martini (VSOP)", "Hennesy VSOP", "Hennesy Vs", "Martel VS", "Martel (VSOP)"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-background-base">
        {/* Hero */}
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZljVQDGGHvTBRWrt1OEJTEDJI71aOLl0G4n7u7F4T_OkXX0gJj_36J1cHhQZ2O8bqkdkgZmmW2U62ieHULaNmqqjwLZZXwPIZYnmBL_dSlMTgdKV9Ck0G16Fk7ntosbOCgidGxy8zNtn-kKlF_AEJQ4lE5wrjr4_T8p8tKmTbEUq2Mc2McZgVd28mn6F9WMMh2M2TyFRHlvFZiP9gHHi7ay6PfpswSvdbK421HgyoyamxhWspYWkzoBOcMv0lfcUqmwdVLCiXSNA" className="w-full h-full object-cover opacity-60" alt="Menu header"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-background-base via-background-base/50 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-4 mt-16">
                 <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">Open 24 Hours</span>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                    Taste the <span class="text-primary">Phoenix</span> Flavor
                </h1>
                <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md">
                    Delicious food, refreshing drinks, and unforgettable flavors. Experience the finest dining in Juba.
                </p>
            </div>
        </div>

        {/* Menu Items */}
        <main className="w-full px-4 sm:px-6 lg:px-8 py-12 space-y-24">
             
             {/* Signature Section */}
             <div className="space-y-16">
                 {/* Signature Drink */}
                 <section id="signature-drink" className="scroll-mt-40">
                     <div className="flex items-center gap-4 mb-8">
                         <h2 className="text-3xl font-bold text-white drop-shadow-sm">Signature Drink</h2>
                         <div className="h-1 flex-grow bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MENU_ITEMS.filter(item => item.category === 'Signature Drink').map(item => (
                            <div key={item.id} className="group relative bg-card-dark rounded-xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-primary/10 transition-all duration-300 border border-white/5 hover:border-primary/50">
                                {item.tag && (
                                    <div className="absolute top-3 left-3 z-10"><span className="text-white text-xs font-bold px-2 py-1 rounded shadow-md shadow-black/50 bg-primary">{item.tag}</span></div>
                                )}
                                {item.image && (
                                    <div className="h-48 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"/></div>
                                )}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">{item.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                 </section>

                 {/* Signature Food */}
                 <section id="signature-food" className="scroll-mt-40">
                     <div className="flex items-center gap-4 mb-8">
                         <h2 className="text-3xl font-bold text-white drop-shadow-sm">Signature Food</h2>
                         <div className="h-1 flex-grow bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MENU_ITEMS.filter(item => item.category === 'Signature Food').map(item => (
                            <div key={item.id} className="group relative bg-card-dark rounded-xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-primary/10 transition-all duration-300 border border-white/5 hover:border-primary/50">
                                {item.tag && (
                                    <div className="absolute top-3 left-3 z-10"><span className="text-white text-xs font-bold px-2 py-1 rounded shadow-md shadow-black/50 bg-amber-600">{item.tag}</span></div>
                                )}
                                {item.image && (
                                    <div className="h-48 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"/></div>
                                )}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">{item.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                 </section>
             </div>

             {/* Full Menu Section */}
             <section id="full-menu" className="scroll-mt-40 pt-10 border-t border-white/10">
                 <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Hungry for More?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Full Menu</h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
                     {fullMenuData.map((category, index) => (
                         <MenuSection key={index} title={category.title} note={category.note} items={category.items} />
                     ))}
                 </div>
             </section>

             {/* Desserts Section */}
             <section id="desserts" className="scroll-mt-40 pt-10 border-t border-white/10">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-white">DESSERTS</h2>
                 </div>
                 <div className="max-w-3xl mx-auto">
                    <MenuSection title="DESSERTS" items={dessertsData} />
                 </div>
             </section>

             {/* Drinks Section */}
             <section id="drinks" className="relative py-20 bg-black text-white scroll-mt-20 border-t border-white/10 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ec4913 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                  <div className="relative px-6">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Drinks</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-glow"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 items-start">
                         {drinksMenuData.map((category, index) => (
                             <MenuSection key={index} title={category.title} items={category.items} />
                         ))}
                     </div>
                  </div>
             </section>
        </main>
    </div>
  );
};

export default Menu;
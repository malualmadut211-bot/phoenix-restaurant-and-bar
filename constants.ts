import { NavItem, MenuItem, Review, Event, Offer, GalleryImage } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Offers', path: '/offers' },
  { label: 'Music', path: '/music' },
  { label: 'Cake', path: '/cake' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_IMAGES = {
  home: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0DUfHAMjFRLgM0W2SvSz7291mNgoIWfTfJz6aamVH7Nsj4vXo7jPO9aoHYzlsYsr9JXUSqy5DgU0mtFxrXlPkkoM2orXwaRNXjEDFCj5V_-4iRhvtE-wSA1nA0QWDXDoVZ5vgpQEG9QF_7rpiyo9dgLqhpt244hFIKPtZ3XtP-ar97sWiK39Q2k-YzelUrLwxnlgtRUI2xnCN3dCh_7h0i8jW-1Ctoqv7fs14Za5JNyVxCxlvmW5JYOO7x0LG3w2CGw8J4fmixL4",
  menu: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZljVQDGGHvTBRWrt1OEJTEDJI71aOLl0G4n7u7F4T_OkXX0gJj_36J1cHhQZ2O8bqkdkgZmmW2U62ieHULaNmqqjwLZZXwPIZYnmBL_dSlMTgdKV9Ck0G16Fk7ntosbOCgidGxy8zNtn-kKlF_AEJQ4lE5wrjr4_T8p8tKmTbEUq2Mc2McZgVd28mn6F9WMMh2M2TyFRHlvFZiP9gHHi7ay6PfpswSvdbK421HgyoyamxhWspYWkzoBOcMv0lfcUqmwdVLCiXSNA",
  about: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEYBIRj3Uj8M5a9XATl4147Ho6oI2wqIYSmic08AjZB2-8UotAJ-CvI7yG8gzDhep60zuzWqZW6LI7U3iGQ4XUZ09KrUR-IXxv0C-7Q75b010tkdY8Zv4beUtFYsK_UFx-L9j3YzPKX5pA8sB3LxukWkbspfmS_nExgMBBPD66gTijHXHyRFxJRz1LMypF4E4ZKGmB5H0qElwqgZJohDYh3tRB5zK4L13IZYMcElx1QTdbi9vI8DpxE5xZv-ipyJ1hTDngKaT4-84",
  music: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtGAT1r5ipsZ2sRyNFN_MJnCUMPGBCVCLIKEuAkf6IeTnPzW0ghMnUK-4R5Pb4WSYc-LQ9lrLe8C7VeiVwqEqnKK8eu487ZGum8DaGnDumqh8yNhd72vzuhhbUXJZiDE0pCq9PpzVwvQZ_w9jZbsWrcLRdqyjuMrk8RkHPUvNbIdasFFehAu0D0XBXdCQvubAeHDtKf9AUL6fwBQ7ByEJBjaA6ob36zjkqVIF-ofCo1_3aei-rYNvR4JAMkeBtFgIRekX72uagj0M",
  offers: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfXzTJcd7DNgm1LT9nPmhEXVuKLi9O8Iz0bP6Kysifo1Q66ei8v4nca_J-GleGn8lnUND5UlulGh4T4fUav5coMSvbaabPZLcRg8jTiLfPylUTya8VKHDCIB7qcUX96fSxzYeqA2Bhhv0JDSJIoGcCGfhdn7-GsFdCaXiavXS_fgY234Gweio0Y0YsgA2hkN7cKrNiZ6OuCD_r9UQ3PmpbhZJ14kEyLenyL3X9viFA3P520FjqvtZ-nxU1ACLJkdG94TdTmqVWy8",
  contact: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUPfcJyUexeMQ1MuF3U-OywMnko0_j_q4WQHjLVcPQgYG_jBixHxbNRcpctlRIvPbntixCUG0FEcEayouHY_A5TVOJUuWJFpjtMq0rjelvu8Wc9bJ023V61QCYRyvZKOaYnSx4_Cv7oldSHpNf37I-lIFZriUBDg_awbCkyEyOQjarWy0JWRErf0Ilbb9DATj8ZB1_SJWUpx_tBeblGI6fnl9FfqD2Q50UBoKwThpI9qxmwZqQ-CNf6JtvlYPLZpzyey2psIh_FTA",
  services: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlAoLYGlNAMlY1IBEjtcOfhPG5JlOCSznt6Grsj0wm7qpOxuWsXMtbn61r23mvDo4uBptySIlk1sLh8tNpsPc14rnAFPdWexf1WjAtmXQ-mS3w3ltoFKnSLF_h_-RVg2hqOok992IgHcj8ZHnPfeOiCgRtdu20-ppe5ed8fs8uphA5PwQVsPUatAGKMRgBbp8It5Z0FJHlVc5HgWqjxFKd1XbOjeSPZt1vxmOGt1ETT0oMXNPP1e8dWPtBWqeZfiYMkVLNVr-Ywtc"
};

export const MENU_ITEMS: MenuItem[] = [
  // Signature Drink
  { id: 'sig1', name: 'Special Mocktail', description: 'A refreshing tropical blend with mint, lime, and sparkling soda. A burst of flavor in every sip.', price: 'SSP 3,500', category: 'Signature Drink', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop', tag: 'MUST TRY' },

  // Signature Food
  { id: 'sig2', name: 'Special Pizza', description: 'Our chef\'s masterpiece featuring premium toppings, melted mozzarella, and our secret house sauce.', price: 'SSP 8,500', category: 'Signature Food', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop', tag: "CHEF'S SPECIAL" },
  { id: 'sig3', name: 'Chicken Pizza', description: 'Tender grilled chicken chunks, bell peppers, red onions, and sweet corn on a cheesy base.', price: 'SSP 7,500', category: 'Signature Food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop' },

  // BBQ
  { id: 'bbq1', name: 'Goat Choma (1kg)', description: 'Traditional roasted goat meat, served with kachumbari and ugali or chips.', price: 'SSP 6,500', category: 'BBQ & Grill', tag: 'LOCAL FAVORITE' },
  { id: 'bbq2', name: 'Whole Grilled Fish', description: 'Fresh tilapia marinated in lemon garlic herbs, grilled whole.', price: 'SSP 5,800', category: 'BBQ & Grill' },
  { id: 'bbq3', name: 'Pork Ribs (500g)', description: 'Tender pork ribs glazed with our house BBQ sauce.', price: 'SSP 4,200', category: 'BBQ & Grill' },
  { id: 'bbq4', name: 'Chicken Tikka Skewers', description: 'Spiced yogurt marinated chicken cubes grilled on skewers.', price: 'SSP 3,000', category: 'BBQ & Grill' },

  // Starters
  { id: 's1', name: 'Chicken Wings (6pcs)', description: 'Choice of BBQ, Peri-Peri, or Buffalo sauce.', price: 'SSP 2,500', category: 'Starters' },
  { id: 's2', name: 'Greek Salad', description: 'Feta cheese, olives, cucumber, tomato, oregano.', price: 'SSP 2,000', category: 'Starters' },
  { id: 's3', name: 'Samosas (Pair)', description: 'Crispy pastry filled with spiced beef or vegetables.', price: 'SSP 800', category: 'Starters' },

  // Burgers
  { id: 'bur1', name: 'Phoenix Double Cheese', description: 'Double patty, double cheese, caramelized onions.', price: 'SSP 4,200', category: 'Burgers' },
  { id: 'bur2', name: 'Crispy Chicken Burger', description: 'Fried chicken breast, mayo, pickles.', price: 'SSP 3,500', category: 'Burgers' },
  { id: 'bur3', name: 'Beef Shawarma Wrap', description: 'Marinated beef strips, tahini, veggies in tortilla.', price: 'SSP 2,800', category: 'Burgers' },

  // Pizza
  { id: 'p1', name: 'Margherita (L)', description: 'Tomato sauce, mozzarella, fresh basil.', price: 'SSP 3,500', category: 'Pizza' },
  { id: 'p2', name: 'Chicken Periperi (L)', description: 'Spicy chicken, peppers, onions, chili.', price: 'SSP 4,500', category: 'Pizza' },
  { id: 'p3', name: 'Meat Deluxe (L)', description: 'Beef, sausage, pepperoni, ham.', price: 'SSP 5,000', category: 'Pizza' },

  // Desserts
  { id: 'd1', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', price: 'SSP 4,000', category: 'Desserts', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1000&auto=format&fit=crop' },
  { id: 'd2', name: 'New York Cheesecake', description: 'Classic creamy cheesecake with a strawberry reduction topping.', price: 'SSP 3,500', category: 'Desserts', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop' },
  { id: 'd3', name: 'Tropical Fruit Salad', description: 'Fresh seasonal fruits served with honey drizzle and yogurt.', price: 'SSP 2,500', category: 'Desserts', image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1000&auto=format&fit=crop' },
  { id: 'd4', name: 'Ice Cream Sundae', description: 'Three scoops of ice cream with chocolate sauce, nuts, and a cherry.', price: 'SSP 3,000', category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop' },
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    day: 'TUESDAY',
    time: '7 PM - 10 PM',
    title: 'Acoustic Sessions',
    description: 'Unplugged and intimate. Enjoy soulful covers and originals in a relaxed atmosphere.',
    tags: 'ACOUSTIC / SOUL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDku3Anngh1znUMmLtszfugnQC7zD6xlh4Tyrhq3TJScU55mlXHobTqZW08ZM6jbVGTUpMK7Kqn9mWi7OLZPT6Q7L8NA2n86YhJlpYGtKSSD2HouOZMErX7iE-EoL8JHecISCDgj6odZBtDNlP6afkNQM180MdOuswljF12yTV9hNkgaG-vZjwr1G6BQeqGZMIKSwlo6iZDTgMq66wNsINueukkRZYdiLOl4zgrIlKkJWu2ng1su0gijYz10POFBSn2iQPZHhmEudw',
    icon: 'music_note'
  },
  {
    id: 'e2',
    day: 'THURSDAY',
    time: '8 PM - 11 PM',
    title: 'Jazz & Blues',
    description: 'Smooth rhythms and deep blues. Perfect for a classy evening out with cocktails.',
    tags: 'JAZZ / BLUES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB32AUAmQzubkWKt-42AXHBjXxlhzpXcfCzHMZdf7q_dJsCdlC1s3D4sXmqA_9XIer_2lcR0bR-U3Ad9l_l0Z55HTb3HpDRHcVDotS364hWgW-o7oIuVjdalJNO2JaziAJ2-z31J83bEO5fa_Xh-sSvI6naJQooO-5ZTWVQV5jIBCmEdN-KnqnOz8NkJtBdZlUMpOkXtn9Iov8a4jVan40TIUpr2PTRnCpDCf3LURDoncI1_P39eWqxT-FvI_hWqkMMSYyjrrYEBs',
    icon: 'nightlife'
  },
  {
    id: 'e3',
    day: 'SATURDAY',
    time: '9 PM - LATE',
    title: 'THE PHOENIX BAND',
    description: 'High energy, big crowds, and the best hits. The ultimate Saturday night party in Juba.',
    tags: 'TOP 40 / ROCK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCclqTNeccdUZ9DQpCs_4fICIuiR84obIIpn7Y0gj9rBdQKyenxDO3PNRRa_7j2TOeIJKIC6n2oL89jLyR6hv8IiFBFMxnJrNKo194Oy76Ie17A7KpwAZ_nWDhdcV_Rz7IW472_PgsNIum7dMYWsc8wL_1kPEexdpAHcJNksuyhVVvmavzuVd9VNU9ElIQ2D0uEfRSVGgTs3zT9HU0z1-ji6uBgBeNsxtXU-Hw8cwF5t3H4YiQLM7MAam1yY6et6KoR91wxSNbCSJE',
    icon: 'local_fire_department',
    highlight: true
  },
  {
    id: 'e4',
    day: 'SUNDAY',
    time: '6 PM - 10 PM',
    title: 'Afro-Beats & Chill',
    description: 'Wind down your weekend with the best Afro-beats, great food, and chill vibes.',
    tags: 'AFRO-BEATS / DJ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbjc5FDc_0yPFfE7b0WZfWBb9q-5nebzuKgU0pGEbWQq9sbf0Al89QkQuyAF4I9pkQxQdeHckJcgd4-dgSu-SKh6iSQ77AmP9pgMJsmZQWe___MU_oYZMdGaUDdNIZt6Zfrtp-7bpA2aDEXh7Ho5-3ktKURVZfkLmsHioV2PgGKWASh_Aoy0zZAWjSs4-ZuYlt5H_HEWsl1dvEqK-GMQL2ajOvIsbycAAuWcbpgmNo5WNMbHbWkQ_yexp_3nx6PXmbFGMQcxs_agE',
    icon: 'album'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    day: 'MONDAY',
    title: 'Buy 1 Get 1 Pizza',
    time: '11am - 6pm',
    type: 'Day',
    description: 'Order any large pizza and get a second one absolutely free.',
    icon: 'local_pizza',
    accentColor: 'text-primary'
  },
  {
    id: 'o2',
    day: 'MONDAY',
    title: '20% Off Beverages',
    time: '3pm - Late',
    type: 'Night',
    description: 'Enjoy a discount on our entire selection of beers, wines, and spirits.',
    icon: 'local_bar',
    accentColor: 'text-primary'
  },
  {
    id: 'o3',
    day: 'TUESDAY',
    title: 'Standard À La Carte Menu',
    subtitle: "CHEF'S SELECTION",
    time: 'All Day',
    type: 'Day',
    description: 'Join us for our regular award-winning dining experience. Ask your server for the Chef\'s Special.',
    icon: 'restaurant',
    accentColor: 'text-gray-400'
  },
  {
    id: 'o4',
    day: 'WEDNESDAY',
    title: 'Free Cocktail or Mocktail',
    subtitle: 'LADIES NIGHT',
    time: '6pm - 8pm',
    type: 'Night',
    description: 'Gather your girlfriends! All ladies receive a complimentary signature cocktail or mocktail upon arrival.',
    icon: 'local_bar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkrrUYCtcvuDkr663aai5qF_tGXxfibJpGe2CiFr7smxGX0I9kTbDlKRO-EQDXarn2U3-fFgcvlt1Yr0GpbjN682lAuTHcLFUipmAvS06hpQCH7SMtw6Cl-ivIkGT0oEUpHlMawqdk4pvY_9UfStD2G2C7HzMUwgwRf_VJeGGFfAokOIqw7QgyXdTwKQARAwGTvWVRjddieNfqnxON-rdu6_O_jEkzOvUkQwscj6hq5FXjQojNpvk3g1RbV2alkZ1ZqBy1GV3u8Nw',
    accentColor: 'text-pink-500',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    id: 'o5',
    day: 'THURSDAY',
    title: 'Sing for a Free Pitcher',
    subtitle: 'KARAOKE NIGHT',
    time: '4:30pm - 9pm',
    type: 'Night',
    description: 'Take the stage and sing your heart out! Brave participants get a free pitcher of beer for their table.',
    icon: 'mic',
    accentColor: 'text-purple-400',
    gradient: 'from-purple-500 to-indigo-600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'James Deng',
    timeAgo: '2 weeks ago',
    rating: 5,
    text: '"The espresso here is easily the best in Juba. I come here every morning for work and the wifi is reliable too. Staff is always smiling."',
    avatarText: 'JD',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTJlcgt5lieeG7CJU0r642qopkC_V9OsCz_Kcu2Ox9ikZRP2YddqOXdjes-iAmYx-Tmyj2CSV0z_iWaf8YVw2J48j1GMmwb93yjMoDaYSRAMopEiVhdjs8yq1YcwCEVvQTcrCxyH4t2czRQIlF9YEtGKH6zHktsVdLin0rXWdxynVGUQz3fVj4rZnbkEep8n11nl_FNpre4BK4whRon9UDEFeqXqnaXsuWQnOGVQekVxgH-OTakqhweBnpiqjwhhYZL5K2_UT1V7s',
    tags: ['Great coffee']
  },
  {
    id: 'r2',
    name: 'Sarah Akol',
    timeAgo: '1 month ago',
    rating: 4.5,
    text: '"Celebrated my birthday here last night. The team went above and beyond to make it special. The cake was delicious!"',
    avatarText: 'SA',
    tags: ['Friendly service']
  },
  {
    id: 'r3',
    name: 'Grace L.',
    timeAgo: '3 days ago',
    rating: 5,
    text: '"You MUST try the chocolate lava cake. It\'s out of this world. The ambiance in the evening is perfect for a date night."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJa9-9JCGAdyjLn1xvTabJ7s0Q0ZnYXeBOV6tGAnF9XpZqGSojSUUF8CPH7dKPSHKJdmXlkAff8C3tMaYNR3V-6sbcAeiUUsF8LzpV_uYggKw_kFNa30yxx1LEoIyg69vKm3BfvhL2r-bNOFcamDZSmQSJfpg1N85Mk0VF6IGoi3x-orGfzvUrne9afwgh3Yp3FJLZMwyli0613FWmG8o1G55RMGy7n1V_5xzXMgTJhekUKi2bElkv97KBiz2r4T8Yr_PZhyN0QDQ',
    tags: ['Great desserts']
  },
  {
    id: 'r4',
    name: 'Michael K.',
    timeAgo: '2 months ago',
    rating: 4,
    text: '"Solid place for lunch. The outdoor seating is nice when it\'s not too hot. Food came out fast."',
    avatarText: 'MK',
  },
   {
    id: 'r5',
    name: 'David O.',
    timeAgo: '1 week ago',
    rating: 5,
    text: '"The decor is amazing, very modern but still feels African. Loved the grilled tilapia. Highly recommend!"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH9zSPfY2dSoMa_KyWdJYgKjCYJir8K9755T5Guo7QxRdVarIUD4WL1Xlx-VhDqBQsA2s_clwPJudiFPDWgY5MWVx-W6ATg-4OqPNoXEHop8Btq-QG7_eYIWkFU_FvGh-1pkk1Mbz841LbvvpGiOtPM2g9KNI-CI6BGXhI-lVhiwAcSATaWA3mJcWZr6ni9CPfKTHaPEj2IldqO_VtIkgQ7afCxTmQ6BpCA_nLB7q1pShBLCRkur-Mgo8PKkansc1lRG_UgIsYQYA',
    tags: ['Cosy atmosphere']
  },
];
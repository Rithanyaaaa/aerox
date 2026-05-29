export interface IndustryItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  stats: { value: string; label: string }[];
  equipment: string[];
  highlights: string[];
  color: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: 1,
    slug: 'energy',
    title: 'Energy — Oil & Gas',
    subtitle: 'Industries We Serve',
    description:
      'AEROX delivers certified aerial work platforms built for the extreme demands of oil refineries, petrochemical plants, and offshore facilities — where safety and uptime are non-negotiable.',
    longDescription:
      'Operating in oil & gas environments requires equipment that meets the strictest safety certifications and can withstand harsh chemical exposure, extreme temperatures, and continuous heavy-duty cycles. Our ATEX-rated and explosion-proof aerial platforms are trusted by leading energy companies for turnaround maintenance, flare stack inspections, and routine facility upkeep.',
    image: '/energyy.jpg',
    stats: [
      { value: '120+', label: 'Energy Clients' },
      { value: 'ATEX', label: 'Certified Units' },
      { value: '24/7', label: 'Site Support' },
    ],
    equipment: ['ATEX Scissor Lifts', 'Explosion-Proof Boom Lifts', 'Diesel Telehandlers', 'Mast Climbers'],
    highlights: [
      'ATEX Zone 1 & Zone 2 certified equipment',
      'Corrosion-resistant coatings for offshore use',
      'Dedicated on-site service engineers',
      'Full compliance with OSHA & NFPA standards',
    ],
    color: '#CC0000',
  },
  {
    id: 2,
    slug: 'aviation',
    title: 'Aviation & Airports',
    subtitle: 'Industries We Serve',
    description:
      'From aircraft maintenance docks to terminal construction, AEROX provides precision access equipment that meets the exacting standards of the aviation industry worldwide.',
    longDescription:
      'Aviation environments demand equipment with exceptional precision, minimal footprint, and zero contamination risk. Our electric and hybrid aerial platforms are used by MRO facilities, airport authorities, and ground handling companies for aircraft maintenance, terminal fit-out, runway lighting, and hangar operations. Non-marking tyres and low-emission drives protect sensitive surfaces and air quality.',
    image: '/truck2.jpg',
    stats: [
      { value: '80+', label: 'Airport Projects' },
      { value: '50+', label: 'Airlines Served' },
      { value: '100%', label: 'Electric Fleet' },
    ],
    equipment: ['Electric Scissor Lifts', 'Vertical Mast Lifts', 'Articulating Boom Lifts', 'Aircraft Docking Systems'],
    highlights: [
      'Non-marking tyres — safe on all hangar floors',
      'Zero-emission electric drives for enclosed spaces',
      'Compact designs for narrow hangar aisles',
      'FOD-free operation protocols',
    ],
    color: '#CC0000',
  },
  {
    id: 3,
    slug: 'construction',
    title: 'Construction',
    subtitle: 'Industries We Serve',
    description:
      'AEROX powers construction sites of every scale — from high-rise towers to civil infrastructure — with a comprehensive fleet of rough-terrain and heavy-duty aerial platforms.',
    longDescription:
      'Construction is the backbone of our business. Our rough-terrain boom lifts, telehandlers, and scissor lifts are engineered to handle the punishing demands of active construction sites. With 4WD drivetrains, high ground clearance, and robust steel frames, AEROX equipment keeps your crews working safely at height regardless of site conditions, weather, or terrain.',
    image: '/truck.jpg',
    stats: [
      { value: '250+', label: 'Active Sites' },
      { value: '40m+', label: 'Max Reach' },
      { value: '4WD', label: 'All-Terrain Fleet' },
    ],
    equipment: ['Rough Terrain Boom Lifts', 'Telehandlers', 'Diesel Scissor Lifts', 'Spider Lifts'],
    highlights: [
      'All-terrain 4WD platforms for any site condition',
      'Gradeability up to 45% on rough ground',
      'Rapid deployment and on-site servicing',
      'Full IPAF & PASMA compliance',
    ],
    color: '#CC0000',
  },
  {
    id: 4,
    slug: 'industrial',
    title: 'Industrial Solutions',
    subtitle: 'Industries We Serve',
    description:
      'Manufacturing plants, steel mills, and heavy industrial facilities rely on AEROX for safe, efficient access to machinery, overhead structures, and production line equipment.',
    longDescription:
      'Industrial facilities present unique access challenges — tight spaces, heavy overhead structures, continuous shift operations, and strict safety protocols. AEROX industrial access solutions are designed to integrate seamlessly into production environments with minimal disruption. Our compact electric platforms, mast climbers, and modular scaffolding systems keep your maintenance teams productive and safe around the clock.',
    image: '/scissors.jpg',
    stats: [
      { value: '300+', label: 'Plant Installations' },
      { value: '3-Shift', label: 'Operation Ready' },
      { value: 'ISO', label: '9001 Certified' },
    ],
    equipment: ['Electric Scissor Lifts', 'Vertical Mast Lifts', 'Mast Climbers', 'Modular Platforms'],
    highlights: [
      'Designed for continuous 3-shift operations',
      'Compact footprint for tight production areas',
      'Spark-resistant options for hazardous zones',
      'Preventive maintenance contracts available',
    ],
    color: '#CC0000',
  },
  {
    id: 5,
    slug: 'logistics',
    title: 'Logistics & Storage',
    subtitle: 'Industries We Serve',
    description:
      'Modern distribution centres and warehouses demand fast, safe, and efficient access solutions. AEROX electric lifts keep your operations moving with zero emissions and maximum uptime.',
    longDescription:
      'The logistics and warehousing sector operates at relentless pace — every minute of downtime costs money. AEROX electric scissor lifts and vertical mast lifts are purpose-built for high-throughput warehouse environments. Ultra-narrow designs navigate tight racking aisles, non-marking tyres protect polished floors, and fast-charge battery systems minimise downtime between shifts.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80',
    stats: [
      { value: '180+', label: 'Warehouse Clients' },
      { value: '760mm', label: 'Min Aisle Width' },
      { value: '8hr', label: 'Fast Charge' },
    ],
    equipment: ['Narrow Aisle Scissor Lifts', 'Vertical Mast Lifts', 'Order Pickers', 'Pallet Stackers'],
    highlights: [
      'Ultra-narrow 760 mm width for tight aisles',
      'Non-marking tyres — no floor damage',
      'Fast-charge 8-hour battery systems',
      'Telematics for fleet management',
    ],
    color: '#CC0000',
  },
];

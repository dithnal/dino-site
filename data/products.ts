export interface Product {
  id: string;
  category: 'Motor' | 'ESC';
  name: string;
  price: string;
  description: string;
  specs: Record<string, string>;
  image: string;
}

export const products: Product[] = [
  // --- MOTORS ---
  {
    id: "motor-1000",
    category: "Motor",
    name: "A2212 1000KV Brushless Motor",
    price: "Rs. 3,200",
    description: "Ideal for 450mm Quads and slow-flying RC planes. High torque.",
    specs: { KV: "1000", Cells: "2S-3S LiPo", MaxThrust: "800g", Shaft: "3.17mm" },
    image: "/images/motor-1000.jpg"
  },
  {
    id: "motor-1400",
    category: "Motor",
    name: "A2212 1400KV Brushless Motor",
    price: "Rs. 3,400",
    description: "The best all-rounder for foamie planes and medium drones.",
    specs: { KV: "1400", Cells: "2S-3S LiPo", MaxThrust: "950g", Shaft: "3.17mm" },
    image: "/images/motor-1400.jpg"
  },
  {
    id: "motor-2200",
    category: "Motor",
    name: "A2212 2200KV Brushless Motor",
    price: "Rs. 3,600",
    description: "High speed motor for racing wings and fast RC jets.",
    specs: { KV: "2200", Cells: "2S-3S LiPo", MaxThrust: "700g (High Speed)", Shaft: "3.17mm" },
    image: "/images/motor-2200.jpg"
  },
  {
    id: "motor-2400",
    category: "Motor",
    name: "A2212 2450KV Brushless Motor",
    price: "Rs. 3,800",
    description: "Extreme RPM for small, high-speed racing models.",
    specs: { KV: "2450", Cells: "2S-3S LiPo", MaxThrust: "650g", Shaft: "3.17mm" },
    image: "/images/motor-2450.jpg"
  },

  // --- ESCs ---
  {
    id: "esc-20a",
    category: "ESC",
    name: "20A Brushless ESC",
    price: "Rs. 2,100",
    description: "Lightweight ESC for small motors and park flyers.",
    specs: { Current: "20A", Burst: "25A", BEC: "5V/2A", Cells: "2S-3S" },
    image: "/images/esc-20a.jpg"
  },
  {
    id: "esc-30a",
    category: "ESC",
    name: "30A Brushless ESC",
    price: "Rs. 2,600",
    description: "Standard ESC for A2212 series motors. Reliable performance.",
    specs: { Current: "30A", Burst: "40A", BEC: "5V/2A", Cells: "2S-4S" },
    image: "/images/esc-30a.jpg"
  },
  {
    id: "esc-40a",
    category: "ESC",
    name: "40A Brushless ESC",
    price: "Rs. 3,500",
    description: "Heavy duty ESC for high KV motors and larger props.",
    specs: { Current: "40A", Burst: "55A", BEC: "5V/3A", Cells: "2S-4S" },
    image: "/images/esc-40a.jpg"
  },
  {
    id: "esc-60a",
    category: "ESC",
    name: "60A Pro Brushless ESC",
    price: "Rs. 5,200",
    description: "Professional grade ESC with high heat dissipation.",
    specs: { Current: "60A", Burst: "80A", BEC: "5V/5A", Cells: "2S-6S" },
    image: "/images/esc-60a.jpg"
  }
];
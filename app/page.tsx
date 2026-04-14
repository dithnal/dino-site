import { Star, ShieldCheck, Truck, Medal } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 flex flex-col items-start">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 max-w-2xl">
            DINO. Gear That Keeps Up.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-xl">
            Premium, durable, and functional daily essentials designed for the modern commute.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105">
            Shop Now
          </button>
          <div className="mt-8 flex items-center space-x-2 text-sm text-slate-300">
            <div className="flex text-orange-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
            <span>10,000+ happy customers</span>
          </div>
        </div>
      </section>

      {/* Trust & Benefits */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Truck className="text-emerald-500" size={32} />
            <h3 className="font-bold">Fast, Free Shipping</h3>
            <p className="text-sm text-slate-500">On all orders over $100</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <ShieldCheck className="text-emerald-500" size={32} />
            <h3 className="font-bold">Premium Quality</h3>
            <p className="text-sm text-slate-500">Carefully selected for the best experience</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Medal className="text-emerald-500" size={32} />
            <h3 className="font-bold">Exclusive Collection</h3>
            <p className="text-sm text-slate-500">Limited edition items</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand Side */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">DINO</h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">
              Premium Store • Sri Lanka
            </p>
          </div>

          {/* CEO Side */}
          <div className="flex flex-col items-center md:items-end">
            <div className="bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
              Founder & CEO
            </div>
            <h3 className="text-2xl font-black uppercase italic tracking-tight text-gray-900">
              Dithnal Dekli
            </h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-medium">
              © 2026 DINO Industries. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
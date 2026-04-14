"use client";
import { products } from '../../../data/products';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  
  // This line defines "product" so the error goes away!
  const product = products.find((p) => p.id === params.id);

  if (!product) return <div className="p-10">Product not found.</div>;

  const handleWhatsAppOrder = () => {
    const message = `Hi! I want to order the ${product.name}. Is it in stock?`;
    window.open(`https://wa.me/94772119290?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-10 min-h-screen bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Product Photo Section */}
        <div className="relative h-[400px] bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-contain w-full h-full p-8"
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400?text=Image+Not+Found"; }}
          />
        </div>

        {/* Info Section */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{product.category}</span>
          <h1 className="text-4xl font-black mt-2 mb-4 italic uppercase">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-800 mb-6">{product.price}</p>
          
          <div className="bg-black text-white p-6 rounded-2xl mb-8 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-tighter mb-4 border-b border-gray-700 pb-2 text-gray-400">Technical Specifications</h3>
            <ul className="space-y-3 font-mono text-sm">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between border-b border-gray-800 pb-1">
                  <span className="text-gray-500 uppercase">{key}:</span>
                  <span className="font-bold text-green-400">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={handleWhatsAppOrder} className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg">
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
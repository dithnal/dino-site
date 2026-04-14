"use client";
import { useState } from 'react';
import { products } from '../../data/products';
import Link from 'next/link';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-10 min-h-screen bg-white text-black">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Dino</h1>
        
        <input
          type="text"
          placeholder="Search here"
          className="border-2 border-black px-6 py-2 rounded-full outline-none w-full md:w-64 focus:bg-gray-50 transition"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group border-2 border-gray-100 rounded-3xl p-5 hover:border-black transition-all duration-300">
              
              {/* --- IMAGE SECTION FIXED BELOW --- */}
              <div className="bg-gray-50 h-64 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300?text=Image+Not+Found";
                  }}
                />
              </div>
              {/* ---------------------------------- */}

              <span className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded uppercase mb-2 inline-block">
                {item.category}
              </span>
              <h2 className="text-xl font-black uppercase leading-tight mb-1">{item.name}</h2>
              <p className="text-gray-600 mb-6 font-bold">{item.price}</p>
              
              <Link href={`/products/${item.id}`} className="block text-center bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
                View Specs & Order
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg italic">No parts found matching your search.</p>
        </div>
      )}
    </div>
  );
}
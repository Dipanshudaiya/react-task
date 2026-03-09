import { useCartStore } from '../store/useCartStore'
import { ShoppingCart } from 'lucide-react'


function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
 
  return (
    <div className="group bg-gray-200 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col h-full">
     
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-700 px-3 py-1 rounded-full shadow-sm z-10">
        {product.category}
      </div>

      <div className="overflow-hidden relative pb-[100%]">
        <img 
          src={product.image || ""} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-1 truncate">
          {product.name}
        </h2>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-2xl font-black text-indigo-600">
            ₹{product.price}
          </p>

          <button 
            onClick={() => addToCart(product)} 
            className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;

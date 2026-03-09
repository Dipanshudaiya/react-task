import { useCartStore } from '../store/useCartStore';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Cart() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleBookNow = () => {
    console.log("Cart Data (Final Booking):", { items, total });
    alert("Booking Confirmed!");
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {items.map((item, index) => (
                <li key={`${item.id}-${index}`} className="flex justify-between items-center px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-gray-800">₹{total}</span>
              </div>
              
              <button 
                onClick={handleBookNow}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default Cart;

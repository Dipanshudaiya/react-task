import { useState, useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { products as mockProducts } from "../data/products"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(mockProducts)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
     <Header />
     <Hero />
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="flex justify-between items-end mb-8">
         <div>
           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Products</h2>
           <p className="mt-2 text-lg text-gray-500">Discover our newest arrivals and top picks.</p>
         </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {products.map((product) => (
           <ProductCard
             key={product.id}
             product={product}
           />
         ))}
       </div>
     </main>
     <Footer />
    </div>
  )
}

export default Home

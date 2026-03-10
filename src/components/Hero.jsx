import { ArrowRight } from 'lucide-react';
import heroBanner from '../assets/hero-banner.png';

function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Premium Men's Grooming" 
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>    
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
          Elevate Your <span className="text-indigo-500 font-outline-1">Grooming</span> Routine
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Experience the pinnacle of men's skincare. Premium essentials crafted for the modern man who demands nothing but the best.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-indigo-500/30 group">
            Shop Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
            Our Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}

export default Hero;

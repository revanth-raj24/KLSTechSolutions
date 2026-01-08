import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-kls-primary/5 -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Emotional Hook - Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kls-dark mb-6 leading-tight">
            Smart Living, <br />
            <span className="text-kls-primary">Engineered</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Transform with Smart Automation. KLS brings the future to your doorstep.
          </p>
        </motion.div>

        {/* The "Split" Cards - Entry Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          
          {/* Card 1: Product Focus (Water Monitor) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-kls-primary/30 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={100} className="text-kls-primary" />
            </div>
            <h3 className="text-xl font-bold text-kls-dark mb-2 flex items-center gap-2">
              <span className="bg-blue-100 p-2 rounded-lg text-kls-primary"><Activity size={20} /></span>
              Explore Water Monitor
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Never run out of water again. Real-time tracking, leak detection, and automated motor control.
            </p>
            <div className="flex items-center text-kls-primary font-semibold text-sm group-hover:gap-2 transition-all">
              Explore Product <ArrowRight size={16} className="ml-1" />
            </div>
          </motion.div>

          {/* Card 2: Service Focus (Custom Solutions) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group bg-kls-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-800 relative overflow-hidden cursor-pointer"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={100} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="bg-white/10 p-2 rounded-lg text-white"><Cpu size={20} /></span>
              Build Custom Solution
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Have a unique automation problem? We build tailored IoT & electronics solutions for businesses.
            </p>
            <div className="flex items-center text-white font-semibold text-sm group-hover:gap-2 transition-all">
              Consult an Engineer <ArrowRight size={16} className="ml-1" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
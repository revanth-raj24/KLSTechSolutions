import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Get instant alerts and live data from your connected devices. Monitor everything from anywhere, anytime.',
      color: 'text-kls-primary',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Brain,
      title: 'AI-Driven Insights',
      description: 'Leverage machine learning to predict issues, optimize usage, and automate decision-making processes.',
      color: 'text-kls-primary',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'End-to-end encryption and secure protocols ensure your data and devices remain protected at all times.',
      color: 'text-kls-primary',
      bgColor: 'bg-blue-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-kls-dark mb-4">
            Built for the Future
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with enterprise-grade reliability
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-kls-primary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${feature.color} w-7 h-7`} />
                </div>
                <h3 className="text-xl font-bold text-kls-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;


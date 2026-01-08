import React from 'react';
import Navbar from './components/layout/Navbar';
import AppRouter from './router/AppRouter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;


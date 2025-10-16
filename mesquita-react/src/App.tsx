import React, { useState } from 'react';
import './App.sass';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { title: 'Pintura Residencial', description: 'Pintura de alta qualidade para casas e apartamentos.' },
  { title: 'Pintura Comercial', description: 'Serviços para escritórios, lojas e empresas.' },
  { title: 'Reparos Gerais', description: 'Reparos em paredes, tetos e estruturas.' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mesquita Pinturas e Reparos</h1>
        <p>Transforme seu espaço com qualidade e profissionalismo</p>
        <p>Especialista em pintura e reformas residenciais e comerciais.</p>
      </header>

      <section id="services">
        <h2>Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="carousel">
        <h2>Galeria</h2>
        <div className="carousel">
          <img src="/src/Rotativo 1.png" alt={`Slide ${currentSlide + 1}`} />
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Mesquita Pinturas e Reparos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

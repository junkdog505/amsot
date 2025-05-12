<template>
    <div class="hero">
      <div class="hero-background">
        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>
        <div class="glow-point"></div>
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Hola, soy Cristian</h1>
          <p class="hero-description">
            Desarrollador Full Stack apasionado por crear experiencias digitales 
            excepcionales. Especializado en Vue.js y tecnologías modernas, 
            transformo ideas en aplicaciones web robustas y elegantes.
          </p>
          <div class="hero-buttons">
            <router-link to="/conocimientos" class="btn btn-primary">
              Ver mis habilidades
            </router-link>
            <router-link to="/experiencia" class="btn btn-secondary">
              Mi experiencia
            </router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="/photo.png" alt="Tu foto profesional" />
          <div class="image-decoration"></div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Descubre más</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 2rem;
  }
  
  .hero-background {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #0a0e27;
    overflow: hidden;
  }
  
  /* Estrellas pequeñas de fondo */
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
  }
  
  .star-1 {
    top: 20%;
    left: 15%;
    animation: twinkle 3s ease-in-out infinite;
  }
  
  .star-2 {
    top: 60%;
    left: 70%;
    animation: twinkle 4s ease-in-out infinite 0.5s;
  }
  
  .star-3 {
    top: 30%;
    left: 80%;
    animation: twinkle 3.5s ease-in-out infinite 1s;
  }
  
  .star-4 {
    top: 70%;
    left: 25%;
    animation: twinkle 4.5s ease-in-out infinite 1.5s;
  }
  
  .star-5 {
    top: 45%;
    left: 50%;
    animation: twinkle 3s ease-in-out infinite 2s;
  }
  
  /* Punto brillante principal */
  .glow-point {
    position: absolute;
    top: 40%;
    left: 60%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, 
      rgba(0, 153, 255, 0.3) 0%, 
      rgba(0, 102, 204, 0.2) 20%,
      rgba(0, 102, 204, 0.1) 40%,
      transparent 70%
    );
    filter: blur(40px);
    animation: glow 8s ease-in-out infinite;
  }
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
  }
  
  @keyframes glow {
    0% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    20% {
      opacity: 0.7;
      transform: scale(1);
    }
    40% {
      opacity: 0.4;
      transform: scale(0.9);
    }
    60% {
      opacity: 0.9;
      transform: scale(1.1);
    }
    80% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }
  
  .hero-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    z-index: 1;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    animation: heroTitle 1.5s ease-out;
    background: linear-gradient(135deg, #ffffff 0%, #b3d9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    text-shadow: 0 0 20px rgba(0, 153, 255, 0.3);
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
    animation: fadeInUp 1s ease-out 0.2s both;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease-out 0.4s both;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  
  .btn-primary {
    background: white;
    color: #0066cc;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn-secondary:hover {
    background: white;
    color: #0066cc;
  }
  
  .hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    animation: imageFloat 3s ease-in-out infinite;
  }
  
  .hero-image img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5),
                0 0 80px rgba(0, 153, 255, 0.1);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .image-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 153, 255, 0.3);
    border-radius: 20px;
    max-width: 350px;
    background: radial-gradient(circle at center, 
      rgba(0, 153, 255, 0.05) 0%, 
      transparent 70%
    );
  }
  
  @keyframes imageFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
    animation: bounce 2s infinite;
  }
  
  @keyframes heroTitle {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
      filter: blur(10px);
    }
    50% {
      filter: blur(0px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  /* Tablets: 768px - 1024px */
  @media (min-width: 768px) {
    .hero-container {
      grid-template-columns: 1fr 1fr;
    }
  
    .hero-content {
      text-align: left;
    }
  
    .hero-title {
      font-size: 3rem;
    }
  
    .hero-description {
      font-size: 1.2rem;
      margin-left: 0;
      margin-right: 0;
    }
  
    .hero-buttons {
      justify-content: flex-start;
    }
  
    .hero-image img,
    .image-decoration {
      max-width: 400px;
    }
  }
  
  /* Pantallas grandes: más de 1200px */
  @media (min-width: 1200px) {
    .hero-container {
      gap: 4rem;
    }
  
    .hero-title {
      font-size: 4rem;
    }
  
    .hero-description {
      font-size: 1.3rem;
    }
  
    .btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }
  
    .hero-image img,
    .image-decoration {
      max-width: 500px;
    }
  }
  
  /* Móviles pequeños: 320px - 480px */
  @media (max-width: 480px) {
    .hero {
      padding: 1rem;
    }
  
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-description {
      font-size: 1rem;
    }
  
    .hero-buttons {
      flex-direction: column;
      width: 100%;
    }
  
    .btn {
      width: 100%;
      text-align: center;
    }
  
    .hero-image img,
    .image-decoration {
      max-width: 280px;
    }
  }
  </style>
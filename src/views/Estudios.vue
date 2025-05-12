<template>
    <div class="page-container">
      <h1 class="page-title">Mis Estudios</h1>
      <div class="timeline">
        <div class="timeline-item" v-for="estudio in estudios" :key="estudio.id">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>{{ estudio.titulo }}</h3>
            <h4>{{ estudio.institucion }}</h4>
            <p class="fecha">{{ estudio.fecha }}</p>
            <p>{{ estudio.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Estudios',
    data() {
      return {
        estudios: [
          {
            id: 1,
            titulo: 'Ingeniería en Sistemas',
            institucion: 'Universidad XYZ',
            fecha: '2018 - 2022',
            descripcion: 'Especialización en desarrollo de software y arquitectura de sistemas.'
          },
          {
            id: 2,
            titulo: 'Certificación en Vue.js',
            institucion: 'Vue School',
            fecha: '2023',
            descripcion: 'Curso avanzado de Vue.js 3 con Composition API.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .page-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 6rem 2rem 2rem;
  }
  
  .page-title {
    font-size: 3rem;
    color: #333;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .timeline {
    position: relative;
    padding-left: 2rem;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
  }
  
  .timeline-marker {
    position: absolute;
    left: -2rem;
    top: 0;
    width: 12px;
    height: 12px;
    background: #0066cc;
    border-radius: 50%;
    transform: translateX(-5px);
  }
  
  .timeline-content {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .timeline-content:hover {
    transform: translateX(5px);
  }
  
  .timeline-content h3 {
    color: #0066cc;
    margin-bottom: 0.5rem;
  }
  
  .timeline-content h4 {
    color: #666;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
  
  .fecha {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  </style>
<template>
    <div class="page-container">
      <h1 class="page-title">Experiencia Laboral</h1>
      <div class="experience-list">
        <div class="experience-card" v-for="trabajo in trabajos" :key="trabajo.id">
          <div class="card-header">
            <h2>{{ trabajo.cargo }}</h2>
            <span class="periodo">{{ trabajo.periodo }}</span>
          </div>
          <h3>{{ trabajo.empresa }}</h3>
          <p class="descripcion">{{ trabajo.descripcion }}</p>
          <div class="technologies">
            <span class="tech-tag" v-for="tech in trabajo.tecnologias" :key="tech">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExperienciaLaboral',
    data() {
      return {
        trabajos: [
          {
            id: 1,
            cargo: 'Desarrollador Full Stack Senior',
            empresa: 'Tech Solutions Inc.',
            periodo: 'Enero 2022 - Presente',
            descripcion: 'Desarrollo de aplicaciones web empresariales usando Vue.js y Node.js. Liderazgo de equipo de 5 desarrolladores.',
            tecnologias: ['Vue.js', 'Node.js', 'MongoDB', 'AWS', 'Docker']
          },
          {
            id: 2,
            cargo: 'Desarrollador Frontend',
            empresa: 'Digital Agency XYZ',
            periodo: 'Junio 2020 - Diciembre 2021',
            descripcion: 'Creación de interfaces de usuario responsivas y accesibles. Implementación de mejores prácticas de UX/UI.',
            tecnologias: ['React', 'JavaScript', 'Sass', 'Git', 'Figma']
          },
          {
            id: 3,
            cargo: 'Desarrollador Junior',
            empresa: 'StartUp Innovation',
            periodo: 'Enero 2019 - Mayo 2020',
            descripcion: 'Desarrollo y mantenimiento de aplicaciones web. Colaboración en proyectos ágiles con metodología Scrum.',
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
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
  
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .experience-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 2rem;
    transition: all 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .experience-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }
  
  .card-header h2 {
    color: #0066cc;
    font-size: 1.5rem;
  }
  
  .periodo {
    color: #666;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  
  .experience-card h3 {
    color: #666;
    font-weight: normal;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  
  .descripcion {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    background: #f0f7ff;
    color: #0066cc;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  @media (max-width: 600px) {
    .card-header {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .periodo {
      font-size: 0.85rem;
    }
  }
  </style>
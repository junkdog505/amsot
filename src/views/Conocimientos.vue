<template>
    <div class="page-container">
      <h1 class="page-title">Mis Conocimientos</h1>
      <div class="skills-grid">
        <div class="skill-category" v-for="categoria in categorias" :key="categoria.nombre">
          <h2>{{ categoria.nombre }}</h2>
          <div class="skills">
            <div class="skill" v-for="skill in categoria.skills" :key="skill.nombre">
              <span class="skill-name">{{ skill.nombre }}</span>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.nivel + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Conocimientos',
    data() {
      return {
        categorias: [
          {
            nombre: 'Frontend',
            skills: [
              { nombre: 'Vue.js', nivel: 90 },
              { nombre: 'React', nivel: 75 },
              { nombre: 'JavaScript', nivel: 85 },
              { nombre: 'HTML/CSS', nivel: 95 },
              { nombre: 'TypeScript', nivel: 70 }
            ]
          },
          {
            nombre: 'Backend',
            skills: [
              { nombre: 'Node.js', nivel: 80 },
              { nombre: 'Python', nivel: 75 },
              { nombre: 'PHP', nivel: 65 },
              { nombre: 'MySQL', nivel: 85 },
              { nombre: 'MongoDB', nivel: 70 }
            ]
          },
          {
            nombre: 'Herramientas',
            skills: [
              { nombre: 'Git', nivel: 90 },
              { nombre: 'Docker', nivel: 70 },
              { nombre: 'VS Code', nivel: 95 },
              { nombre: 'Figma', nivel: 60 },
              { nombre: 'Postman', nivel: 85 }
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem 2rem;
  }
  
  .page-title {
    font-size: 3rem;
    color: #333;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
  }
  
  .skill-category {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  .skill-category h2 {
    color: #0066cc;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .skills {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .skill {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .skill-name {
    font-weight: 500;
    color: #666;
  }
  
  .skill-bar {
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #0066cc, #0099ff);
    border-radius: 4px;
    transition: width 1s ease-out;
    animation: fillBar 1s ease-out;
  }
  
  @keyframes fillBar {
    from {
      width: 0;
    }
  }
  </style>
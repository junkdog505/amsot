<template>
  <div id="app">
    <!-- Loader de transición -->
    <transition name="loader">
      <div v-if="loading" class="page-loader">
        <div class="loader-spinner"></div>
      </div>
    </transition>
    
    <nav class="navbar" v-if="!isHome">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/estudios" class="nav-link">Estudios</router-link>
      <router-link to="/conocimientos" class="nav-link">Conocimientos</router-link>
      <router-link to="/experiencia" class="nav-link">Experiencia Laboral</router-link>
    </nav>
    
    <router-view v-slot="{ Component, route }">
      <transition 
        :name="transitionName" 
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <component 
          :is="Component" 
          :key="route.path"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'fade-slide',
      previousRoute: null,
      loading: false
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    }
  },
  watch: {
    '$route.path'(to, from) {
      // Activar loader
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 300)
      
      // Determinar la dirección de la transición
      const toDepth = this.getRouteDepth(to)
      const fromDepth = this.getRouteDepth(from)
      
      if (to === '/') {
        this.transitionName = 'zoom-fade'
      } else if (from === '/') {
        this.transitionName = 'slide-up'
      } else if (toDepth < fromDepth) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  methods: {
    getRouteDepth(path) {
      const routes = ['/', '/estudios', '/conocimientos', '/experiencia']
      return routes.indexOf(path)
    },
    beforeEnter(el) {
      el.style.transformOrigin = 'center center'
    },
    enter(el) {
      el.style.opacity = '1'
    },
    leave(el) {
      el.style.opacity = '0'
    }
  },
  mounted() {
    // Preloader inicial
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

#app {
  min-height: 100vh;
  overflow-x: hidden;
}

/* Loader de página */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 102, 204, 0.2);
  border-top-color: #0066cc;
  border-radius: 50%;
  animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.3s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #0066cc;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #0066cc;
}

/* Transiciones de páginas */
.fade-slide-enter-active,
.fade-slide-leave-active,
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Fade Slide (transición por defecto) */
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

/* Slide Up (desde home a otras páginas) */
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100px) scale(0.9);
}

/* Slide Left (navegación hacia adelante) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Slide Right (navegación hacia atrás) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Zoom Fade (volviendo a home) */
.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(1.5);
}

.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

/* Animación adicional para el contenido de las páginas */
.page-container {
  animation: pageLoad 0.8s ease-out;
}

@keyframes pageLoad {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Prevent horizontal scroll during transitions */
body {
  overflow-x: hidden;
}

/* Efecto de onda en los botones */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}
</style>
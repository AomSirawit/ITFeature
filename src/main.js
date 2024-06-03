import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VueSmoothScroll from 'vue3-smooth-scroll';

const app = createApp(App);

// Register the plugin with optional configuration
app.use(VueSmoothScroll, {
  duration: 500, // Duration of the scroll animation in milliseconds
  offset: -20, // Offset from the top (useful if you have a fixed header)
  easingFunction: 'easeInOutCubic' // Use an easing function for the animation
});

app.mount('#app');

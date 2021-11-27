# vue3-directive-long-press

Detected long press

# Features

- Сallback is triggered when the keys are held down for a long time

# Installation

    npm install vue3-directive-long-press

# Usage
### App.vue
```html
<template>
  <input v-long-press="longPress" />
</template>

<script>
export default {
  methods: {
    longPress() {
      console.log('detect');
    }
  }
}
</script>
```
### main.ts
```js
import { createApp } from 'vue';
import App from './App.vue';
import LongPress from 'vue3-directive-long-press';

createApp(App)
  .use(LongPress)
  .mount('#app');
```

# License

<a href="https://raw.githubusercontent.com/Kutuzovska/vue3-directive-long-press/main/LICENSE">MIT</a> License

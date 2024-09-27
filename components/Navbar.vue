<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="text-lg font-bold text-gray-700">
            Inmei
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <!-- Menu -->
        <nav :class="{'block': isOpen, 'hidden': !isOpen}" class="absolute bg-white top-full inset-x-0 lg:relative lg:flex lg:items-center lg:space-x-6">
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Inicio</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Serviços</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Sobre</a>
          <a href="#" class="block px-3 py-2 text-gray-700 hover:text-gray-900">Contato</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
/* Você pode adicionar estilos adicionais aqui, se necessário */
</style>

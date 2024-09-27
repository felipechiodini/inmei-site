<template>
    <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="onsubmit" class="border p-3">
            <h2>Login</h2>
            <input class="block mb-2 text-sm font-medium text-gray-900 dark:text-white p-4 border rounded" placeholder="Email" type="text">
            <input class="block mb-2 text-sm font-medium text-gray-900 dark:text-white p-4 border rounded" placeholder="Password" type="password">
            <button class="bg-[#F1A501] text-white p-3 text-sm font-poppins">
                Entrar
            </button>
        </form>
    </div>
</template>

<script>

export default {
    methods: {
        onsubmit() {
            console.log('submit')
        }
    }
}
</script>
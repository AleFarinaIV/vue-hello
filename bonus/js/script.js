const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello World',
            random_image: {
                name: 'random-image',
                img: "https://picsum.photos/200/300"
            }
        }
    },
}).mount('#app')
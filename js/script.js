const {createApp} = Vue;

createApp({
    data(){
        return {
            message: 'Hello VueJs!',
            img: 'https://www.improntalaquila.com/wp-content/uploads/2022/11/boolean.png'
        }
    }
}).mount('#app');
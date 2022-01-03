const app = Vue.createApp({
    data() {
        return {
            firstName: 'vic',
            lastName: 'dare',
            gender:'male',
            email:'victor75@yahoo.com'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()


            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].name.gender
            this.email = results[0].name.email

        },
    },
})

app.mount('#app')
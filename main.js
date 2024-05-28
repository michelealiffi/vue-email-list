'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        };
    },

    methods: {
        apiCall() {
            for(let i = 0; i < 10; i++) {
                axios.get(this.url).then((response) => {
                    const request = response.data.response;
                    this.emails.push(request);
                });
            }
        },
    },

    mounted() {
        this.apiCall();
    },
}).mount('#app');
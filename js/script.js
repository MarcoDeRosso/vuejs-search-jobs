Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        jobs: [{
                id: 1,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
            },
            {
                id: 2,
                company: 'McBooleans',
                position: 'Jr-Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '8/10/2020',
                logo: 'logo.jpg',
                city: 'Milano',
                contract: 'Part-Time'
            },
            {
                id: 3,
                company: 'Boolony',
                position: 'Sr-Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '6/25/2021',
                logo: 'logo.jpg',
                city: 'Bologna',
                contract: 'Full-Time'
            },
            {
                id: 4,
                company: 'PhotoNo',
                position: 'Jr-Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '6/21/2021',
                logo: 'logo.jpg',
                city: 'Ravenna',
                contract: 'Full-Time'
            },
            {
                id: 5,
                company: 'AlphaTauri',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/30/2021',
                logo: 'logo.jpg',
                city: 'Faenza',
                contract: 'Full-Time'
            },
            {
                id: 6,
                company: 'Minardi',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '6/25/2021',
                logo: 'logo.jpg',
                city: 'Faenza',
                contract: 'Full-Time'
            },
        ],
        starred: [1, 3],
        applied: [4, 6],
        displayApplied: "none",

    },
    methods: {
        addStar: function(job) {
            if (!this.starred.includes(job)) {
                this.starred.push(job);
            }

        },
        removeStar: function(job) {
            if (this.starred.includes(job)) {
                let star = this.starred.indexOf(job);
                this.starred.splice(star, 1);
            }
        },
        addApply: function(index) {
            if (!this.applied.includes(index)) {
                this.applied.push(index);
            }
            let star = this.starred.indexOf(index);
            this.starred.splice(star, 1);
            this.display();
        },
        display: function() {
            setTimeout(() => {
                this.displayApplied = "block";
                this.notDisplay();
            }, 1000)
        },
        notDisplay: function() {
            setTimeout(() => {
                this.displayApplied = "none";
            }, 2000)
        }
    }
});
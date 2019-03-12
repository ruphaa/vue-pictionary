import words from './words.js';

new Vue({
    el: '#app',
    data: {
        title: 'Pictionary',
        word: 'Press "Generate"',
        list: 'easy',
        lastIndex: 2,
        teams: [
            {id: 1, name: 'team 1', counter: 0},
            {id: 2, name: 'team 2', counter: 0}
        ]
    },
    methods: {
        generateWord: function() {
            this.word = words[this.list][Math.floor(Math.random()*words[this.list].length)];
        },
        chooseLevel: function(level) {
            this.list = level;
        },
        increaseScore: function(index) {
            this.teams[index].counter ++ ;
        },
        addTeam: function() {
            let key = ++this.lastIndex;
            if(key < 6) {
                this.teams.push({
                    "id":  key,
                    "name": `team ${key}`,
                    counter: 0
                })
            }
        }
    }
});
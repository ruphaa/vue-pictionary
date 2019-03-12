'use strict';

var _wordsEasy = require('./words-easy.js');

new Vue({
    el: '#app',
    data: {
        title: 'Pictionary',
        word: ''
    },
    methods: {
        generateWord: function generateWord() {
            console.log(_wordsEasy.easy);
        }
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fragment kodu do uzupełnienia
var questions_chat_gpt_1 = require("./questions-chat-gpt");
function topThreeWords(questionsChatGpt) {
    var question = questionsChatGpt.map(function (_a) {
        var question = _a.question;
        return question;
    });
    var wordCounter = question.reduce(function (acc, curr) {
        var words = curr.split(" ");
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            if (acc[word]) {
                acc[word]++;
            }
            else {
                acc[word] = 1;
            }
        }
        return acc;
    }, {});
    // Zamień obiekt wordCounter na tablicę WordCount
    var wordCountArray = [];
    for (var word in wordCounter) {
        var b = { word: word, count: wordCounter[word] };
        wordCountArray.push(b);
    }
    // Posortuj tablicę wg liczby wystąpień w odwrotnym porządku
    wordCountArray.sort(function (a, b) { return b.count - a.count; });
    return wordCountArray.slice(0, 3);
}
var topThree = topThreeWords(questions_chat_gpt_1.questionsChatGpt);
console.log(topThree);
// Oczekiwany output
// [
//   { word: 'Jakie', count: 18 },
//   { word: 'są', count: 18 },
//   { word: 'najlepsze', count: 17 }
// ]

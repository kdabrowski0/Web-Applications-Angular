
import { questionsChatGpt } from "./questions-chat-gpt";
import { Question } from "./questions-chat-gpt";

interface WordCount {
  word: string;
  count: number;
}

function topThreeWords(questionsChatGpt: Question[]): WordCount[] {
  
  //tworzymy tablicę z pytaniami z questionsChatGpt
  const question: string[] = questionsChatGpt.map(
    ({ question }: Question) => question
  );
  // Zliczamy słowa w tablicy question
  const wordCounter: Record<string, number> = question.reduce(
    (acc: { [key: string]: number }, curr: string) => {
      const words: string[] = curr.split(" ");
      for (const word of words) {
        if (acc[word]) {
          acc[word]++;
        } else {
          acc[word] = 1;
        }
      }
      return acc;
    },
    {}
  );

  // Zamieniamy obiekt na tablicę
  const wordCountArray: WordCount[] = [];
  for (const word in wordCounter) {
    const b: WordCount = { word: word, count: wordCounter[word] };
    wordCountArray.push(b);
  }

  wordCountArray.sort((a: WordCount, b: WordCount) => b.count - a.count);


  return wordCountArray.slice(0, 3);
}

const topThree: WordCount[] = topThreeWords(questionsChatGpt);
console.log(topThree);

// Oczekiwany output
// [
//   { word: 'Jakie', count: 18 },
//   { word: 'są', count: 18 },
//   { word: 'najlepsze', count: 17 }
// ]

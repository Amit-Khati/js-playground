const quotes = [
  // Inspirational
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",

  // Funny
  "I am so clever that sometimes I don’t understand a single word of what I am saying. – Oscar Wilde",
  "I always wanted to be somebody, but now I realize I should have been more specific. – Lily Tomlin",
  "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book. – Groucho Marx",

  // Deep / Thought-provoking
  "The unexamined life is not worth living. – Socrates",
  "Man is the only creature who refuses to be what he is. – Albert Camus",
  "Do I contradict myself? Very well then I contradict myself, (I am large, I contain multitudes.) – Walt Whitman",

  // Short & punchy
  "Stay hungry, stay foolish. – Steve Jobs",
  "Less is more. – Ludwig Mies van der Rohe",
  "What you seek is seeking you. – Rumi"
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size===quotes.length){
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break;
  }
}

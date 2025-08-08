quote = [
  "Be yourself; everyone else is already taken.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
];
author = [
  "-- Oscar Wilde",
  "-- Marilyn Monroe",
  "-- Frank Zappa",
  "-- Albert Einstein",
];

function getQuote() {
  var x = Math.round(Math.random() * (quote.length - 1));
  while (document.getElementById("author").innerHTML == author[x]) {
    x = Math.round(Math.random() * (quote.length - 1));
  }
  document.getElementById("quote").innerHTML = '"' + quote[x] + '"';
  document.getElementById("author").innerHTML = author[x];
  console.log(x);
}

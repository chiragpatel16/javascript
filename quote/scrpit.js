const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "— Cory House" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts", author: "— Winston Churchill" },
  { text: "Creativity is intelligence having fun.", author: "— Albert Einstein" },
  { text: "Excellence happens not by accident. It is a process.", author: "— John Johnson" },
  { text: "First, solve the problem. Then, write the code.", author: "A. P. J. Abdul Kalam" }
];

const bgColors = [
  "#E0E0E0", 
  "#AEC6CF", 
  "#7c3aed", 
  "#343434", 
  "#f59e0b"
];

let index = 0;

function showQuote(i) {
  $('#quoteText').text(quotes[i].text);
  $('#quoteAuthor').text("- " + quotes[i].author);
  $('body').css('background-color', bgColors[i]);
}

showQuote(index);

setInterval(() => {
  index = (index + 1) % quotes.length;
  showQuote(index);
}, 4000);

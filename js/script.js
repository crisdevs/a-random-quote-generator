/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [{quote:"This is the Way.",source:"The Armorer",citation:"Star Wars The Mandalorian", year: 2019 },{quote:"SOOGAA!", source:"Jawas"},
{quote:"The Force will be with you. Always.", source:"Obi-Wan Kenobi"},{quote:"Do. Or do not. There is no try.", source:"Yoda", tags:"Inspirational, Motivation, Ambition"},
{quote:"You can’t stop the change, any more than you can stop the suns from setting.", source:"Shmi Skywalker"}];


/***
 * `getRandomQuote` function
 * Returns a random object
 * 
 * @returns {object} The random object from the quotes array.
***/
const getRandomQuote = () =>{
  const rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}

/***
 * `randomColor` function
 * Generates and returns a random rgb color value
 * 
 * @returns {String} The random rgb value
***/
const randomColor = () =>{
  let rgb = `rgb(`;
  const randomRed = Math.floor(Math.random() * 255);
  const randomGreen = Math.floor(Math.random() * 255);
  const randomBlue = Math.floor(Math.random() * 255);

  rgb+= `${randomRed},${randomBlue},${randomGreen})`;

  return rgb;

}

/***
 * `printQuote` function
 * Prints a random quote to the document
 * 
 *
***/
const printQuote = () =>{
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  if(randomQuote.citation){
    html += `<span class='citation'>${randomQuote.citation}</span>`;
  }
  if(randomQuote.year){
    html += `<span class='year'>${randomQuote.year}</span>`;
  }
  if(randomQuote.tags){
    html+= `<br><span class ="tag"><small>tags: ${randomQuote.tags}</small></span>`;
  }

  html+= "</p>";
  document.querySelector("body").style.backgroundColor = randomColor();
  document.getElementById("quote-box").innerHTML = html;
}
//Every 8 seconds it will call the printQuote function.
setInterval(printQuote, 8000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
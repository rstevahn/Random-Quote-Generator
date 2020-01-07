/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

I am striving for an "exceeds" rating in all of my projects.
01/05/2020 Robert Stevahn   Initial Development
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array of quote objects to be selected at random.
 * The quote and source properties are assumed to be present in each object.
 * The other properties are optional.
***/

let quotes = [
  {
    quote:  "No man has a good enough memory to be a successful liar.",
    source: "Abraham Lincoln",
    tags:   ["humor", "historical"]
  },
  {
    quote:  "All generalizations are false, including this one.",
    source: "Mark Twain",
    citation: "Normand Baillargeon in A Short Course in Intellectual Self Defense",
    year: 2011,
    tags: ["humor", "book"]
  },
  {
    quote:  "I refuse to join any club that would have me as a member.",
    source: "Groucho Marx",
    tags: ["humor", "TV"]
  },
  {
    quote:  "Why do they call it 'rush hour' when nothing moves?",
    source: "Robin Williams",
    citation: "Fictional character Mork from 'Mork & Mindy/ Mork in Love'",
    year: 1978,
    tags: ["humor", "TV"]
  },
  {
    quote:  "I always wanted to be somebody, but now I realize I should have been more specific.",
    source: "Lily Tomlin",
    // no citation
    // no year
    tags:   ["humor", "TV", "comic", "woman"]
    // the only quote with 5 tags for testing purposes
  },
  {
    quote:  "I can resist everything except temptation.",
    source: "Oscar Wilde"
    // no citation
    // no year
    // the only quote with no tags for testing purposes
  }
]

// test the quotes array construction in the console

console.log (quotes);

/*** 
 * `colors` array for changing the body background color when printing quotes
***/

let colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aquamarine",
  "BurlyWood",
  "CadetBlue",
  "CornflowerBlue",
  "DarkKhaki",
  "DarkSalmon",
  "DarkSeaGreen"
]

console.log(colors);

let myInterval = 0; // return value from SetInterval() used below

/***
 * `getRandomQuote` function
***/

function getRandomQuote (quotes) {
  
  // assign index a random integer value between 0 and the 
  // length of the supplied 'quotes' array minus 1

  let index = Math.floor(Math.random () * quotes.length);

  // return the quote object corresponding to the random array index

  return quotes[index];
}

// test in the console 

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

function printQuote () {

  // start with an empty html string
  
  let html = "";

  // select a random quote

  let result = getRandomQuote(quotes);

  // randomly change the document body background color
  // using the colors array

  document.body.style.backgroundColor = 
                      colors [Math.floor (Math.random() * colors.length)];

 // add the quote itself to the html string

  html += '<p class="quote">' + result.quote + '</p>';

  // now add the source of the quote to the html string

  html += '<p class="source">' + result.source;

  // now add the citation and the year, if they exist

  if (result.citation) {
    html += '<span class="citation">' + result.citation + '</span>';
  }
  
  if (result.year) {
    html += '<span class="year">' + result.year + '</span>';
  }

  // now close the paragraph

  html += '</p>';

  // add any tags as an unordered list with the class "tags"
  // This class is referenced in styles.css, and was adapted
  // from the original HTML Workspace "skills" section

  if (result.tags) {
    html += '<ul class="tags">';
    for (let i=0; i < result.tags.length; i++) {
      html += '<li>#' + result.tags[i] + '</li>';
    }
    html += '</ul>';
  }

  // test the html construction in the console

  console.log(html);

  // write the html content to the 'quote-box' element using the DOM

  document.getElementById('quote-box').innerHTML = html;

}

// automatically change the quote every 15 seconds

myInterval = setInterval (printQuote, 15000);

// If I wanted to get more fancy here, I could set a timer and clear
// the interval after several minutes of operation.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
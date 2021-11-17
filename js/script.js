/***
* Treehouse FSJS Techdegree:
* Project 1 - A Random Quote Generator
***/

/*** 
 * An array of objects containing famouse quotes to be displayed on the page
 * The following quotes are from notable basketball players
 * quote: the text of the quote itself
 * source: the name of the person or character who said the quote
 * citation: the book, movie, song or magazine the quote came from
 * year: the year the player retired
 * team: the team of the basketball player
***/
const quotes = [
  {
      quote: `A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, those are the sacrifices that you have to make if you want to be an NBA basketball player.`,
      source: 'Jason Kidd',
      citation: 'Interview',
      year: 2013,
      team: 'Dallas Mavericks'
  },
  {
      quote: `Ask not what your teammates can do for you. Ask what you can do for your teammates.`,
      source: 'Magic Johnson',
      citation: 'Interview',
      year: 2000,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `Coaching is easy. Winning is the hard part.`,
      source: 'Elgin Baylor',
      year: 1971,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `Some people want it to happen, some wish it would happen, others make it happen.`,
      source: 'Michael Jordan',
      year: 2003,
      team: 'Chicago Bulls'
  },
  {
      quote: `Talent wins games, but teamwork and intelligence wins championships.`,
      source: 'Michael Jordan',
      citation: 'Interview',
      year: 2003,
      team: 'Chicago Bulls'
  },
  {
      quote: `I've missed more than 9000 shots in my career. I've lost almost 300 games. Twenty six times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.`,
      source: 'Michael Jordan',
      citation: 'Book',
      year: 2003,
      team: 'Chicago Bulls'
  },
  {
      quote: `Everybody pulls for David, nobody roots for Goliath.`,
      source: 'Wilt Chamberlain',
      year: 1973,
      team: 'Golden State Warriors'
  },
  {
      quote: `Everything negative -- pressure, challenges -- are all an opportunity for me to rise.`,
      source: 'Kobe Bryant',
      citation: 'Interview',
      year: 2016,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `I've had enough success for two lifetimes, my success is talent put together with hard work and luck.`,
      source: `Kareem Abdul-Jabbar`,
      citation: 'Book',
      year: 1989,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `I think someone should explain to the child that it's ok to make mistakes. That's how we learn. When we compete, we make mistakes.`,
      source: 'Kareem Abdul-Jabbar',
      citation: 'Interview',
      year: 1989,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `If you don't do what's best for your body, you're the one who comes up on the short end.`,
      source: 'Julius Erving',
      citation: 'Interview',
      year: 1987,
      team: 'Philadelphia 76ers'
  },
  {
      quote: `Push yourself again and again. Don't give an inch until the final buzzer sounds.`,
      source: 'Larry Bird',
      citation: 'Interview',
      year: 1992,
      team: 'Boston Celtics'
  },
  {
      quote: `The invention of basketball was not an accident. It was developed to meet a need. Those boys simply would not play "Drop the Handkerchief."`,
      source: 'James Naismith'
  },
  {
      quote: `You can't get much done in life if you only work on the days when you feel good.`,
      source: 'Jerry West',
      year: 1974,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `If you are afraid of failure you don't deserve to be successful!`,
      source: 'Charles Barkley',
      citation: 'Interview',
      year: 2000,
      team: 'Phoenix Suns'
  },
  {
      quote: `If you want consistency, then you perform. This is a performance job. You get paid to perform. Your money is guaranteed, but your minutes are not.`,
      source: 'Isiah Thomas',
      citation: 'Interview',
      year: 1994,
      team: 'Detroit Pistons'
  },
  {
      quote: `Love never fails. Character never quits. And with patience and persistence, dreams do come true.`,
      source: 'Pete Maravich',
      year: 1980,
      team: 'Utah Jazz'
  },
  {
      quote: `Me shooting 40% at the foul line is just God's way to say nobody's perfect.`,
      source: `Shaquille O'Neal`,
      citation: 'Interview',
      year: 2011,
      team: 'Los Angeles Lakers'
  },
  {
      quote: `No matter what you say, you can have as many receivers as you want; there are enough balls to go around.`,
      source: 'Kevin Johnson',
      year: 2000,
      team: 'Phoenix Suns'
  },
  {
      quote: `I've got a theory that if you give 100 percent all of the time, somehow things will work out in the end.`,
      source: 'Larry Bird',
      citation: 'Interview',
      year: 1992,
      team: 'Boston Celtics'
  }
];

/***
 * A function that generates a number between 0 and
 * the number of items in the array which will be used
 * in the bracket notation to grab a random object from
 * the quotes array
***/
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

/***
 * A function that will generate a new quote that will be displayed
 * on the screen every time the button is clicked
 * It also contains a function that changes the background color of the screen
 * everytime the button is clicked
***/
function printQuote() {
  // calls the getRandomQuote function
  const randomQuote = getRandomQuote();

  // initiates the paragraph that displays the quote and the source properties
  let quoteBody = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;

    // checks if the team property is present in the objects
    // and adds to the paragraph if it exist 
    if (randomQuote.team) {
      quoteBody += `<span class="citation">${randomQuote.team}</span>`;
    }

    // checks if the citation property is present in the objects
    // and adds to the paragraph if it exist 
    if (randomQuote.citation) {
      quoteBody += `<span class="citation">${randomQuote.citation}</span>`;
    }

    // checks if the year property is present in the objects
    // and adds to the paragraph if it exist 
    if (randomQuote.year) {
      quoteBody += `<span class="year">retired ${randomQuote.year}</span>`;
    }

  // closes the paragraph in the initial quoteBody variable
  // the closing </p> was left out to insert the team, citation and year if they exist
  quoteBody += `</p>`;

  // inserts the paragraph to the page
  document.getElementById('quote-box').innerHTML = quoteBody;
  
  // function that generates a random number between 1 to 256 to be used for RGB colors
  const randomColor = () => Math.floor( Math.random() * 256 ) + 1;

  // set the background color of the body to random RGB color using the randomColor function
  // reference: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}

// runs the printQuote function upon initial page load to override the placeholder content
printQuote();

/***
 * Quotes automatically refresh every 10 seconds
 * reference from: https://www.w3schools.com/jsref/met_win_setinterval.asp
 */
const refresh = setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
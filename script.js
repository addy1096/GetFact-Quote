document.addEventListener("DOMContentLoaded", async function () {
    console.log("Ready!");


    const getKey = document.getElementById("getKey");
    const getValue = document.getElementById("getValue");
    const getFactBtn = document.getElementById("getFactBtn");
    const getQuoteBtn = document.getElementById("getQuoteBtn");
    const getAuthor = document.getElementById("getAuthor");
    const getQuote = document.getElementById("getQuote");




    getFactBtn.addEventListener("click", function () {
      getFact();
    });

    getQuoteBtn.addEventListener("click", function () {
      getQuoteFunction();
    });



    function getFact() {
      fetch('https://random-quote-fact-joke-api.p.rapidapi.com/fact',{method: 'GET',
      headers: {
        'X-RapidAPI-Key': '02e16e4fc5mshb0043732204ad7dp16e6e8jsn10d4ffd69500',
        'X-RapidAPI-Host': 'random-quote-fact-joke-api.p.rapidapi.com'
      }}
        )
        .then(response => response.json())
        .then(data => {
          // 'data' variable now holds the parsed JSON object
      
          // Separate key-value pairs
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              let value = data[key];
              console.log("Key:", key);
              getKey.innerHTML = key;
              console.log("Value:", value);
              getValue.innerHTML = value;
            }
          }
        })
        .catch(error => console.error(error));
    }
 
    // function getQuoteFunction() {
    //   fetch('https://random-quote-fact-joke-api.p.rapidapi.com/quote',{method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '02e16e4fc5mshb0043732204ad7dp16e6e8jsn10d4ffd69500',
    //     'X-RapidAPI-Host': 'random-quote-fact-joke-api.p.rapidapi.com'
    //   }}
    //     )
    //     .then(response => response.json())
    //     .then(data => {
    //       // 'data' variable now holds the parsed JSON object
      
    //       // Separate key-value pairs
    //       for (let key in data) {
    //         if (data.hasOwnProperty(key)) {
    //           let value = data[key];
    //           console.log("Key:", key);
    //           getAuthor.innerHTML = key;
    //           console.log("Value:", value);
    //           getQuote.innerHTML = value;
    //         }
    //       }
    //     })
    //     .catch(error => console.error(error));
    // }

//     async function getQuoteFunction(){
//       const url = 'https://random-quote-fact-joke-api.p.rapidapi.com/quote';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '02e16e4fc5mshb0043732204ad7dp16e6e8jsn10d4ffd69500',
// 		'X-RapidAPI-Host': 'random-quote-fact-joke-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response =  await fetch(url, options);
// 	const result =  await response.text();
// 	console.log(result);

//   getQuote.innerHTML = result;

// } catch (error) {
// 	console.error(error);
// }
//     }
  

});
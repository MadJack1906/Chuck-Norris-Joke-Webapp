// This is just me learning API calls in JS
// For now I learned about fetch(), and async await

// fetch('https://api.chucknorris.io/jokes/random', {
//     method: 'GET',
// } )
//     .then( res => {

//         if (res.ok) {
//             console.log("SUCCESS")

//             return res.json();
//         } else {
//             console.log("FAILED")
//         }
//     } )
//     .then( data => data.value )
//     .catch( error => console.log(`ERROR: ${error}`) );


// async await

// let jokeASD = "";

// async function getJoke () {
//     try {
//         return await fetch('https://api.chucknorris.io/jokes/random', 
//         {
//             method: "GET",
//         })
//         .then( res => {
//             if ( res.ok ) {
//                 return res.json();
//             } else {
//                 console.log("ERROR")
//             }
//         })
//         .then( data => jokeASD = data.value )

//     } catch (error) {
//         console.log("ERROR:" + error);
//     }
// };

// getJoke()

// async function getJoke() {
//     const response = await fetch('https://api.chucknorris.io/jokes/random');
//     const joke = await response.json();

//     return joke;
// }

// getJoke().then( joke => {
//     (joke.value)
// })


function getJoke() {
    
    let jokeCtn = document.getElementById("joke");

    fetchJoke().then( jokeJson => {
        jokeCtn.innerHTML = jokeJson.value;
    } );

}

async function fetchJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'GET', });
    const jokeJson = await response.json();

    return jokeJson;
}


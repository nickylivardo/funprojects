const jokesEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()



// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json()
    jokesEl.innerHTML = data.joke
      
  }








// USING .then METHOD
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com/', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokesEl.innerHTML = data.joke
//     })
// }

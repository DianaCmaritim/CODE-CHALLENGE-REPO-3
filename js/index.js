const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{
//fetch data from the server
    const moviePlaceHolder = ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          //console.log(data)
        })

      }
    });

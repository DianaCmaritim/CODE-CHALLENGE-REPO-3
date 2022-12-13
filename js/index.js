const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{
//fetch data from the server
    const filmPlaceHolder = ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          //console.log(data)
            const firstMovie = data[0]

            const filmImg = document.getElementById("poster")
            const movieTitle = document.getElementById("filmTitle")
            const movieDescription = document.getElementById("movieDescription")
            const runningTime = document.getElementById("runtime")
            const showingTime = document.getElementById("showtime")
            const availableTicket =document.getElementById("ticketsAvailable")
            filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescription.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availableTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = firstMovie.capacity - firstMovie.tickets_sold

            ticketBuy.addEventListener('click',()=>{

                tickets--

                // const ticketRemaining = tickets-1

                if(tickets <= 0){
                    const frstMovie = document.getElementById("0")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`

                    availableTicket.innerHTML = `Tickets available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availableTicket.innerText = `Tickets available: (${tickets})`
                }
            })

        })




    }
  //fetch all the film details
  const filmDetails = ()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
//iterate over all the movies in the list using for loop
        console.log(data)
        for(let i = 0; i < data.length; i++){
            let item = data[i]
            console.log(item)
            const movieList = document.createElement("li")
            const list = document.getElementById("movieShowing")

            movieList.classList.add("list-group-item", "border", "border-info")

            movieList.setAttribute('id',`${item.id}`)
            movieList.innerText = item.title
            console.log(item.title)


            list.appendChild(movieList)

            movieList.addEventListener('click',()=>{
                const filmImage = document.getElementById("poster")
                const filmTitle = document.getElementById("filmTitle")
                const filmDescription = document.getElementById("movieDescription")
                const runTime = document.getElementById("runtime")
                const showTime = document.getElementById("showtime")
                const ticketsAvailable =document.getElementById("ticketsAvailable")


                filmImage.src = item.poster
                filmTitle.innerText = item.title
                filmDescription.innerText = `Description:${item.description}`
                runTime.innerHTML =`Runtime:${item.runtime} minutes`
                showTime.innerText =`Showtime: ${item.showtime}`
                ticketsAvailable.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

                const purchaseTicket = document.getElementById("buyTicket")
                let remTicket = (item.capacity-item.tickets_sold)

                purchaseTicket.addEventListener('click',()=>{

                    // const remaining tickets = ticket-1
                    //decrementing the number of tickets after each purchase
                    remTicket--
                    if(remTicket <= 0){
                        movieList.innerHTML =`${item.title} <span class="badge bg-danger">SOLD OUT</span>`

                        ticketsAvailable.innerHTML = `Ticket available: <span class="badge bg-danger">SOLD OUT</span>`

                    }else{

                        ticketsAvailable.innerText = `Tickets available: [${remTicket}]`
                    }

                })



            })


        }




    })

}

//call the functions
filmDetails()
filmPlaceHolder()

})

fetch(url)
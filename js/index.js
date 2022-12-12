const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{
//fetch data from the server
    const moviePlaceHolder = ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          //console.log(data)
            const firstMovie = data[0]

            const filmImg = document.getElementById("poster")
            const movieTitle = document.getElementById("filmTitle")
            const movieDescr = document.getElementById("movieDescription")
            const runningTime = document.getElementById("runtime")
            const showingTime = document.getElementById("showtime")
            const availTicket =document.getElementById("ticketsAvailable")
            filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescr.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)

            ticketBuy.addEventListener('click',()=>{

                tickets--

                // const ticketRemaining = tickets-1

                if(tickets <= 0){
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`

                    availTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availTicket.innerText = `Tickets available: (${tickets})`
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
            const list = document.getElementById("showingMovie")

            movieList.classList.add("list-group-item", "border", "border-info")

            movieList.setAttribute('id',`${item.id}`)
            movieList.innerText = item.title
            console.log(item.title)


            list.appendChild(movieList)

            movieList.addEventListener('click',()=>{
                const filmImage = document.getElementById("poster")
                const filmTitle = document.getElementById("filmTitle")
                const filmDescr = document.getElementById("movieDescription")
                const runTime = document.getElementById("runtime")
                const showTime = document.getElementById("showtime")
                const availTickets =document.getElementById("ticketsAvailable")


                filmImage.src = item.poster
                filmTitle.innerText = item.title
                filmDescr.textContent = item.decription
                runTime.innerHTML =`Runtime:<span>${item.runtime}</span>`
                showTime.innerText =`Showtime: ${item.showtime}`
                availTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

                const ticketsBuy = document.getElementById("buyTicket")
                let remTicket = Number(item.capacity - item.tickets_sold)

                ticketsBuy.addEventListener('click',()=>{

                    // const remaining tickets = ticket-1
                    //decrementing the number of tickets after each purchase
                    remTicket --
                    if(remTicket <= 0){
                        movieList.innerHTML =`${item.title} <span class="badge bg-danger">SOLD OUT</span>`

                        availTickets.innerHTML = `Ticket available: <span class="badge bg-danger">SOLD OUT</span>`

                    }else{

                        availTickets.innerText = `Tickets available: (${ticket})`
                    }

                })



            })


        }




    })

}

//call the functions
filmDetails()
moviePlaceHolder()

})
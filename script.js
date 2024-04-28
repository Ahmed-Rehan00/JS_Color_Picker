const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

// button.forEach( function(button) {
//   console.log(button)
//   button.addEventListener('click', function(event){
//     // console.log(event)
//     console.log(event.target)
//     if (event.target.id === 'grey'){
//     body.style.backgroundcolor = event.target.id
//   }
//   if (event.target.id === 'white'){
//     body.style.backgroundcolor = event.target.id
//   }
//   if (event.target.id === 'blue'){
//     body.style.backgroundcolor = event.target.id
//   }
//   if (event.target.id === 'yellow'){
//     body.style.backgroundcolor = event.target.id
//   });
//   });

// const buttons = document.querySelectorAll('.button'); // Corrected variable naming
// const body = document.querySelector("body");

button.forEach(function(btn) { // Use 'btn' to refer to each button
  console.log(btn); 
  btn.addEventListener('click', function(event){
    // console.log(event)
    console.log(event.target) 

    if (event.target.id === 'grey'){   // Assuming you have elements with these IDs
      body.style.backgroundColor = event.target.id; // Corrected property name
    }
   
    if (event.target.id === 'white'){
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'blue'){
       body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'yellow'){
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'green'){
      body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'red'){
    body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'pink'){
    body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'brown'){
    body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'purple'){
    body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'green'){
    body.style.backgroundColor = event.target.id
   }
  }); 
});


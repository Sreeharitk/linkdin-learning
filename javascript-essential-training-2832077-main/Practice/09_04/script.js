/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const bd = document.querySelector(".grid")

const broder_event = () => {
    bd.style.outline = "6px solid red"
}

bd.addEventListener("mouseleave", ()=>{
    bd.style.outline = "none"
})

document.querySelector(".grid").addEventListener("mousemove",broder_event)

const ce = document.querySelectorAll(".cell")

const randomColor = () =>{
    let radomHex = Math.floor(Math.random()*16777215).toString(16);
    return radomHex
}

ce.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) =>{
        console.log(e)
        cell.style.outline = "2px solid black"
    })
 
 
    cell.addEventListener("mouseleave",()=>{
        cell.style.outline = "none"
    })


    cell.addEventListener("click", ()=>{
        if (cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
          } else {
            cell.style.backgroundColor = `#${randomColor()}`;
          }
    })
});


const fd = document.body

fd.addEventListener("keydown",(event)=>{

    console.log(event.code)

    if(event.code === "KeyD"){
        fd.style.backgroundColor === ""
            ?(fd.style.backgroundColor =  "hsl(201, 34%, 13%)")
            :(fd.style.backgroundColor = "") 
    }

})
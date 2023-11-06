/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// function declaration

function first(){
    document.querySelector("main").classList.add("l1")
}

first()

// funtion expression

const list_items = {
    name: "L drago",
    rotation: "reverse",
    type: "Attact",
}

const list = function(lists){
    const item = document.createElement("ul")
    item.innerHTML = 
        `<h1>${lists.name}</h1>
        <ul>
            <li>${lists.rotation}</li>
            <li>${lists.type}</li>
        </ul>`
    return item
}

const main = document.querySelector(".l1")
main.append(list(list_items))

// arrow funtion

const arrow = () => {
    document.querySelector("ul").style.border = "solid 1px black"
}

arrow()
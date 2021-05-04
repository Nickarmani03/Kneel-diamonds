import { getSizes, setSize } from "./database.js"

const metals = getSizes()

document.addEventListener(
    "change",
    (event) => {
        const eventName = event.target
        if (eventName.name === "size") {
            setSize(parseInt(eventName.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = metals.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        size => {
            return `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </li>`
        }
    )
    html += listItemsArray.join("")    // joins it to a single string
    html += "</ul>"

    return html
}


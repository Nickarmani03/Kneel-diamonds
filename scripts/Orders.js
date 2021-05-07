import { getOrders, getMetals, getSizes, getStyles, getJewleries } from "./database.js"
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const jewleries = getJewleries()

//orders modules initialized. but not invoked once the page is first generated
const buildOrderListItem = (order) => {
    
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId

        }
    )

    const foundJewlery = jewleries.find(
        (jewlery) => {
            return jewlery.id === order.jewleryId
        }
    )

    let totalCost = foundMetal.price + foundSize.price + foundStyle.price

 if (foundJewlery.id === 1) {
        totalCost

    } else if (foundJewlery.id === 2) {
        totalCost *= 2

    } else if (foundJewlery.id === 3) {
        totalCost *= 4
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    //orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


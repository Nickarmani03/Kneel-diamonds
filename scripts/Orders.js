import { getOrders, getMetals, getSizes, getStyles } from "./database.js"
//orders modules initialized. but not invoked once the page is first generated
const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    const foundMetal = metals.find(
        (metal) => {
            if (metal.id === order.metalId) {
                return true
            }
        }
    )
    const foundSize = sizes.find(
        (size) => {
            if (size.id === order.sizeId) {
                return true
            }
        }
    )
    const foundStyle = styles.find(
        (style) => {
            if (style.id === order.styleId) {
                return true
            }
        }
    )

    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)

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


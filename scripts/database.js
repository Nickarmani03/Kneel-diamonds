/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    jewleries: [
        { id: 1, types: "Ring", },
        { id: 2, types: "Earring", },
        { id: 3, types: "Necklace", },

    ],
    customerOrders: [
      /*  {
            id: 1,
            metalId: 1,
            sizeId: 2,
            styleId: 3,
            jewleryId: 1,
            timestamp: 1614659931693
       }*/
    ],
    orderBuilder: {}, // it is a temporary state since the data is not changed permanently       

}

export const getMetals = () => {
    return [...database.metals]
}

export const getSizes = () => {
    return [...database.sizes]
}

export const getStyles = () => {
    return [...database.styles]
}

export const getJewleries = () => {
    return [...database.jewleries]
}

export const getOrders = () => {
    return [...database.customerOrders]
}

// updates the orderbuilder object. this put the id in the parameter. when its selected it makes it choose it by the id
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setJewlery = (id) => {
    database.orderBuilder.jewleryId = id
}

export const addCustomOrders = () => {
    if (
        "metalId" in database.orderBuilder &&
        "sizeId" in database.orderBuilder &&
        "styleId" in database.orderBuilder &&
        "jewleryId" in database.orderBuilder
        //In operator returns true if these things are IN FACT in the database.orderBuilder, so if nothing is clicked, will return false
    ) {
        //This is a ternary condition statement, if not using this, use an else if statement

        //creates a copy of the empty orderBuild object, and stores the object in a new variable called newOrder
        const newOrder = { ...database.orderBuilder }

        //checking if there is an object with and id greater than 0
        newOrder.id = database.customerOrders.length > 0
            ? // -YES? if it is 
            //  Get the id of the last order from the customerOrder array
            //  Set the newOrder.id equal to that value + 1
            //any objects?
            [...database.customerOrders].pop().id + 1
            //pop in this stiuation will retun a new object
            : //-NO? if its not
            // --- Set newOrder.id equal to 1
            1;

        // Add a timestamp to the order
        newOrder.timestamp = Date.now()

        // Add the new order object to custom orders state
        database.customerOrders.push(newOrder)

        // Reset the temporary state for user choices
        database.orderBuilder = {}

        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
        return true
    }
    return false
}


import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { Styles } from "./Styles.js"
import { Orders } from "./Orders.js"
import { Jewleries } from "./Jewleries.js"
import { theOrderButton } from "./orderButton.js"

/*document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            customerOrders()
        }
    }
)*/

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${Styles()}
            </section>
        </article>

        <article class="choices__jewleries">
          ${Jewleries()}
            </article>

            </article>
            ${ theOrderButton() }
            <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}


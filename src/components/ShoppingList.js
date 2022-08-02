import { plantList } from "../datas/PlantList"


function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>
                    {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList
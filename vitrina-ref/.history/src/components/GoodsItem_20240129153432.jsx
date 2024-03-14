import { ShopContext } from "../context";
import { useContext } from "react";

function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price: { regularPrice }, displayAssets: [{ full_background }], addToBasket = Function.prototype } = props

    const {} = u
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className="card-action">
                <button onClick={() => addToBasket({mainId ,displayName, regularPrice})} className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.6rem'}}>{regularPrice} руб.</span>
            </div>
        </div>
    );
}
export { GoodsItem };
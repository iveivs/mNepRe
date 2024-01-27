function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price: { regularPrice }, displayAssets: [{ full_background }], addToCart } = props
    return (
        <div className="card" id={mainId}>
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
                <button onClick={() = addToCart()} className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.6rem'}}>{regularPrice} руб.</span>
            </div>
        </div>
    );
}
export { GoodsItem };

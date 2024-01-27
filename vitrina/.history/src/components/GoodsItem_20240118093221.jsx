function GoodsItem(props) {
    console.log('props',props);
    const { mainId, displayName, displayDescription, price: { regularPrice }, displayAssets: [{ full_background }] } = props
    return (
        // <>
        // </>
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={full_background} alt={displayName} />
                <span className="card-title">{displayName}</span>
            </div>
            <div className="card-content">
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right">{regularPrice}</span>
            </div>
        </div>
    );
}
export { GoodsItem };

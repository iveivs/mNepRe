function Alert(props) {
    const { name = '', closeAlert = F } = props

    useEffect(() => {
        const timerId = setTimeout()
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast"> {name} добавлен в корзину</div>
        </div>
    )
}
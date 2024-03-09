function Alert(props) {
    const { name = '', clo } = props

    useEffect(() => {
        const timerId = setTimeout()
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast"> {name} добавлен в корзину</div>
        </div>
    )
}
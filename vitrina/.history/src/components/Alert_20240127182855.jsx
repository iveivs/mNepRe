function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, )
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast"> {name} добавлен в корзину</div>
        </div>
    )
}
import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";

const Filters = () => {
    const dispatch = useDispatch()

    const activeFilter = useSelector(selectActiveFilter)
    return (
        <div>
            <button onClick={() => dispatch}></button>
        </div>
    )
}
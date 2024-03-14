import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filtres-actions";

const Filters = () => {
    const dispatch = useDispatch()

    const activeFilter = useSelector(selectActiveFilter)
    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} style={{ color:
            }}>all</button>
        </div>
    )
}

export {Filters}
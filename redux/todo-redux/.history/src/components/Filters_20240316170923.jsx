import { useSelector, useDispatch } from "react-redux";
import 
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filtres-actions";

const Filters = () => {
    const dispatch = useDispatch()

    const activeFilter = useSelector(selectActiveFilter)
    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} style={{ color:
            activeFilter === 'all' ? 'red' : 'grey'}}>all</button>

            <button onClick={() => dispatch(setFilter('active'))} style={{ color:
            activeFilter === 'active' ? 'red' : 'grey'}}>active</button>

            <button onClick={() => dispatch(setFilter('completed'))} style={{ color:
            activeFilter === 'completed' ? 'red' : 'grey'}}>completed</button>
        </div>
    )
}

export {Filters}
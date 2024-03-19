// old version with redux

import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filtres-actions";

const Filters = () => {
    const dispatch = useDispatch()

    const activeFilter = useSelector(selectActiveFilter)
    return (
        <div>
            < onClick={() => dispatch(setFilter('all'))} style={{ color:
            activeFilter === 'all' ? 'red' : 'grey'}}>all</и>

            < onClick={() => dispatch(setFilter('active'))} style={{ color:
            activeFilter === 'active' ? 'red' : 'grey'}}>active</и>

            < onClick={() => dispatch(setFilter('completed'))} style={{ color:
            activeFilter === 'completed' ? 'red' : 'grey'}}>completed</и>
        </div>
    )
}

export {Filters}
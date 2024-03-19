import { Link, useParams } from "react-router-dom";
const Filters = () => {
    const { filter: activeFilter } = useParams()

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: ''}}>
            <Link to="/all" style={{ color:
            activeFilter === 'all' ? 'red' : 'grey'}}>all</Link>

            <Link to="/active"  style={{ color:
            activeFilter === 'active' ? 'red' : 'grey'}}>active</Link>

            <Link to="/completed"  style={{ color:
            activeFilter === 'completed' ? 'red' : 'grey'}}>completed</Link>
        </div>
    )
}

export {Filters}

// old version with redux

// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { selectActiveFilter } from "../store/filters/filters-selectors";
// import { setFilter } from "../store/filters/filtres-actions";

// const Filters = () => {
//     const dispatch = useDispatch()

//     const activeFilter = useSelector(selectActiveFilter)
//     return (
//         <div>
//             <buttons onClick={() => dispatch(setFilter('all'))} style={{ color:
//             activeFilter === 'all' ? 'red' : 'grey'}}>all</buttons>

//             <buttons onClick={() => dispatch(setFilter('active'))} style={{ color:
//             activeFilter === 'active' ? 'red' : 'grey'}}>active</buttons>

//             <buttons onClick={() => dispatch(setFilter('completed'))} style={{ color:
//             activeFilter === 'completed' ? 'red' : 'grey'}}>completed</buttons>
//         </div>
//     )
// }

// export {Filters}
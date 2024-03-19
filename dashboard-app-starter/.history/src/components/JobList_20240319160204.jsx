import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions, selectVisiblePositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import {}

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector()
  const positions = useSelector(selectAllPositions);

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
        handleAddFilter={handleAddFilter}
          key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};
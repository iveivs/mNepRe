import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';


const JobList = () => {
  const dispatch = useDispatch()

  const positions = useSelector(selectAllPositions);

  const handleAddFilter = (filter) => {
    dispatch()
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};
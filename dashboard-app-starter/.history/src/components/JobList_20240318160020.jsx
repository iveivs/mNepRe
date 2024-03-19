import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selectors';


const JobList = () => {
  const dispa
  const positions = useSelector(selectAllPositions);
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};
import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selectors';


const JobList = () => {
  const positions = useSelector(selectAllPositions)
  console.log("JOB LIST", positions);
  return (
    <div className='job-list'>
      {console.log("JOB LIST 2", positions)}
      {/* {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))} */}
    </div>
  )
}

export {JobList};
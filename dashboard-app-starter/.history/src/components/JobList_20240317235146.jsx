// import data from '../mock/data.json';
import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
imp


const JobList = () => {
  const positions = useSelector(selectAllPositions)
  console.log("JOB LIST", positions);
  return (
    <div className='job-list'>
      {/* {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))} */}
    </div>
  )
}

export {JobList};
// import data from '../mock/data.json';
import 
import { JobPosition } from './JobPosition';


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
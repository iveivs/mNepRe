// import data from '../mock/data.json';
import { useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';


const JobList = () => {
  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;

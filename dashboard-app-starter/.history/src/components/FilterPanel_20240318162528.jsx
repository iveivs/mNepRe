import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { selectFilters } from 'store/filters/filter-selectors';


const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters)
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge 
            key={}
              variant="clearable"
            >
              Frontend
            </Badge>
          ))}
        </Stack>

        <button className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
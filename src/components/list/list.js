import { useSelector } from 'react-redux';
import ListItem from './list-item';

function List() {
  const {items} = useSelector(state => state.items);
  
  return (
    <ul>
      {items.map(item => <ListItem key={item.id} {...item} />)}
    </ul>
  );
}

export default List;
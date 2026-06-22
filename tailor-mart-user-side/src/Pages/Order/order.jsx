import './order.css';
import { useParams } from 'react-router-dom';


function order() {

    const {id} = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default order

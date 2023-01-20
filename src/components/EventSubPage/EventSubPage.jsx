import { useFetchevent } from '../../hooks/usefetchEvent';
import { Link } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchevent();
  console.log(event);
  return (
    event && (
      <div>
        <h2>{event.name} </h2>
        <img src={event.images[0].url} alt={event.name} width={250} />
        <Link to="details">More details</Link>
      </div>
    )
  );
};
export default EventSubPage;

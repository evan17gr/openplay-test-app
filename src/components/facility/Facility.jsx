import propTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import Tag from '../common/Tag';
import Card from '../common/Card';
//I separate the external and internal imports

const Facility = ({facility}) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/activities/${facility?.id}`)} title={facility?.name}>
      {facility?.tags && facility.tags.map((tag) => <Tag key={tag?.id} tagName={tag?.name} />)}
    </Card>
  );
};

Facility.propTypes = {
  facility: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    tags: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};

/**
 * I am using js in this task, but usually I would be using typescript.
 * I have only used propTypes a couple of times and it was a long time ago,
 * but typescript is definitely much better, I forgot how many more errors there are when using plain js.
 * In that case instead of using propTypes, I would be creating an interface,
 * named Facility or FacilityProps, depending on where I initiate the interaface.
 * interface Facility{
 *  name:string;
 *  id:number;
 *  tags:Tag[];
 * }
 *
 * interface Tag{
 *  id:number;
 *  name:string;
 * }
 */

export default Facility;

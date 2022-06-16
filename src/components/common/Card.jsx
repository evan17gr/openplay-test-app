import propTypes from 'prop-types';
import {Card as AntdCard, Image} from 'antd';

import CenteredSection from './CenteredSection';

const Card = ({onClick, title, children}) => {
  return (
    <AntdCard
      hoverable
      headStyle={{display: 'flex', justifyContent: 'center'}}
      style={{margin: '1rem 0'}}
      onClick={onClick}
      title={title}
      cover={<Image width={300} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />}>
      <CenteredSection>{children}</CenteredSection>
    </AntdCard>
  );
};

Card.propTypes = {
  onClick: propTypes.func,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Card;

import propTypes from 'prop-types';

const CenteredSection = ({children, style}) => {
  return (
    <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', ...style}}>{children}</section>
  );
};

CenteredSection.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.any,
};

export default CenteredSection;

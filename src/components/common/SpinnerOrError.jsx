import propTypes from 'prop-types';
import {Spin, Alert} from 'antd';
import CenteredSection from './CenteredSection';

const SpinnerOrError = ({isLoading, error}) => {
  return isLoading ? (
    <CenteredSection style={{height: '100vh'}}>
      <Spin size="large" />
    </CenteredSection>
  ) : error ? (
    <CenteredSection style={{height: '100vh'}}>
      <Alert message="There was an error" type="error" />
    </CenteredSection>
  ) : (
    <></>
  );
};

SpinnerOrError.propTypes = {
  isLoading: propTypes.bool.isRequired,
  error: propTypes.any,
};

export default SpinnerOrError;

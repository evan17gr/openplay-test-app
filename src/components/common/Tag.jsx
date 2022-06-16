import propTypes from 'prop-types';
import {Tag as AntdTag} from 'antd';

const tagColors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const Tag = ({tagName}) => {
  return <AntdTag color={tagColors[Math.floor(Math.random() * tagColors.length)]}>{tagName}</AntdTag>;
};

Tag.propTypes = {
  tagName: propTypes.string.isRequired,
};

export default Tag;

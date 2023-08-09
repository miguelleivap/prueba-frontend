import PropTypes from 'prop-types';
export default function BarIcon(props) {
  const { color, width, height, className, viewBox } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width={width} height={height} fill={color}/>
    </svg>
  );
}

BarIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

BarIcon.defaultProps = {
  width: 255,
  height: 41,
  color: '#DDDEDF',
  className: '',
  viewBox: "0 0 255 41",
};

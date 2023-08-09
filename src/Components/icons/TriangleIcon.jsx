import PropTypes from 'prop-types';

export default function TriangleIcon(props) {
  const { color, width, height } = props;

  return (
    <div
      className="triangle-icon"
      style={{
        width,
        height,
      }}
    >
      <svg
        viewBox="0 0 100 85"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <polygon points="50 85, 100 0, 0 0" fill={color} />
      </svg>
    </div>
  );
}

TriangleIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

TriangleIcon.defaultProps = {
  color: '',
  width: '18px',
  height: '15.3px',
};

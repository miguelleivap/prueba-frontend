import PropTypes from 'prop-types';
export default function ArrowIcon(props) {
  const { color, width, height, className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 15 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path d="M14.5137 6.63867V8.36133H3.84961L8.73047 13.2832L7.5 14.5137L0.486328 7.5L7.5 0.486328L8.73047 1.7168L3.84961 6.63867H14.5137Z" 
        fill={color}/>

    </svg>
  );
}

ArrowIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

ArrowIcon.defaultProps = {
  width: 15,
  height: 15,
  color: '#49494F',
  className: '',
};

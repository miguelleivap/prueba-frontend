import PropTypes from 'prop-types';
export default function FilterIcon(props) {
  const { color, width, height, className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path d="M13.125 6.875V1.625H14.8887V3.38867H18.375V5.11133H14.8887V6.875H13.125ZM18.375 10.3613H9.63867V8.63867H18.375V10.3613ZM6.11133 6.875H7.875V12.125H6.11133V10.3613H2.625V8.63867H6.11133V6.875ZM11.3613 17.375H9.63867V12.125H11.3613V13.8887H18.375V15.6113H11.3613V17.375ZM2.625 3.38867H11.3613V5.11133H2.625V3.38867ZM2.625 13.8887H7.875V15.6113H2.625V13.8887Z" 
        fill={color}/>

    </svg>
  );
}

FilterIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

FilterIcon.defaultProps = {
  width: 18,
  height: 19,
  color: '#49494F',
  className: '',
};

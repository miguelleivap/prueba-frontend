import PropTypes from 'prop-types';
export default function TimeIcon(props) {
  const { color, width, height, className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 05 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path d="M2.34375 10.248C3.76953 8.82227 5.48828 8.10938 7.5 8.10938C9.51172 8.10938 11.2207 8.82227 12.627 10.248C14.0527 11.6543 14.7656 13.3633 14.7656 15.375C14.7656 17.3867 14.0527 19.1055 12.627 20.5312C11.2207 21.9375 9.51172 22.6406 7.5 22.6406C5.48828 22.6406 3.76953 21.9375 2.34375 20.5312C0.9375 19.1055 0.234375 17.3867 0.234375 15.375C0.234375 13.3633 0.9375 11.6543 2.34375 10.248ZM13.8281 15.375C13.8281 13.6172 13.2031 12.123 11.9531 10.8926C10.7227 9.66211 9.23828 9.04688 7.5 9.04688C5.74219 9.04688 4.24805 9.67188 3.01758 10.9219C1.78711 12.1523 1.17188 13.6367 1.17188 15.375C1.17188 17.1328 1.78711 18.627 3.01758 19.8574C4.26758 21.0879 5.76172 21.7031 7.5 21.7031C9.25781 21.7031 10.752 21.0879 11.9824 19.8574C13.2129 18.6074 13.8281 17.1133 13.8281 15.375ZM9.46289 17.9531L7.08984 16.2246C6.99219 16.166 6.94336 16.0781 6.94336 15.9609V11.2734C6.94336 11.0391 7.06055 10.9219 7.29492 10.9219H7.70508C7.93945 10.9219 8.05664 11.0391 8.05664 11.2734V15.5508L10.1367 17.0742C10.3125 17.2109 10.332 17.3672 10.1953 17.543L9.96094 17.8945C9.82422 18.0703 9.6582 18.0898 9.46289 17.9531Z" fill={color}/>
    </svg>
  );
}

TimeIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

TimeIcon.defaultProps = {
  width: 28,
  height: 31,
  color: '#8C8D91',
  className: '',
};
import PropTypes from "prop-types";
export default function SaveIcon(props) {
  const { color, width, height, className, isActive } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 19"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {isActive ? (
        <path
          d="M12.7246 0.125C13.278 0.125 13.75 0.336589 14.1406 0.759766C14.5638 1.18294 14.7754 1.67122 14.7754 2.22461V18.875L7.5 15.75L0.224609 18.875V2.22461C0.224609 1.67122 0.419922 1.18294 0.810547 0.759766C1.23372 0.336589 1.72201 0.125 2.27539 0.125H12.7246Z"
          fill="#338473"
        />
      ) : (
        <path
          d="M17.7246 15.75V2.22461H7.27539V15.75L12.5 13.4551L17.7246 15.75ZM17.7246 0.125C18.278 0.125 18.75 0.336589 19.1406 0.759766C19.5638 1.18294 19.7754 1.67122 19.7754 2.22461V18.875L12.5 15.75L5.22461 18.875V2.22461C5.22461 1.67122 5.41992 1.18294 5.81055 0.759766C6.23372 0.336589 6.72201 0.125 7.27539 0.125H17.7246Z"
          fill={color}
        />
      )}
    </svg>
  );
}

SaveIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

SaveIcon.defaultProps = {
  width: 20,
  height: 19,
  color: "#338473",
  className: "",
  isActive: false,
};

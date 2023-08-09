import { useState } from "react";
import PropTypes from "prop-types";
import {
  TimeIcon,
  FeedIcon,
  LikeIcon,
  SaveIcon,
  MoreIcon,
  EyeIcon,
  FilterIcon,
  ArrowIcon,
} from "/src/Components/icons";

import "./Card.scss";

const OPTIONS_HIDE_CONTENT = [
    { id: 1, text: 'I’m not interested in this author' },
    { id: 2, text: 'I’m not interested in this topic' },
    { id: 3, text: 'I’ve seen too many posts on this topic' },
    { id: 4, text: 'The information is incorrect' },
    { id: 5, text: 'I’ve seen this post before' },
    { id: 6, text: 'Other reasons' }
  ];
export default function Card({
  feed,
  subFeed,
  title,
  content,
  imageUrl,
  imageWidth,
  imageHeight,
  date,
  author,
  className,
}) {
  const [values, setValues] = useState({
    isSelectedLike: false,
    isSelectedSave: false,
    isSelectedMore: false,
    isSelectedHide: false,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  function handlerOnClickButtons(key, val) {
    setValues((oldValues) => ({
      ...oldValues,
      [key]: val,
    }));
  }

  function handleOptionChange(optionId) {
    setSelectedOption(optionId);
  }
  const { isSelectedLike, isSelectedSave, isSelectedMore, isSelectedHide } =
    values;
  console.log("isSelectedMore :>> ", isSelectedMore);
  console.log("isSelectedLike :>> ", isSelectedLike);
  return (
    <div className={`info-card ${className}`}>
      <div className="header-card">
        <div className="container-feed">
          <FeedIcon />
          <span className="title-feed">{feed}</span>
          <span className="title-subfeed">{">"}</span>
          <span className="title-subfeed">{subFeed}</span>
        </div>
        <div className="container-date">
          <TimeIcon />
          <span className="date">{date}</span>
        </div>
      </div>
      <div className="body-card">
        <div className="container-title-card">
          <img
            className="image-author"
            src={author.imageUrl}
            alt="imageAuthor"
          />
          <div className="container-author">
            <div className="title-author">
              {`${author.name} | ${author.companyName}`}
            </div>
            <span className="info-title">{title}</span>
          </div>
        </div>
        <div className="container-content-card">
          <span
            className="content-information"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          {imageUrl && (
            <img
              className="image-content"
              src={imageUrl}
              width={imageWidth}
              height={imageHeight}
              // alt={linkText}
            />
          )}
        </div>
      </div>
      <div className="footer-card">
        <div
          className="like-container"
          onClick={() =>
            handlerOnClickButtons("isSelectedLike", !isSelectedLike)
          }
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span className="like-icon">
            <LikeIcon
              className="svg-likeicon"
              color="#49494F"
              isActive={isSelectedLike}
            />
          </span>
          <span className={`like-text ${isSelectedLike && "active"}`}>
            {isSelectedLike ? "Liked!" : "Like"}
          </span>
        </div>
        <div
          className="save-container"
          onClick={() =>
            handlerOnClickButtons("isSelectedSave", !isSelectedSave)
          }
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span className={"save-icon"}>
            <SaveIcon
              className="svg-saveicon"
              color="#49494F"
              isActive={isSelectedSave}
            />
          </span>
          <span className={`save-text ${isSelectedSave && "active"}`}>
            {isSelectedSave ? "Saved!" : "Save"}
          </span>
        </div>
        <div
          className="more-container"
          onClick={() =>
            handlerOnClickButtons("isSelectedMore", !isSelectedMore)
          }
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <MoreIcon />
          {isSelectedMore && (
            <div className="container-more-icons">
              <div
                className="eye-icon"
                onClick={() =>
                  handlerOnClickButtons("isSelectedHide", !isSelectedHide)
                }
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <EyeIcon />
                <span>Hide</span>
              </div>
              <div className="filter-icon">
                <FilterIcon />
                <span>Improve my feed</span>
              </div>
            </div>
          )}
          {isSelectedHide && (
            <div className="container-hide-content">
              <div
                className="header-hide-content"
                onClick={() =>
                  handlerOnClickButtons("isSelectedHide", !isSelectedHide)
                }
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <ArrowIcon />
                <span>Tell us why:</span>
              </div>
              <div className="radio-input-hide-content">
                {OPTIONS_HIDE_CONTENT.map((option) => (
                  <label key={option.id}>
                    <input
                      type="radio"
                      name="hideReason"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => handleOptionChange(option.id)}
                    />
                    {option.text}
                  </label>
                ))}
                <button className="button-hide">Hide content</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  feed: PropTypes.string,
  subFeed: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.objectOf(Object),
};

Card.defaultProps = {
  className: "",
  imageWidth: "auto",
  imageHeight: "auto",
  title: "",
  content: "",
  feed: "",
  subFeed: "",
  imageUrl: null,
  date: "",
  author: {},
};

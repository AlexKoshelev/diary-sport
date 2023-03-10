import React from "react";
import Comment from "./comment";
import PropTypes from "prop-types";

const CommentsList = ({ comments, onRemove }) => {
  return (
    <div className="comment__list-constainer">
      {comments.map((comment) => (
        <Comment key={comment._id} {...comment} onRemove={onRemove} />
      ))}
    </div>
  );
};
CommentsList.propTypes = {
  comment: PropTypes.array,
  onRemove: PropTypes.func,
};

export default CommentsList;

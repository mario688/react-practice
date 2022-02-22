import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "../comments/CommentsList";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  useEffect(() => {
    sendRequest(params.idQuote);
  }, [params.idQuote, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;
  const addedCommentHandler = useCallback(() => {
    sendRequest(params.idQuote);
  }, [sendRequest, params.idQuote]);
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.idQuote}
          onAddedComment={addedCommentHandler}
        />
      )}

      {comments}
    </section>
  );
};

export default Comments;

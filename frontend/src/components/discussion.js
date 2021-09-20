import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const DiscussionDisplay = (props) => {
  var posts = props.posts
  return (
    <>
      {
        posts.map(post => (
          <div className="discussion-display-container w-90%">
              <a className="mr-2 ml-6 text-blue-400" href="#">{ post[3]}</a>
              <small className="text-muted">{ post[0] }</small>
              <hr className="w-98% mx-auto my-1" />
            <p className="text-2xl ml-6">{post[1]}</p>
            <p className="text-lg ml-6">{post[2]}</p>
          </div>
        ))
      }
    </>
  );
};

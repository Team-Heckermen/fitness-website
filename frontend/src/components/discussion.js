import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Discussion_display = (props) => {
  var posts = props.posts
  return (
    <>
      {
        posts.map(post => (
          <div class="discussion-display-container w-90%">
              <a class="mr-2 ml-6" href="#">{ post[3]}</a>
              <small class="text-muted">{ post[0] }</small>
              <hr className="w-95% mx-auto" />
            <p className="text-2xl ml-6">{post[1]}</p>
            <p className="text-lg ml-6">{post[2]}</p>
          </div>
        ))
      }
    </>
  );
};

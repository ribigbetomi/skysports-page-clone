import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const williamsonOnWiegman = () => {
  return (
    <div>
      <a
        class="btn-floating btn btn-tw"
        type="button"
        role="button"
        title="Share on twitter"
        href="https://twitter.com/intent/tweet?text=Thank you for this"
        rel="noopener"
      >
        <FaGithub />{" "}
      </a>{" "}
      Github
      <a
        class="btn-floating btn btn-tw"
        type="button"
        role="button"
        title="Share on twitter"
        href="https://twitter.com/intent/tweet?url=https://parse.com"
        rel="noopener"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default williamsonOnWiegman;

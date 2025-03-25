import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarGuest from "./Components/NavbarGuest";
import PostRacine from "./Components/Posts/PostRacine";

const PageRacine = () => {
  return (
    <>
      <NavbarGuest />
      <div className="container my-3">
        {/* Display multiple posts */}
        <PostRacine />
        <PostRacine />
        <PostRacine />
      </div>
    </>
  );
};

export default PageRacine;

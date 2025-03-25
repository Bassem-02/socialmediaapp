import React from "react" ; 
import Post from "./Post";
import NewPost from "./NewPost" ;


const Posts =  () => {
    return(
        <>
            <div className="posts" >
                <NewPost />
                < Post />
                < Post />
                < Post />
                < Post />

            </div>
        
        </>
    );
};

export default Posts ;
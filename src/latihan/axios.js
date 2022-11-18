import axios from "axios";
import React from "react";


//----- Get Request -----

const baseURL = "https://jsonplaceholder.typicode.com/posts/2";
// const baseURL = "http://localhost:8080/api/users/readById/1";


export function Axios() {
  const [get, setGet] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGet(response.data);
    });
  }, [get]);

  if (!get) return(null);

  return (
    <div>
      <h1>{get.title}</h1>
      <p>{get.body}</p>
    </div>
  );
}


//----- Post Request -----

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export function Axios() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }
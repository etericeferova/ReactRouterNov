import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>Here is the content for post {postId}.</p>
    </div>
  );
};

export default BlogPost;

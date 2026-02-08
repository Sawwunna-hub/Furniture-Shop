import { useParams } from "react-router";

function BlogDetail() {
  const blogParam = useParams();

  return <div>BlogDetail : {blogParam.blogId}</div>;
}

export default BlogDetail;

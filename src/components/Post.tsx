interface Post {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  post: Post;
}

const Post = (props: Props) => {
  return (
    <div
      className="flex flex-col max-w-screen-3/4 h-64 aspect-square rounded-3xl m-8 text-center justify-between items-center"
      style={{ backgroundColor: props.post.color }}
    >
      <p className="text-white text-2xl opacity-80">{props.post.color}</p>

      <p className="flex bg-gray-900 opacity-90 text-white w-full h-12 rounded-b-3xl justify-center p-2">{props.post.username}</p>
      <p className="flex bg-gray-900 opacity-90 text-white w-full h-12 rounded-b-3xl justify-center p-2">{props.post.likes}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
	const res = await fetch(`${API_BASE}/post`);
  const data = await res.json();

  const paths = data.map(post => {
    return {
      params: { id: post.id.toString() }
    }
  })

	return {
		paths,
		fallback: false
	}

}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${API_BASE}/post/${id}`);
	const data = await res.json();
  console.log(data)
	return {
		props: { post : data }
	}
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const Post = ( { post }) => {
	return (
		<div>
      <h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}

export default Post;

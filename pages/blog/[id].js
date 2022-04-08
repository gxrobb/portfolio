import markdownToHtml from '../../lib/markdownToHtml'

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

  const content = await markdownToHtml(data.content);
	return {
		props: { post : data, content }
	}
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const Post = ( { post, content }) => {
	return (
		<div>
      <div dangerouslySetInnerHTML={ { __html: content } }>
        </div>
		</div>
	);
}

export default Post;

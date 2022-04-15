import markdownToHtml from '../../lib/markdownToHtml'
import Image from 'next/image'

export const getStaticPaths = async () => {
	const res = await fetch(`${API_BASE}/posts`);
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
	const res = await fetch(`${API_BASE}/posts/${id}`);
	const data = await res.json();
  console.log(data)

  const content = await markdownToHtml(data.content);
  const title = data.title
  const author = data.author
  const date = data.date
  const hero = `${API_BASE}/public/${data.hero}`
	return {
		props: { post : data, content, title, author, date, hero }
	}
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const Post = ( { post, content, title, author, date, hero }) => {
	return (
		<div>
		<p>
			{author}
		</p>
		<p>
			{date}
		</p>
		<Image src={hero} alt="Hero Image" width={200} height={100}/>
			{title}

			<p>
			{hero}

			</p>
      <div dangerouslySetInnerHTML={ { __html: content } }>
        </div>
		</div>
	);
}

export default Post;

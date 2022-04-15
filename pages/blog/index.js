import Link from 'next/link'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
export const getStaticProps = async () => {
  const res = await fetch(`${API_BASE}/posts`);
  const posts = await res.json();
  return {
    props: {
      thePosts: posts
    },
  };
}


export default function Posts({thePosts}) { 
	return (
		<div>
		 {thePosts.map(post => (
        <p key={post.title}>
          <Link href={'/blog/' + post.title} >
            {post.title}
          </Link>
        </p>

      ))}
		</div>
	);
}

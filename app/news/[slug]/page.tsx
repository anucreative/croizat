type Props = {
  params: { slug: string }
  searchParams: { id: string }
}

async function getPost() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts/slug:home')
  return await res.json()
}


export default function Page({ params, searchParams }: Props) {
  return <p>{params.slug}</p>;
}

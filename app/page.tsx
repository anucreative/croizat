async function getHome() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts/slug:home');
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getHome();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </>
  )
}

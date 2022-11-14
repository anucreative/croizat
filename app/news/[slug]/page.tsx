type Props = {
  params: { slug: string }
  searchParams: { id: string }
}

export default function Page({ params, searchParams }: Props) {
  return <p>{params.slug}</p>;
}

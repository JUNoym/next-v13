export default function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { id: string },
  }) {
    return (
      <>
        <p>{params.slug}のブログ記事です</p>
        <p>{searchParams.id}</p>
      </>
    );
  }
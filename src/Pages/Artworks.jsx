import { useGetArtworksQuery } from "../services/artInstituteApi";

function Artworks() {
  const {
    data = { artworks: [] },
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetArtworksQuery();

 console.log(data)

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  if (!data || !data.artworks) {
    return <div>No artworks found</div>
  }
  return (
    <div>
      {data.data.artworks.map((artwork) => (
        <div key={artwork.artist_id}>
          <h2>{artwork.artist_title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Artworks;


import { artInstituteApi } from '../services/artInstituteApi'
import { useGetartInstituteApi } from "../services/artInstituteApi"


const ArtWorks = () => {
    const { data, isLoading, error } = useGetartInstituteApi('getArtworks', artInstituteApi.getArtworks)

    if (isLoading) {
      return <div>Loading...</div>
    }
  
    if (error) {
      return <div>An error occurred: {error.message}</div>
    }
  
    return (
      <div>
        {data.artworks.map((artwork) => (
          <div key={artwork.id}>
            <h2>{artwork.title}</h2>
            <img src={artwork.image_url} alt={artwork.title} />
          </div>
        ))}
      </div>
    )
  }

export default ArtWorks

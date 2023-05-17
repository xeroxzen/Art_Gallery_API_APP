// Exhibitions.js
import { useGetExhibitionsQuery } from '../services/artInstituteApi'

function Exhibitions() {
    const {
        data = { exhibition: [] },
        isLoading,
        isFetching,
        isError,
        error,
      } = useGetExhibitionsQuery ();
    
     console.log(data)
    
      if (isLoading || isFetching) {
        return <div>loading...</div>;
      }
    
      if (isError) {
        console.log({ error });
        return <div>{error.status}</div>;
      }
      if (!data || !data.exhibition) {
        return <div>No exhibition found</div>
      }
      return (
        <div>
          {data.data.exhibitions.map((exhibition) => (
            <div key={exhibition.id}>
            <h2>{exhibition.title}</h2>
            <p>{exhibition.description}</p>
          </div>
          ))}
        </div>
      );
    }

export default Exhibitions

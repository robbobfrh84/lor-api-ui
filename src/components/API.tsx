import { Dispatch, SetStateAction} from 'react';

async function API(
  endPoint: string, 
  setResult: Dispatch<SetStateAction<Array<any>>>,
  requestTrack: any,
  setLoading: Function
) {
  
  if (!requestTrack[endPoint]) {

    try {
      setLoading(true);

      const data = await fetch("https://the-one-api.dev/v2/"+endPoint, {
        method: "GET",
        headers: { 
          Authorization: "Bearer "+process.env.REACT_APP_LOR_API_TOKEN
        }
      });
      const jsonData = await data.json();
      setResult(jsonData.docs);
      requestTrack[endPoint] = true;
      
      setLoading(false);

    } catch(error) {
      alert("😭 Something went wrong with your request\n\nError: "+error)
    }

  } else {
    setLoading(false);
  }

}

export default API;
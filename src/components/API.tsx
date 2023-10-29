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

      /* 
        const data = await fetch("https://the-one-api.dev/v2/"+endPoint+"?limit=10", {
      */

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
  
      // 🚨 SAVE for TESTING without wasting requests.
      // switch(endPoint) {
      //   case "movie":
      //     setResult([{name: 't1', _id: "1"}, {name: 't2', _id: "2"}]);
      //     break;
      //   case "character":
      //     setResult([{name: 't1', race: 'bla', _id: "1"}, {name: 't2', race: 'bla2', _id: "2"}]);
      //     break;
      //   case "quote":
      //     setResult([{character: "c1", dialog: "q1", _id: "1"}, {character: "c2", dialog: "q2", _id: "2"}]);
      //     break;
      // }

    } catch(error) {
      alert("😭 Something went wrong with your request\n\nError: "+error)
    }

  } else {
    console.log("Request already made for "+endPoint+".")
    setLoading(false);
  }

}

export default API;
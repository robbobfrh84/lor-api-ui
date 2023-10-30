import Spinner from "./Spinner";

import './../css/content.css';

function Content({ 
  page,
  loading,
  moviesResult, 
  charactersResult,
  quotesResult,
}: { 
  page: string,
  loading: boolean,
  moviesResult: Array<any>, 
  charactersResult: Array<any>, 
  quotesResult: Array<any> 
}) {

  return (
    <div className="Content">

      { page === "movie" &&
        <div>
          <h1 className="page-title">Movies</h1>
          <table> 
            <tbody>
              { moviesResult.map((value, key) => {
                return (
                  <tr key={key}> 
                    <td width="100">Name:</td> 
                    <td>{value.name}</td> 
                  </tr> 
                );
              })}
            </tbody>
          </table> 
        </div>
      }

      { page === "character" &&
        <div>
          <h1 className="page-title">Characters</h1>
          <table> 
            <tbody>
              {charactersResult.map((value, key) => {
                return (
                  <tr key={key}> 
                    <td width="100">
                      <div className="bottom-pad">Name:</div>
                      <div>Race:</div>
                    </td> 
                    <td>
                      <div className="bottom-pad lor-name">{value.name}</div>
                      <div >{value.race}</div>
                    </td> 
                  </tr> 
                );
              })}
            </tbody>
          </table> 
        </div>
      }

      { page === "quote" &&
        <div>
          <h1 className="page-title">Quotes</h1>
          <table>
            <tbody>
              {quotesResult.map((value, key) => {
                return (
                  <tr key={key}> 
                    <td width="100">Quote:</td> 
                    <td>{value.dialog}</td> 
                  </tr> 
                );
              })}
            </tbody>
          </table>
        </div>
      }

      <div className={"pos-center " +(loading ? 'show' : 'hide' )}>
        <Spinner />
      </div>

    </div>
  );

}

export default Content
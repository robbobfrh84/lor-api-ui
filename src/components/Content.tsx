import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { log } from 'console';

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
        <h4>🍿 movies</h4>
        {moviesResult.map((value, key) => {
          return (
            <div key={key}>
              <div>name: {value.name}</div>
              <hr />
            </div>
          );
        })}
      </div>
      }

      { page === "character" &&
        <div>
          <h4>🧙‍♂️ characters</h4>
          {charactersResult.map((value, key) => {
            return (
              <div key={key}>
                <div>name: {value.name}</div>
                <div>race: {value.race}</div>
                <hr />
              </div>
            );
          })}
        </div>
      }

      { page === "quote" &&
        <div>
          <h4>🧙‍♂️ quotes</h4>
          {quotesResult.map((value, key) => {
            return (
              <div key={key}>
                {/* <div>character: {value.character}</div> */}
                <div>dialog: {value.dialog}</div>
                <hr />
              </div>
            );
          })}
        </div>
      }

      <div className={"pos-center " +(loading ? 'show' : 'hide' )}>
        <Spinner />
      </div>

    </div>
  );

}

export default Content
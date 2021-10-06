import React, {useEffect, useState} from 'react'
import ReactLoading from "react-loading"

function Preloader() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 1000);
  }, []);

    return (
      <>
      {!done ? (
        <div id="preloader"></div>
      ) : (<div></div>)
      }
    </>
    )
}

export default Preloader

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getSentence, getInsult} from './api/getSentence';
import { useEffect, useState} from 'react';

function App() {

    const sentence = 'buttface';
    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState([] as string[]);
    const [data4, setData4] = useState<string[]>([]);
    const array = [sentence, 'no face', 'skank nastyyyy'];
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const intervalTime = 5000; // Fetch every 5 seconds (5000ms)

    useEffect(() => {

        let intervalId: any;

                const fetchData = async () => {

                    setLoading(true); // Set loading when starting a new fetch
                    setError(null); // Clear previous errors
                    try {
                        const response = await getSentence();
                        const response2 = await getInsult();
                        setData(response);
                        setData2(response2);
//                         data3[0] = response;
//                         data3[1] = response2;
                        setData3([response, response2]);

//                         data4.push(response);
//                         data4.push(response2);
                        setData4(array.concat(data3));

//                 console.log(response);
//                 console.log(response2);
                    }
                    catch (err) {
//                             setError(err);

                    }
                    finally {
                        setLoading(false);
                    }
                };
            fetchData();

            // Set up the interval for subsequent fetches
                intervalId = setInterval(fetchData, intervalTime);

            // Cleanup function: Clear the interval when the component unmounts
            return () => {
              clearInterval(intervalId);
            }
        }, [intervalTime]);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and this: {data}, {data2}
        </a>
       <p>
          data3 ={'>'} {data3.toString().replace(',', ', ')}
        </p>
        <p>
          data4 ={'>'} {data4.toString().replace(',', ', ')}
        </p>
      </header>
    </div>
  );
}

export default App;

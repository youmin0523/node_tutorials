import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/visitors')
      .then((response) => {
        setData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <h2>Data From Server</h2>

      {data.map((datum, idx) => (
        <div key={idx}>
          <p>
            Month: {datum.month}&nbsp;New_Customer: {datum.new_customer}
            &nbsp; Loyal_Customer: {
              datum.loyal_customer
            }&nbsp;Unique_Customer: {datum.unique_customer}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;

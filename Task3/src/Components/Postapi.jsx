import React, { useState } from 'react';

function Postapi() {
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    const phoneNumber = '1234567890';
    
    try {
      const response = await fetch('https://chimpu.xyz/api/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phonenumber: phoneNumber })
      });

      const headers = response.headers;
      // Convert headers to an object
      const headersObject = {};
      headers.forEach((value, key) => {
        headersObject[key] = value;
      });

      setResponseData(headersObject);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='box'>
      <button onClick={postData}>Send POST Request</button>
      <div>
        <h2>Response Headers:</h2>
        <pre>{JSON.stringify(responseData)}</pre>
      </div>
    </div>
  );
}

export default Postapi;

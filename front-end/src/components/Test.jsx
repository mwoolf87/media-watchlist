import React, { useEffect, useState } from 'react';

function Test() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);

    return (
        <div>
            <header className="App-header">
                <p>{!data ? "Loading..." : data}</p>
                <p>API call test</p>
            </header>
        </div>
    )
}

export default Test

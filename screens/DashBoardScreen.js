import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DashBoardScreen() {
  const [data, setData] = useState({users: []});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users');

    setData({
      users: result.data,
    });
  }, []);

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default DashBoardScreen;

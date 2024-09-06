import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
  .then(
  (response) => response.json()
  );
  }

const UsersFetching = () => {

  const {data, error, isLoading} = useQuery({
    queryKey : ['users'],
    queryFn : fetchUsers
  })

  if(isLoading) return <div className='spinner-container'><ClipLoader color="#ff00c8" size={30} /></div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const styles = {
    padding : "10px",
    borderBottom : "1px solid black"
  }
  return (
    <div>
      <h1>사용자 정보</h1>
      {data.map((user) => (
        <div key={user.id} style={styles}>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
        </div>
      ))

      }
    </div>
  );
};

export default UsersFetching;
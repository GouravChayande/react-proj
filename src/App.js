import { useState } from 'react';
import { nanoid } from 'nanoid';

import AddUser from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';

function App() {
  const [userList,setUserList] = useState([]);

  const addUserData = (name,age) => {
    setUserList(prevState => {
      return  [...prevState,{name:name,age:age,id:nanoid()}];
    });
  }

  return (
    <div className="App">
      <AddUser onAdd={addUserData}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;

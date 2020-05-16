import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedHeader, setSelectedHeader] = useState({});

  const addUser = () => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteUser = () => {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].idUser === selectedUser.idUser) {
        users.splice(i, 1);
      }
    }

    setUsers([...users]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  const compare = (param) => {
    // console.log(Object.keys(users[0])[param]);
    if (users.length > 0) {
      users.sort(compareValues(Object.keys(users[0])[param]));
    }
    setUsers([...users]);
  };

  const setCurrentlySelectedHeader = (header) => {
    setSelectedHeader(header);
    compare(header);
    // console.log(header);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <br />
        <br />
        <button type="button" onClick={deleteUser} className="btn">
          Usun użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          setSelectedHeader={setCurrentlySelectedHeader}
          selectedHeader={selectedHeader}
        />
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
// import { getDocs, query } from "firebase/firestore/lite";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import DataTable from "./Table";

const UserTable = () => {
  const [data, setData] = useState([]);

  //   async function getUsers() {
  //     const usersCol = collection(db, "users");
  //     const userSnapshot = await getDocs(usersCol);
  //     const userList = userSnapshot.docs.map((doc) => doc.data());
  //     return userList;
  //   }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (userSnapshot) => {
      console.log(userSnapshot);
      setData(userSnapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
    // getUsers().then((res) => setData(res));
  }, []);

  return (
    <div className="mt-4">
      {/* {data.map((i) => (
        <div>
          <p>Appointment: {i.appointment}</p>
          <p>Name: {i.name}</p>
        </div>
      ))} */}
      <DataTable column={10} data={data} selectableRows pagination />
    </div>
  );
};

export default UserTable;

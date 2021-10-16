import React, { useEffect, useState } from "react";
// import { getDocs, query } from "firebase/firestore/lite";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import DataTable from "./Table";

const UserTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  // const [data, setData] = useState(tableDataItems);
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

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  // const contextActions = React.useMemo(() => {
  //   const handleDelete = () => {
  //     if (
  //       window.confirm(
  //         `Are you sure you want to delete:\r ${selectedRows.map(
  //           (r) => r.title
  //         )}?`
  //       )
  //     ) {
  //       setToggleCleared(!toggleCleared);
  //       setData(differenceBy(data, selectedRows, "title"));
  //     }
  //   };

  //   return (
  //     <Button
  //       key="delete"
  //       onClick={handleDelete}
  //       style={{ backgroundColor: "red" }}
  //       icon
  //     >
  //       Delete
  //     </Button>
  //   );
  // }, [data, selectedRows, toggleCleared]);

  return (
    <div className="mt-4">
      {/* {data.map((i) => (
        <div>
          <p>Appointment: {i.appointment}</p>
          <p>Name: {i.name}</p>
        </div>
      ))} */}
      <p>{selectedRows}</p>
      <DataTable
        column={10}
        data={data}
        selectableRows
        pagination
        // contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
      />
    </div>
  );
};

export default UserTable;

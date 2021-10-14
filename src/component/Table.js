import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Appointment",
    selector: (row) => row.year,
  },
];

function DataTableBase({ data, ...rest }) {
  console.log({ data });
  return <DataTable columns={columns} data={data} {...rest} />;
}

export default DataTableBase;

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

const Appointments = ({ data, ...rest }) => {
  return (
    <div>
      <h3>Appointments</h3>
      <DataTable columns={columns} data={data} {...rest} className="mt-5" />
    </div>
  );
};

export default Appointments;

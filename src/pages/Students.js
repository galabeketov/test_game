import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  number,
  firstName,
  lastName,
  adress,
  phoneNumber,
  dateOfBirth,
  classOfStudent
) {
  return {
    number,
    firstName,
    lastName,
    adress,
    phoneNumber,
    classOfStudent,
    dateOfBirth,
  };
}

const teachersData = [
  createData(
    "1",
    "Alisher",
    "Uralov",
    "Amir Temur ko'chasi",
    "+998 +99 060 70 60",
    "8a",
    "12.02.2002"
  ),
];

export default function Students() {
  return (
    <>
      <h2>O'quvchilar</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Ism</TableCell>
              <TableCell align="right">Familiya</TableCell>
              <TableCell align="right">Manzil</TableCell>
              <TableCell align="right">Telefon raqami</TableCell>
              <TableCell align="right">Sinf</TableCell>
              <TableCell align="right">Tug'ulgan sana</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="right">
                  {row.number}
                </TableCell>
                <TableCell align="right">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">
                  {row.lastName}
                </TableCell>
                <TableCell align="right">
                  {row.adress}
                </TableCell>
                <TableCell align="right">
                  {row.phoneNumber}
                </TableCell>
                <TableCell align="right">
                  {row.classOfStudent}
                </TableCell>
                <TableCell align="right">
                  {row.dateOfBirth}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

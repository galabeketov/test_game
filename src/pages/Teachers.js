import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  number,
  firstName,
  lastName,
  subject,
  phoneNumber,
  dateOfBirth,
  salary,
  btns
) {
  return {
    number,
    firstName,
    lastName,
    subject,
    phoneNumber,
    dateOfBirth,
    salary,
    btns,
  };
}

const teachersData = [
  createData(
    "1",
    "Husanboy",
    "Sobirov",
    "Ona tili",
    "+998 990924136",
    "12.02.1998",
    "7000000",
    "edit"
  ),
];

export default function Teachers() {
  return (
    <>
      <h2>O'qituvchilar</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Ism</TableCell>
              <TableCell align="right">Familiya</TableCell>
              <TableCell align="right">Fan</TableCell>
              <TableCell align="right">Telefon raqami</TableCell>
              <TableCell align="right">Tug'ulgan sana</TableCell>
              <TableCell align="right">Maoshi</TableCell>
              <TableCell align="right">#</TableCell>
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
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">
                  <Button>{row.edit}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

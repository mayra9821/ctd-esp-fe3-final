import Table from "react-bootstrap/Table";

export default function DoctDetails({ user, theme }) {
  return (
    <Table variant={theme} striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Web</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      </tbody>
    </Table>
  );
}

/* Renders a single row (stub) to avoid import errors after cleanup. */
const StuffItemAdmin = ({ name, quantity, condition, owner }: any) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>{owner}</td>
    <td>
      <button type="button" disabled>
        Edit
      </button>
    </td>
  </tr>
);

export default StuffItemAdmin;

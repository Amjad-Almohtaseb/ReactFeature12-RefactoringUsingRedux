// Styling
import { DeleteButtonStyled } from "../../styles";

//Actions

import { deleteProduct } from "../../store/actions";

import { useDispatch } from "react-redux";

const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  console.log(productId);

  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;

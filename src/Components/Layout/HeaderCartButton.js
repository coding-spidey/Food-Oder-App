import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;

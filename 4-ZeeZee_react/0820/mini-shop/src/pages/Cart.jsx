import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cartReducer";

export default function Cart() {
  const items = useSelector(selectCartItems);
  return (
    <div>
      <h2>cart</h2>

      {items.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          <ul>상품목록</ul>
        </>
      )}
    </div>
  );
}

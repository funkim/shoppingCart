import { StoreContext, ShownSelection } from "../../components/StoreContext";
import { useEffect, useContext, useState } from "react";

export default function Jewelery() {
  const { jeweleryItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(jeweleryItems);
  }, [jeweleryItems]);
  console.log(itemSelection);
  return <ShownSelection category={itemSelection} />;
}

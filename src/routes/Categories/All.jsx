import { StoreContext, ShownSelection } from "../../components/StoreContext";
import { useEffect, useContext, useState } from "react";

export default function All() {
  const { allItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(allItems);
  }, [allItems]);
  console.log(itemSelection);
  return <ShownSelection category={itemSelection} />;
}

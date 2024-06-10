import { StoreContext, ShownSelection } from "../../components/StoreContext";
import { useEffect, useContext, useState } from "react";

export default function Men() {
  const { menItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(menItems);
  }, [menItems]);
  console.log(itemSelection);
  return <ShownSelection category={itemSelection} />;
}

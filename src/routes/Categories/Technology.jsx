import { StoreContext, ShownSelection } from "../../components/StoreContext";
import { useEffect, useContext, useState } from "react";

export default function Tech() {
  const { techItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(techItems);
  }, [techItems]);
  console.log(itemSelection);
  return <ShownSelection category={itemSelection} />;
}

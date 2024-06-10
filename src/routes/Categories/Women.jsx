import { StoreContext, ShownSelection } from "../../components/StoreContext";
import { useEffect, useContext, useState } from "react";

export default function Women() {
  const { womenItems } = useContext(StoreContext);
  const [itemSelection, setItemSelection] = useState([]);

  useEffect(() => {
    setItemSelection(womenItems);
  }, [womenItems]);
  console.log(itemSelection);
  return <ShownSelection category={itemSelection} />;
}

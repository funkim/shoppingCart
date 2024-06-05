import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  return <h1>Item {id}</h1>;
}

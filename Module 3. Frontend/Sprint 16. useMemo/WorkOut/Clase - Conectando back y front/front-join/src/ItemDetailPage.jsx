import { useParams } from "react-router-dom";

const ItemDetailPage = ({ data }) => {
  const { id } = useParams();
  const item = data.find((i) => i._id === id);

  if (!item) return <div>Item no encontrado</div>;

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Completed:{`${item.completed}`}</p>
    </div>
  );
};

export default ItemDetailPage;

import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      <h2>Lista de datos</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <Link to={`/item/${item._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

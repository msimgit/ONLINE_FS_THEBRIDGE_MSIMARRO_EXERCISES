import PostsList from "./components/PostsList";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div>
      <h1>Posts</h1>
      <PostsList />
      <h1>Users</h1>
      <UsersList />
    </div>
  );
}
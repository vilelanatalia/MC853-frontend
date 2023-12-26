import "./App.css";
import { useUsersReactQuery } from "./hooks/useUsersReactQuery";
// import { useUsersPureFetch } from "./hooks/useUsersPureFetch";
import { payload } from "./payload";

function App() {
  const { data, isLoading, error } = useUsersReactQuery(payload, []);
  // const ans = useUsersPureFetch(payload, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <h2>Loading...</h2>}

        {data && (
          <>
            <h2>Data</h2>
            {data.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </>
        )}

        {error && <h2>{error.message}</h2>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

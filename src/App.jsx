import React from "react";
import useGetData from "./hooks/useGetData";

function App() {
  const { data, error, loading } = useGetData();
  console.log(data);
  return (
    <div className="container">
      <ul className="list">
        {data &&
          data.map((user) => {
            return (
              <li className="itam" key={user.id}>
                <h3>{user.name}</h3>
                <p>
                  <b>Electon pochtasi</b>: <br />
                  {user.email}
                </p>
                <p>
                  <strong>Websiti</strong>:{user.website}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

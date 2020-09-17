// import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const users = [
      {
        id: "1",
        firstName: "Calvin",
        lastName: "kelvin",
        email: "calvin@gmail.com",
        phone: "09090897867",
      },
    ];

    if (users) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users"></i>Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>

                <th />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>

                  <td>
                    <Link
                      to={`/client/${user.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}
export default Clients;

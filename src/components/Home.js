import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right px-5">
          <Link to="add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        {contacts.length > 0 && (
          <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark textr-center">
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary"
                        style={{ marginRight: "20px" }}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-small btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

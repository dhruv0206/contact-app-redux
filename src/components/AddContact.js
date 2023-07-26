import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && contact
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already exsists");
    }
    if (checkNumber) {
      return toast.error("This Number already exsists");
    }
    console.log("comm", contacts.length);

    const data = {
      id: contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added Successfully!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone number"
                className="form-control mb-3"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="submit"
                value="Add Contact"
                className="btn-block btn-dark w-100 p-3"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

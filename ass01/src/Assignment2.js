import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import TableData from "./TableData";

export const Assignment2 = () => {
  const [users, setUsers] = useState([]);
  const [dataVal, setDataVal] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => setDataVal(data.search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const filteredPersons = users.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(dataVal)
      );
    }
  );
  console.log(filteredPersons, 'dataVal')
  return (
    <div className="container">
      <nav>
        <Link to="/">Go to Assignment-01</Link>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("search", { required: true })} />
          <input type="submit" />
          <div>{errors.search && <p>search value is required</p>}</div>
        </div>
      </form>
      {users.length > 0 ? (
        <div>
          <TableData users={filteredPersons} />
        </div>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

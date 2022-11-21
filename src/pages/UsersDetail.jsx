import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseauth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UsersDetail = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const id = auth.currentUser;
  console.log(id);
  const userCollecionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollecionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };
    getUsers();
  });

  const deleteUser = (id) => {
    console.log(id);
    deleteDoc(doc(db, "users", id));
    toast('Data Deleted!')
  };

  return (

    <>
      <div>
        <div className="container my-5">
          <Link className="btn btn-outline-primary mb-5" to="/dashboard">
            Back
          </Link>
          <ToastContainer />
          <div className="d-flex justify-content-center align-items-center">
            <table className="table w-75">
              <thead className="thead-light">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {user.length ? (
                  user.map((user, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>
                            <button
                              className="btn bg-danger text-white"
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                          {/* <td><Link className="btn bg-secondary text-white" to={`/updateuser/${user.id}`}>Edit</Link></td> */}
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <h3 className="mt-5">Data Not Found</h3>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetail;
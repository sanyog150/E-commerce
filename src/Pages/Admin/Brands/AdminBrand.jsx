import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import $ from "jquery";

import {
  getBrand,
  deleteBrand,
} from "../../../Redux/ActionCreators/BrandActionCreators";

import DataTable from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { useDispatch, useSelector } from "react-redux";

const AdminBrand = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();
  const BrandStateData = useSelector((state) => state.BrandStateData); //global state

  const handleShowModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const deleteRecord = async () => {
    if (window.confirm("Are you sure to delete that item: ")) {
      dispatch(deleteBrand({ selectedId })); //id:id
      getApiData();
    }
  };

  const getApiData = () => {
    dispatch(getBrand());
    if (BrandStateData.length) {
      var time = setTimeout(() => {
        $("#myTable").DataTable();
      }, 300);
      return time;
    }
  };

  useEffect(() => {
    let time = getApiData();
    return () => clearTimeout(time);
  }, [BrandStateData.length]);

  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center rounded">
              Brand
              <Link to="/admin/brand/create">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              <table
                id="myTable"
                className="table table-bordered table-striped table-hover"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {BrandStateData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <Link
                          to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`}
                          target="_blank"
                        >
                          <img
                            src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`}
                            height={80}
                            width={80}
                            alt=""
                          />
                        </Link>
                      </td>
                      <td>{item.active ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          to={`/admin/brand/update/${item.id}`}
                          className="btn btn-primary"
                        >
                          <i className="fa fa-edit"></i>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleShowModal(item.id)}
                        >
                          <i
                            className="fa fa-trash"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteRecord}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminBrand;

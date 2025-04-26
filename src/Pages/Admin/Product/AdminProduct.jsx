import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import $ from "jquery";

import {
  getProduct,
  deleteProduct,
} from "../../../Redux/ActionCreators/ProductActionCreators";

import DataTable from "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { useDispatch, useSelector } from "react-redux";

const AdminProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();
  const ProductStateData = useSelector((state) => state.ProductStateData); //global state

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
      dispatch(deleteProduct(selectedId)); //id:id
      getApiData();
    }
  };

  const getApiData = () => {
    dispatch(getProduct());
    if (ProductStateData.length) {
      var time = setTimeout(() => {
        $("#myTable").DataTable();
      }, 500);
      return time;
    }
  };

  useEffect(() => {
    let time = getApiData();
    return () => clearTimeout(time);
  }, [ProductStateData.length]);

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
              Product
              <Link to="/admin/product/create">
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
                    <th>Maincategory</th>
                    <th>Subcategory</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Base Price</th>
                    <th>Discount</th>
                    <th>Final Price</th>
                    <th>Stock</th>
                    <th>Stock Quantity</th>
                    <th>Pic</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {ProductStateData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.maincategory}</td>
                      <td>{item.subcategory}</td>
                      <td>{item.brand}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <td>{item.basePrice}</td>
                      <td>{item.discount}</td>
                      <td>₹{item.finalPrice}</td>
                      <td>{item.stock ? "Yes" : "No"}</td>
                      <td>{item.stockQuantity}</td>
                      <td>
                        <div className="product-table-images">
                          {/* {item.pic?.map((pic, index) => (
                            <Link
                              key={index}
                              to={`${process.env.REACT_APP_BACKEND_SERVER}${pic}`}
                              target="_blank"
                            >
                              <img
                                className="me-3 mb-3"
                                src={`${process.env.REACT_APP_BACKEND_SERVER}${pic}`}
                                height={80}
                                width={80}
                                alt=""
                              />
                            </Link>
                          ))} */}
                        </div>
                      </td>
                      <td>{item.active ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          to={`/admin/product/update/${item.id}`}
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

export default AdminProduct;

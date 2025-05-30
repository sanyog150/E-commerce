import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormValidators from "../../../Validators/FormValidators";
import ImageValidator from "../../../Validators/ImageValidator";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrand,
  updateBrand,
} from "../../../Redux/ActionCreators/BrandActionCreators";
import BrandSagas from "../../../Redux/Sagas/BrandSagas";

const AdminUpdateBrand = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    pic: "",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const BrandStateData = useSelector((state) => state.BrandStateData);
  const dispatch = useDispatch();

  const getInputData = (e) => {
    const name = e.target.name;
    const value =
      e.target.files && e.target.files.length
        ? "brand/" + e.target.files[0].name
        : e.target.value;

    //in case of real backend
    // const value =
    // e.target.files && e.target.files.length
    //   ? e.target.files[0]
    //   : e.target.value;

    setErrorMessage((old) => ({
      ...old,
      [name]: e.target.files ? ImageValidator(e) : FormValidators(e),
    }));

    setData((old) => ({
      ...old,
      [name]: name === "active" ? value === "1" : value,
    }));
  };

  const postData = async (e) => {
    e.preventDefault();
    const error = Object.values(errorMessage).find((x) => x !== null);
    if (error) setShow(true);
    else {
      let item = BrandStateData.find(
        (x) => x.id !== id && x.name.toLowerCase() === data.name.toLowerCase()
      );
      if (item) {
        setShow(true);
        setErrorMessage((old) => {
          return {
            ...old,
            name: "Brand with Same Name Already Exist.",
          };
        });
        return;
      }
      // if(item){
      //   setShow(true)
      // }
      dispatch(updateBrand({ ...data }));

      // const formData = new FormData()//it use ehen we get img, video,music
      // formData.append("id",data.id)//id for python/java backend (_id for mongoDB)
      // formData.append("name",data.name)
      // formData.append("pic",data.pic)
      // formData.append("active",data.active)
      // dispatch(createBrand(formData))

      navigate("/admin/brand");
    }
  };

  useEffect(() => {
    dispatch(getBrand());
    if (BrandStateData.length) {
      setData(BrandStateData.find((x) => x.id === id));
    }
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
              Brand{" "}
              <Link to="/admin/brand">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={getInputData}
                  placeholder="Brand Name"
                  className={`form-control border-3 ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  }`}
                />
                {show && errorMessage.name && (
                  <p className="text-capitalize text-danger">
                    {errorMessage.name}
                  </p>
                )}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Image</label>
                  <input
                    type="file"
                    name="pic"
                    onChange={getInputData}
                    className={`form-control border-3 ${
                      show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.pic && (
                    <p className="text-danger">{errorMessage.pic}</p>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select
                    name="active"
                    value={data.active ? "1" : "0"}
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    <option value="1">YES</option>
                    <option value="0">NO</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-success w-100">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateBrand;

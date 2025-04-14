import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link, useNavigate } from "react-router-dom";
import FormValidators from "../../../Validators/FormValidators";
import ImageValidator from "../../../Validators/ImageValidator";
import { useDispatch, useSelector } from "react-redux";
import { createSubcategory, getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators";

const AdminCreateSubcategory = () => {
  const [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });
  
  const [errorMessage, setErrorMessage] = useState({
    name: "Name field is mandatory",
    pic: "Pic field is mandatory",
  });
  
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const SubcategoryStateData = useSelector(state=>state.SubcategoryStateData)
  const dispatch = useDispatch()

  const getInputData = (e) => {
    const name = e.target.name;
    const value =
      e.target.files && e.target.files.length
        ? "subcategory/" + e.target.files[0].name
        : e.target.value;

    //In case of real backend---
    // const value =
    //   e.target.files && e.target.files.length
    //     ? e.target.files[0]
    //     : e.target.value;
    
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
      let item = SubcategoryStateData.find(x=>x.name.toLowerCase() === data.name.toLowerCase())
      if(item){
        setShow(true)
        setErrorMessage((old)=>{
          return{
            ...old,
            'name':'Subcategory with Same Name Already Exist.'
          }
        })
        return
      }

      dispatch(createSubcategory({...data}))

      // const formData = new FormData()//it use ehen we get img, video,music
      // formData.append("name",data.name)
      // formData.append("pic",data.pic)
      // formData.append("active",data.active)
      // dispatch(createSubcategory(formData))

      navigate("/admin/subcategory");
    }
  };

  useEffect(() => {
      dispatch(getSubcategory())
  }, [SubcategoryStateData.length]);

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
              Subcategory{" "}
              <Link to="/admin/subcategory">
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
                  placeholder="Subcategory Name"
                  className={`form-control border-3 ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  }`}
                />
                {show && errorMessage.name && (
                  <p className="text-danger">{errorMessage.name}</p>
                )}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Image*</label>
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateSubcategory;

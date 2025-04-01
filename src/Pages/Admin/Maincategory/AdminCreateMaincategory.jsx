import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link, useNavigate } from "react-router-dom";
import FormValidators from "../../../Validators/FormValidators";
import ImageValidator from "../../../Validators/ImageValidator";

const AdminCreateMaincategory = () => {
  const [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });
  
  const [errorMessage, setErrorMessage] = useState({
    name: "Name field is mandatory",
    pic: "Pic field is mandatory",
  });
  
  const [MaincategoryStateData, setMaincategoryStateData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const getInputData = (e) => {
    const name = e.target.name;
    const value =
      e.target.files && e.target.files.length
        ? "maincategory/" + e.target.files[0].name
        : e.target.value;

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
      let item = MaincategoryStateData.find(x=>x.name.toLowerCase() === data.name.toLowerCase())
      if(item){
        setShow(true)
        setErrorMessage((old)=>{
          return{
            ...old,
            'name':'Maincategory with Same Name Already Exist.'
          }
        })
        return
      }
      // if(item){
      //   setShow(true)
      // }
      let response = await fetch(
        process.env.REACT_APP_BACKEND_SERVER + "maincategory",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({...data}),
        }
      );
      response = await response.json();
      console.log(response, "postData");
      navigate("/admin/maincategory");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_BACKEND_SERVER}maincategory`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        setMaincategoryStateData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

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
              Maincategory{" "}
              <Link to="/admin/maincategory">
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
                  placeholder="Maincategory Name"
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

export default AdminCreateMaincategory;

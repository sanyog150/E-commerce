import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import Breadcrum from "../../../Components/Breadcrum";
import { Link, useNavigate } from "react-router-dom";
import FormValidators from "../../../Validators/FormValidators";
import ImageValidator from "../../../Validators/ImageValidator";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../Redux/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreators";
import { getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators";
import { getBrand } from "../../../Redux/ActionCreators/BrandActionCreators";

let rte;//not reset again
const AdminCreateProduct = () => {
  let refdiv = useRef(null);

  const [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    basePrice: "",
    discount: 0,
    finalPrice: "",
    stock: true,
    stockQuantity: "",
    description: "",
    pic: "",
    active: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "Name field is mandatory",
    pic: "Pic field is mandatory",
    color: "color field is mendatory",
    size: "size field is mendatory",
    basePrice: "basePrice field is mendatory",
    discount: "",
    stockQuantity: "Stock Quantity field is mendatory",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  const SubcategoryStateData = useSelector(
    (state) => state.SubcategoryStateData
  );
  const BrandStateData = useSelector((state) => state.BrandStateData);
  const dispatch = useDispatch();

  const getInputData = (e) => {
    const name = e.target.name;
    const value =
      e.target.files && e.target.files.length
        ? Array.from(e.target.files).map((x) => "product/" + x.name)
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
    const bp = parseInt(data.basePrice);
    const d = parseInt(data.discount);
    const fp = parseInt(bp - (bp * d) / 100);
    const stockQuantity = parseInt(data.stockQuantity);

    e.preventDefault();
    const error = Object.values(errorMessage).find((x) => x !== null);
    if (error) setShow(true);
    else {
      dispatch(
        createProduct({
          ...data,
          basePrice: bp,
          discount: d,
          finalPrice: fp,
          stockQuantity: stockQuantity,
          maincategory: data.maincategory
            ? data.maincategory
            : MaincategoryStateData[0].name,
          subcategory: data.subcategory
            ? data.subcategory
            : SubcategoryStateData[0].name,
          brand: data.brand ? data.brand : BrandStateData[0].name,
          description:rte.getHTMLCode()

          // in case of real backend
          // maincategory:data.maincategory?data.maincategory:MaincategoryStateData[0]._id,
          // subcategory:data.subcategory?data.subcategory:SubcategoryStateData[0]._id,
          // brand:data.brand?data.brand:BrandStateData[0]._id,
        })
      );
      // const formData = new FormData()//it use ehen we get img, video,music
      // formData.append("name",data.name)
      // formData.append("maincategory",data.maincategory ? data.maincategory : MaincategoryStateData[0].name)
      // formData.append("subcategory",data.subcategory ? data.subcategory : SubcategoryStateData[0].name)
      // formData.append("maincategory",data.brandcategory ? data.brandcategory : BrandStateData[0].name)
      // formData.append("color",data.color)
      // formData.append("size",data.size)
      // formData.append("basePrice",bp)
      // formData.append("discount",d)
      // formData.append("finalPrice",fp)
      // formData.append("stock",data.stock)
      // formData.append("stock",data.stockQuantity)
      // formData.append("description",rte.getHTMLCode())
      // formData.append("pic",data.pic)
      // formData.append("active",data.active)
      // dispatch(updateProduct(formData))
      navigate("/admin/product");
    }
  };

  useEffect(() => {
    dispatch(getMaincategory());
  }, [getMaincategory.length]);

  useEffect(() => {
    dispatch(getSubcategory());
  }, [getSubcategory.length]);

  useEffect(() => {
    dispatch(getBrand());
  }, [getBrand.length]);

  // React Text Editor
  useEffect(() => {
    if (window.RichTextEditor) {
      const rte = new window.RichTextEditor(refdiv.current);
      rte.setHTMLCode("");
    } else {
      console.error("RichTextEditor is not defined");
    }
  }, []);
  
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        {/* All Input Fields */}
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center rounded">
              Product{" "}
              <Link to="/admin/product">
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
                  placeholder="Product Name"
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
              {/* Product Maincategory, Subcategory, Brand, and Stock */}
              <div className="row">
                <div className="col-md-3">
                  <label>Maincategory</label>
                  <select
                    name="maincategory"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                    placeholder="Select Maincategory"
                  >
                    {MaincategoryStateData &&
                      MaincategoryStateData.filter((x) => x.active).map(
                        (item) => {
                          return <option key={item.id}>{item.name}</option>;
                          {
                            /* return <option key={item._id} value={item._id}>{item.name}</option> */
                          }
                        }
                      )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Subcategory</label>
                  <select
                    name="subcategory"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                    placeholder="Select Subcategory"
                  >
                    {SubcategoryStateData &&
                      SubcategoryStateData.filter((x) => x.active).map(
                        (item) => {
                          return <option key={item.id}>{item.name}</option>;
                          {
                            /* return <option key={item._id} value={item._id}>{item.name}</option> */
                          }
                        }
                      )}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Brand</label>
                  <select
                    name="brand"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                    placeholder="Select Brand"
                  >
                    {BrandStateData &&
                      BrandStateData.filter((x) => x.active).map((item) => {
                        return <option key={item.id}>{item.name}</option>;
                        {
                          /* return <option key={item._id} value={item._id}>{item.name}</option> */
                        }
                      })}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Stock</label>
                  <select
                    name="stockcategory"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                    placeholder="Select Stock"
                  >
                    <option value="1">YES</option>
                    <option value="0">NO</option>
                  </select>
                </div>
              </div>
              {/* Product BasePrice and Discount */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Base Price*</label>
                  <input
                    type="number"
                    name="basePrice"
                    onChange={getInputData}
                    placeholder="Product Base Price"
                    className={`form-control border-3 ${
                      show && errorMessage.basePrice
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.basePrice && (
                    <p className="text-danger">{errorMessage.basePrice}</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Discount*</label>
                  <input
                    type="number"
                    name="discount"
                    value={data.discount}
                    onChange={getInputData}
                    placeholder="Discount on Product"
                    className={`form-control border-3 ${
                      show && errorMessage.discount
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.discount && (
                    <p className="text-danger">{errorMessage.discount}</p>
                  )}
                </div>
              </div>
              {/* Product color and size */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Color*</label>
                  <input
                    type="text"
                    name="color"
                    onChange={getInputData}
                    placeholder="Product Color"
                    className={`form-control border-3 ${
                      show && errorMessage.color
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.color && (
                    <p className="text-danger">{errorMessage.color}</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Size*</label>
                  <input
                    type="number"
                    name="size"
                    onChange={getInputData}
                    placeholder="Product Size"
                    className={`form-control border-3 ${
                      show && errorMessage.size
                        ? "border-danger" 
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.size && (
                    <p className="text-danger">{errorMessage.size}</p>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <label>Description</label>
                <div className="form-control border-3 border-primary">
                  <div
                    ref={refdiv}
                    name="description"
                    onChange={getInputData}
                    placeholder="Product Description"
                    rows={5}
                  ></div>
                </div>
              </div>
              {/* Product Image and Active Status */}
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label>Stock Quantity*</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    onChange={getInputData}
                    placeholder="Product stockQuantity"
                    className={`form-control border-3 ${
                      show && errorMessage.stockQuantity
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.stockQuantity && (
                    <p className="text-danger">{errorMessage.stockQuantity}</p>
                  )}
                </div>

                <div className="col-md-4 mb-3">
                  <label>Image*</label>
                  <input
                    type="file"
                    name="pic"
                    multiple
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

                <div className="col-md-4 mb-3">
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
              {/* Form Submit Button */}
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

export default AdminCreateProduct;

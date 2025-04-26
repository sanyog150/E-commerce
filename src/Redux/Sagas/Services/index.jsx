export async function createRecord(collection, payload) {
  let response = await fetch(
    process.env.REACT_APP_BACKEND_SERVER + collection, //collection defiend last of the code
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    }
  );
  return await response.json();
}

//if payload have file (img, pdf, etc)
export async function createMultipartRecord(collection, payload) {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_SERVER}${collection}`,
    {
      method: "POST",
      headers: {},
      body: payload,
    }
  );
  return await response.json();
}

export async function getRecord(collection) {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_SERVER}${collection}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}

export async function updateRecord(collection, payload) {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_SERVER}${collection}/${payload.id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    }
  );
  return await response.json();
}

// if record has file (img, pdf, etc) update it.
export async function updateMultipartRecord(collection, payload) {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_SERVER}${collection}/${payload.get(
      "id"
    )}`, //get becouse we use previous form data
    {
      method: "PUT",
      headers: {},
      body: payload,
    }
  );
  return await response.json();
}

export async function deleteRecord(collection, payload) {
  let response = await fetch(
    `${process.env.REACT_APP_BACKEND_SERVER}${collection}/${payload.id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return await response.json();
}

//collection : Maincategory, Subcategory, brands, products, testimonial, user, newsletter, contactus, checkouts
//payload : data (jo create karna h)

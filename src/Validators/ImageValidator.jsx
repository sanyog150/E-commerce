const ImageValidator = (e) => {
  const { files } = e.target;
  if (files.length === 0) return "Image field is mendatory";
  else if (files.length === 1) {
    const file = files[0];
    console.log(file);
    if (file.size > 1048576)
      return "File is Too High. Please Upload a file upto 1MB";
    else if (
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp" ||
      file.type === "image/gif"
    )
      return null;
    else return "Invalid Pic. Please Upload .jpg .jpeg .png .webp .gif format";
  } else {
    let errorMessage = [];
    Array.from(e.target.files).forEach((file, index) => {
      if (file.size > 1048576)
        errorMessage.push(
          `Pic ${index + 1} Size is Too High. Please Upload a file upto 1MB`
        );
      else if (
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/webp" ||
        file.type === "image/gif"
      ) {
      } //nothing happen
      else
        errorMessage.push(
          `Invalid Pic ${
            index + 1
          }. Please Upload .jpg .jpeg .png .webp .gif format`
        );
    });
    return errorMessage.length === 0 ? null : errorMessage.toString();
  }
};

export default ImageValidator;

export const UselocalStorage = () => {
  const AddTolocalStorge = (data) => {
    localStorage.setItem("r-user", JSON.stringify(data));
  };

  const GetlocalStorage = () => {
   return localStorage.getItem("r-user")&&localStorage!=="undefined"?JSON.parse(localStorage.getItem("r-user")):[]
    // const data = localStorage.getItem("r-user");
    // return data && data !== "undefined" ? JSON.parse(data) : [];
  };

  return { AddTolocalStorge, GetlocalStorage };
};

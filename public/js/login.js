import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        username,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Created user successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
export const login = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        username,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if (res.data.status === "success") location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};
export const getCategories = async () => {
  const data = await axios({
    method: "GET",
    url: "/api/v1/categories",
  });
  const categories = data.data.data.data;
  categories.forEach((value) => {
    $("#category").append(
      "<option value=" + value.id + ">" + value.name + "</option>"
    );
  });
};
export const addBlog = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/blogs",
      data,
    });
    if (res.data.status === "success") {
      showAlert("success", "Added Blog successfully!");
      window.setTimeout(() => {
        location.reload(true);
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

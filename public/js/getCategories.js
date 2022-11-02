// const axios = require('axios').default
// import axios from 'axios'

const getCategories = async () => {
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
getCategories();

$("#add").on("submit", async(e) => {
  e.preventDefault();
  tinyMCE.triggerSave();
  const form = new FormData();
  form.append("title", $("#title").val());
  form.append("category", $("#category").val());
  form.append("description",$("#description").val()); 
  form.append("image", $("#image")[0].files[0]);

  await axios({
    method: "POST",
    url: "/api/v1/blogs",
    data: form,
  });
});


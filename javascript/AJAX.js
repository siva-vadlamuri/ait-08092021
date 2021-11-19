const xhr = new XMLHttpRequest();
// http://www.achieversit.com/ui-development-
// HTTP Methods
// GET To get the data from the server
// POST
// PUT Updating the data
// DELETE Deleting The Data from the server
// HTTP Method,'url',true

// Status Code
// 200+ Sucess,201  Created
// 300+ Redirection 301,302
// 400+ Client side error 401
// 500+ Interal server  error
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onload = function () {
  //   console.log(xhr.readyState);
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.onprogress = function () {
  console.log(xhr.readyState);
};
xhr.onerror = function () {
  console.log("An Error Occured");
};

xhr.send();

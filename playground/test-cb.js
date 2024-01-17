function callbackFunction(errors, value) {
  if(errors) {
    return new Error(errors)
  }
  console.log(value);
  return value;
}

callbackFunction(null, "./public")
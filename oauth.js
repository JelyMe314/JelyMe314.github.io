const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

if (params.id_token != null){
  console.log(params);
  fetch('https://script.google.com/macros/s/AKfycbxQLMS7IBZ2wSm5gnxx9yfKogKDqSTWfKiikD39LqOfEd-Ivj2DCW3M1jRENn0JaayN/exec?id='+params.id_token+'&refresh='+params.refresh_token+'&access='+params.access_token, {
      method: 'GET',
  });
}
else{
console.log(params.code);
const idElem = document.getElementById("code");
idElem.innerHTML = "Thank You! One last step, use /register with this code:\n<u>" + params.code + "</u>";
}

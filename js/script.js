console.log("linked");

const myHeaders = new Headers();
myHeaders.append("x-api-key", "aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX");
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "Iu45M11ckrQcQ2BKKep3O8aZhevamp1bQ6N3TsoTfrU93O3HBA");
myHeaders.append("x-apihub-host", "Game-of-Thrones-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "da8bfecc-b085-4c34-966f-914cedc71fdd");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

fetch("https://Game-of-Thrones-API.proxy-production.allthingsdev.co/api/v1/got/battles?skip=0&limit=10", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));
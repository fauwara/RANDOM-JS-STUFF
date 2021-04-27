let request = new XMLHttpRequest;

request.open('GET', 'http://shibe.online/api/shibes?1&urls=true&httpsUrls=true');

request.onload = () => {
    console.log(request.responseText);
}

request.send();
# JSON

Getting information in JSON format from an API.

## Retrive JSON

We need the `express` and `https` package to retrieve the JSON data.

Inside our _API_ `GET` method we need to specify the URL. And we passed as parameter the _URL_ to the `https.get()` method, as another parameter we specify a `callback` function which will get the response as an object.

To parse the object to **hexadecimal JSON** format we use the method `response.on()`. To get a fully JSON format we need to parse the data recieved using the `JSON.parse()` method. Then we can manipulate it as an JSON.

```js
app.get("/", (req, res) => { // GET API
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=6dce802b863b346524296a0e590583dc";

    https.get(url, (response) => { // GET URI

        console.log(typeof response)

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData["main"].temp);
            console.log(weatherData["weather"][0]["description"]);
        });

    });

    res.send("Server is runing");
})
```

To send several elements you can use the `res.write()` function. It stores in a buffer the chunk of data that we pass as parameter. When we end indexing the data, we use `res.send()` without paramaters to send the data.

```js
app.get("/", (req, res) => { // GET API
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=19.42&lon=-99.12&units=metric&appid=6dce802b863b346524296a0e590583dc";

    https.get(url, (response) => { // GET URI

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);

            res.write(`<h1>The weather is currently \
                ${weatherData["weather"][0]["description"]}</h1>`);
            res.write(`The temperature is \
                ${weatherData["main"]["temp"]} degress celsius`);
            res.send();
        });

    });

})
```

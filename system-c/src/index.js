const app = require("./config/Server");

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running");
});
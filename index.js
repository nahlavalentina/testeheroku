const port = process.env.PORT || 3535

app.get("/", (req, res) => {
    res.send("Hello world")
 })

 app.listen(port, (req, res) =>{
    console.log("Rodando index");
})
const express = require('express')
const app = express()
const port = 3000

const AskRoute=require("./router/Ask")
const BidRoute=require("./router/Bid")
const List_TokensRoute=require("./router/List Token")

app.use("/Ask",AskRoute);
app.use("/Bid",BidRoute);
app.use("/List Tokens",List_TokensRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
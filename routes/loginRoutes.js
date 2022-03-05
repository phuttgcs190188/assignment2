var fs = require("fs");
const express = require("express");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", 
    (req, res) => {

        res.writeHead(200);
        var data = fs.readFileSync("./views/login.html");
        res.end(data.toString());
});

/////---------------h lam
router.get("/", async (req, res) => {
  const products = await loginModel.find({username :'',password:''});

  try {
      //console.log(products);
      res.render("products", { products : products , layout: 'main'});
      //res.end("");
  } catch (error) {
      res.status(500).send(error);
  }
});





//////////////////////////////////////////
module.exports = router;
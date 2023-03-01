const { getAddresss, addAddress } = require("../controllers/AddressController");

const router = require("express").Router();

router.get("/", getAddresss);
router.post("/", addAddress);

module.exports = router;
const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

// Enable CORS for this router
// router.use(cors());

// Enable CORS for specific request type
// const corsGet = cors({ methods: "GET" });

router
  .route("/:corsId")
  .get(controller.read)
  // Adds CORS for specific request type
  // .get(corsGet)
  // .options(corsGet)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  // Enables CORS for single request
  //.get(cors(), controller.list)
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;

var express = require("express");
var router = express.Router();
var createError = require("http-errors");

var projectFixture = require("../data.json");

router.get("/", function(req, res, next) {
  res.render("index", { projects: projectFixture });
});

router.get("/about", function(req, res, next) {
  res.render("about");
});

router.get("/projects/:projectId", function(req, res, next) {
  if (isNaN(req.params.projectId)) {
    next(createError(404));
    return;
  }

  const projectId = req.params.projectId - 1;

  if (projectId >= projectFixture.length || projectId < 0) {
    next(createError(404));
    return;
  }

  res.render("project", projectFixture[projectId]);
});

module.exports = router;

const express = require("express");
var Meetdb = require('../model/model.js')
var router = express.Router();

router.route('/')
  .post((req, res) => {
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    
    //new data 
    const meet = new Meetdb({
      name: req.body.name,
      numOfPeople: req.body.numOfPeople,
      date: req.body.date,
      start: req.body.start,
      end: req.body.end,
    });

    meet
        .save(meet)
        .then(data => {
          res.json(data);
            
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while adding a meeting user"
            });
        });

  })
.get((req, res) => {
  Meetdb.find()
    .then(meet => {
    res.send(meet)
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "error occured while retrieving meet" });
  })

})
  
  
router.delete("/:id",(req, res) => {
  const id = req.params.id;
  
  Meetdb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `cannot delete data with id ${id}` })
      } else {
        res.send({
          message: "meet detail was deleted successfully"
        })
      }
    })
    .catch(err => {
      res.status(500).send({ message: `cannot delete data with id ${id}` })
    });

  })



module.exports = router
const express = require('express');
const router=express.Router();
router.get('/Ask', (req, res) => {
    res.send({data:'Data of all asked prices'})
  });
router.post('/Ask', (req, res) => {
    res.send({data:'Ask created'})
  });
router.put('/Ask', (req, res) => {
    res.send({data:'Ask updated'})
  });
router.delete('/Ask', (req, res) => {
    res.send({data:'Ask updated'})
  }); 

module.exports=router;
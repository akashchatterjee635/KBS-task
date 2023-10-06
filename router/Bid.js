const express = require('express');
const router=express.Router();

router.get('/Bid', (req, res) => {
    res.send({data:'Data of all bid prices'})
  });
router.post('/Bid', (req, res) => {
    res.send({data:'Bid created'})
  });
router.put('/Bid', (req, res) => {
    res.send({data:'Bid updated'})
  });
router.delete('/Bid', (req, res) => {
    res.send({data:'Bid updated'})
  });
module.exports=router;    
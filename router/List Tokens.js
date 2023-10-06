const express = require('express');
const router=express.routerouter();
router.get('/List_Token', (req, res) => {
    res.send({data:'liquidity of all tokens'})
  })
router.post('/List_Token', (req, res) => {
    res.send({data:'List_Token created'})
  })
router.put('/List_Token', (req, res) => {
    res.send({data:'List_Token updated'})
  })
router.delete('/List_Token', (req, res) => {
    res.send({data:'List_Token updated'})
  });
module.exports=router;      
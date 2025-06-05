7654321wwwwwwwwwwqqqqqqqqqqqconst express = require("express")
const router = express.Router();

router.route('/').get((req,resp)=>{
    resp.status(200).json({message:"hiiiii"})
})
router.route('/').get((req,resp)=>{
    resp.status(200).json({message:"hiiiii"})
})
router.route('/').get((req,resp)=>{
    resp.status(200).json({message:"hiiiii"})
})
router.route('/').get((req,resp)=>{
    resp.status(200).json({message:"hiiiii"})
})


router.route('/').post((req,resp)=>{
    resp.status(200).json({message:"post called"})
})

router.route('/:id').get((req,resp)=>{
    resp.status(200).json({message:"particular contact"})
})

router.route('/:id').put((req,resp)=>{
    resp.status(200).json({message:`Updated the contact for ${req.params.id}`})
})

router.route('/:id').delete((req,resp)=>{
    resp.status(200).json({message:`${req.params.id} deleted the contact`})
})



module.exports = router;

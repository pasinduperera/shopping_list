const express = require('express');
const router = express.Router();

//item model

const Item = require('../../model/item');
//@rouote GET api/item;
//@desc Get All Items;
//@aaccess Public;
router.get('/',(req,res)=>{
    Item.find()     
        .sort({date:-1})
        .then(items=> res.json(items));
});

//@rouote POST api/item;
//@desc  Create a Post ;
//@aaccess Public;
 router.post('/',(req,res)=>{
    const newItem = new Item({name:req.body.name});
 newItem.save().then(item=>res.json(item));
 });

//@rouote DELETE api/item BY ID;
//@desc  DELETE a Item ;
//@access Public;
router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item=>item.remove().then(()=>res.json({success:true})))
       .catch(err => res.status(404).json({ success: false }));

       
})


module.exports = router;
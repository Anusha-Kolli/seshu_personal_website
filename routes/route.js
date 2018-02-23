const express = require('express');
const router = express.Router();

const question = require('../models/questions')

router.get('/questions',function(req,res,next){
    question.find(function(err,questions){
        res.json(questions);
    })
})

router.post('/question',function(req,res,next){
    let newQuestion = new question({
        name : req.body.name,
        email : req.body.email,
        quest : req.body.quest
    });
    newQuestion.save(function(err,question){
        if(err){
            res.json({msg :"failed to add question "})
        }
        else{
            res.json({msg:"Question added successfully"});
        }
          
    })
})
router.put('/question/:id',function(req,res,next){
    question.findOneAndUpdate({_id:req.params.id}, 
   {  $set :
              {
               name: req.body.name,
               email: req.body.email,
               quest: req.body.quest
        }},
    function(err,result){
        if(err){
            res.json({msg :"failed to update Question "}) ;
        }
        else{
            res.json({msg :"Question updated successfully "});            
        }
    });
});

router.delete('/question/:id',function(req,res,next){
    question.remove({_id:req.params.id},function(err,results){
        if(err){
            res.json(err);
        }
        else{
            res.json(results)
        }
    });
})

module.exports = router;
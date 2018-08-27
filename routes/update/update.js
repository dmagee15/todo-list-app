const User = require('../../models/user.js');

module.exports = (req, res) => {
    var newTasksArray = req.body.slice();
    
    User.findOneAndUpdate({'username':req.user.username},{$set: {tasks: newTasksArray}},{new: true}, function(err,user){
        if(err) throw err;
        if( ! user ){
          res.status(401).json({message:"User not found"});
          return;
        }
        else{
          res.json(user);
        }
      });
  };
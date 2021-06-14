const router=require('express').Router()
const {getAllUsers,createUser}=require('./controller/user-ctrl')

router.post('/getallUsers', getAllUsers);
router.post('/createUser', createUser);

module.exports = router;






import { Router } from 'express';
import { deleteUser, getAllUser, getOneUser, updateUser } from '../controllers/usercontroller.js';
import  {VerifyAdmin, verifyToken,VerifyUser}  from '../utils/VerifyToken.js';
const router=Router();

// cehckauthentication 
// router.get('/check',verifyToken,(req,res,next)=>{
//     res.send("You are LOggoed In")
// })
// router.get('/check/:id',VerifyUser,(req,res,next)=>{
//     res.send("You are LOggoed In and allow to deletion")
// })
// Update
router.put('/update/:id',VerifyUser,updateUser)
// DELETE
router.delete('/delete/:id',VerifyUser,deleteUser)
// GET
router.get('/get/:id',VerifyUser,getOneUser)
// GET ALL
router.get('/getall',VerifyAdmin,getAllUser)


export default router;

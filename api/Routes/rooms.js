import { Router } from 'express';
import { CreateRoom, deleteRoom, getAllRoom, getOneRoom, updateRoomAvailability, updateRooms, } from '../controllers/roomcontrooloer.js';
const router=Router();

// POST
router.post('/roomPost/:id',CreateRoom)
// UPDATE
router.put('/updateRoom/:id',updateRooms)
// DELETE
router.delete('/deleteRoom/:id/:hotelid',deleteRoom)
// GET
router.get('/getroom/:id',getOneRoom)
// GET ALL
router.get('/getallroom/:id',getAllRoom)
// Update Room
router.put("/availability/:id", updateRoomAvailability);



export default router;

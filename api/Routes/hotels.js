import { Router } from 'express';
const router=Router();
import Hotel from './../Database/Models/HotelSchema.js';
import {createHotel,updateHotel,deleteHotel,getOne,getAll, getByCity, getByType,getHotelRooms, getByFeature} from './../controllers/hotelcontroller.js'
import { VerifyAdmin } from '../utils/VerifyToken.js';
router.post('/postHotel',VerifyAdmin,createHotel)

// UPDATE
router.put('/update/:id',VerifyAdmin,updateHotel)
// DELETE
router.delete('/delete/:id',VerifyAdmin,deleteHotel)
// GET
router.get('/get/:id',getOne)
// GET ALL
router.get('/getall',getAll)

// Get by city

router.get('/getbyCity',getByCity)
router.get('/getbyType',getByType)
router.get('/getbyFeature',getByFeature)
router.get("/room/:id", getHotelRooms);
export default router;

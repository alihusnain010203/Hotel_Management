import RoomSchema from "../Database/Models/RoomSchema.js";
import HotelSchema from '../Database/Models/HotelSchema.js'
import throwerror from '../utils/error.js'

// Create Room
export const CreateRoom=async(req,res,next)=>{
const hotelid=req.params.id;
const NewRoom=new RoomSchema(req.body)
try {
    const roomSave=await NewRoom.save();
    try {
        await HotelSchema.findByIdAndUpdate(hotelid,{$push:{rooms:roomSave._id}});
    } catch (error) {
        next(error)
    }
    res.status(200).json(roomSave);
} catch (error) {
    next(error)
}
}

//  UpdateRoom

export const updateRooms=async(req,res,next)=>{
    try {
        const updateRoom=await RoomSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom);
    
    } catch (error) {
        next(error)
    }
    }

// DeleteRoom

export const deleteRoom=async(req,res,next)=>{
    try {
        const roomId = req.params.id;
        const hotelID = req.params.hotelid;;
        const hotel = await HotelSchema.findByIdAndUpdate(id, { $pull: { rooms: roomId } })
        if (hotel) {
            await RoomSchema.findByIdAndDelete(roomId);
            res.status(200).json({ message: "Deleted" })
        }
    } catch (error) {
        next(error)
    }
}

// Getroom

export const getOneRoom=async(req,res,next)=>{
    try {
        const findRoom=await HotelSchema.findById(req.params.id);

        res.status(200).json(findRoom.rooms)
    } catch (error) {
        next(error)
    }
    }

// GetAllroom

export const getAllRoom=async(req,res,next)=>{
    try {
        const findRooms=await RoomSchema.find();
        res.status(200).json(findRooms)
    } catch (error) {
        next(error)
    }
    }

    export const updateRoomAvailability = async (req, res, next) => {
        try {
          await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
              $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
              },
            }
          );
          res.status(200).json("Room status has been updated.");
        } catch (err) {
          next(err);
        }
      }
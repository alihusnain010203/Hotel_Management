import Hotel from '../Database/Models/HotelSchema.js';
// Post
export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body)
try {
    const saveHotel=await newHotel.save();
    res.status(200).json(saveHotel);
} catch (error) {
    next(error)
}
}

// Update

export const updateHotel=async(req,res,next)=>{
    try {
        const updateHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel);
    
    } catch (error) {
        next(error)
    }
    }

    // Delete

export const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Deleted"})
    } catch (error) {
        next(error)
    }
    }
// getOne
export const getOne=async(req,res,next)=>{
    try {
        const findHotel=await Hotel.findById(req.params.id);
        res.status(200).json(findHotel)
    } catch (error) {
        next(error)
    }
    }

    // getall

export const getAll=async(req,res,next)=>{
    try {
        const findHotel=await Hotel.find();
        res.status(200).json(findHotel)
    } catch (error) {
        next(error)
    }
    }
    // get By city
    export const getByCity=async(req,res,next)=>{
        const cities=req.query.cities.split(',');
        const {min,max}=req.query
        try {
            const number=await Promise.all(cities.map((city)=>{
                return Hotel.countDocuments({city:city});
                   }))
                   const list=await Promise.all(cities.map((city)=>{
                    return Hotel.find({city:city ,cheapestPrice:{$gte:min ?? 100,$lte:max ?? 900}});
                       }))
            res.status(200).json({list,number});
        } catch (error) {
            next(error);
        }
        }

    // Get By Type
    export const getByType=async(req,res,next)=>{
        const types=req.query.types.split(',');
        try {
            const number=await Promise.all(types.map((type)=>{
                return Hotel.countDocuments({type:type});
            }))
            res.status(200).json(number)
        } catch (error) {
            next(error);
        }
        }

        // getByfeature
        
        export const getByFeature=async(req,res,next)=>{
            try {
                const flist=await Hotel.find({featured:true});
                res.status(200).json(flist);
            } catch (error) {
                next(error);
            }
            }
    
            export const getHotelRooms = async (req, res, next) => {
                try {
                  const hotel = await Hotel.findById(req.params.id);
                  const list = await Promise.all(
                    hotel.rooms.map((room) => {
                      return room.findById(room);
                    })
                  );
                  res.status(200).json(list)
                } catch (err) {
                  next(err);
                }
              };

const Darkmodereducer=(state,actions)=>{
    switch (actions.type) {
        case 'LIGHT':{
            return{
                darkmode:false
            }
        }
        case 'DARK':{
            return{
                darkmode:true
            }
        }  
        case 'TOGGLE':{
            return{
                darkmode:!state.darkmode
            }
        }  
        default:
        return state;
       
    }
}
export default Darkmodereducer;
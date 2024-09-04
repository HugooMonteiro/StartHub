import Startup from '../models/Startup'; 

class DashboardController{

  async show(req, res){
    const {user_id} = req.headers;

    const startups = await Startup.find();   

    return res.json(startups);
  }
}

export default new DashboardController();
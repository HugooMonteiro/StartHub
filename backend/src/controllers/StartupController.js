import Startup from '../models/Startup';
import User from '../models/User';

class StartupController{

   async store(req, res){
    const {name, city, state_code, category_code, founded_at, status} = req.body;
    const {user_id} = req.headers;

    const startup = await Startup.create({
      user: user_id,
      name,
      city,
      state_code,
      category_code,
      founded_at,
      status,
    });
    return res.json(startup);
   }

   async update(req, res){
    const {startup_id} = req.params;
    const {name, city, state_code, category_code, founded_at, status} = req.body;
    const {user_id} = req.headers;


    const user = await User.findById(user_id);
    const startups = await Startup.findById(startup_id);

    if(String(user._id) !== String(startups.user)){
    return res.status(401).json({error: 'Não autorizado.'});
    }

    await Startup.updateOne({_id: startup_id}, {
      user: user_id,
      name,
      city,
      state_code,
      category_code,
      founded_at,
      status,
    });


    return res.send();
   }

   async destroy(req, res){
    const {startup_id} = req.body;
    const {user_id} = req.headers;

    const user = await User.findById(user_id);
    const startups = await Startup.findById(startup_id);

    if(String(user._id) !== String(startups.user)){
    return res.status(401).json({error: 'Não autorizado.'});

    await Startup.findByIdAndDelete({_id: startup_id});

    return res.json({message:"Excluida com sucesso!"});
   }

}
}

export default new StartupController();
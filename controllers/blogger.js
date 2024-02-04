// blogger attributes: name, email
import Blogger from "../models/blogger.js";

export async function getAllBloggers(req, res) {
    try {
        const bloggers = await Blogger.findAll();

        if(bloggers.length === 0){
            return res.json({message: "No bloggers found!"});
        }

        res.json(bloggers);
    }catch(err){
        res.json({message: err});
    }
};

export async function getBlogger(req, res) {
    try {
        const id = req.params.id;
        const blogger = await Blogger.findByPk(id);
        
        if(blogger === null){
            return res.json({message: "Blogger not found!"});
        }

        res.json(blogger);
    }catch(err){
        res.json({message: err});
    }
};

export async function createBlogger(req, res) {
    try {
        const {name, email} = req.body;
        const blogger = await Blogger.create({
            name, email
        });
        res.json(blogger);
    }catch(err){
        res.json({message: err});
    }
};

export async function updateBlogger(req, res) {
    try {
        const id = req.params.id;
        const {name, email} = req.body;
        const blogger = await Blogger.update({
            name, email
        }, {where: {id}});

        console.log(blogger);

        if(blogger[0] === 0){
            return res.json({message: "Blogger not found!"});
        }
        
        res.json({message: "Blogger updated!"});

    }catch(err){
        res.json({message: err});
    }
};

export async function deleteBlogger(req, res) {
    try {
        const id = req.params.id;
        const blogger = await Blogger.destroy({where: {id}});
        
        if(blogger === 1){
            return res.json({message: "Blogger deleted!"});
        }

        res.json({message: "Blogger not found!"});
    }catch(err){
        res.json({message: err});
    }
};


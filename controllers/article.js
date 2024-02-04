import Article from '../models/article.js';

// article attributes: title, content, published, blogger_id


export async function getAllArticles(req, res) {
    try {
        const articles = await Article.findAll();

        if(articles.length === 0){
            return res.json({message: "No articles found!"});
        }

        res.json(articles);
    }catch(err){
        res.json({message: err});
    }
}

export async function getArticle(req, res) {
    try {
        const {id} = req.params;
        const article = await Article.findByPk(id);

        if(article === null){
            return res.json({message: "Article not found!"});
        }

        res.json(article);
    }catch(err){
        res.json({message: err});
    }
}

export async function createArticle(req, res) {
    try {
        const {title, content, published, blogger_id} = req.body;
        const article = await Article.create({
            title, content, published, blogger_id
        });

        res.json({message: "Article created!", data: article});
    }catch(err){
        res.json({message: err});
    }
}

export async function updateArticle(req, res) {
    try {
        const {id} = req.params;
        const {title, content, published, blogger_id} = req.body;
        const article = await Article.update({
            title, content, published, blogger_id
        }, {where: {id}});

        if(article[0] === 0){
            return res.json({message: "Article not found!"});
        }

        res.json({message: "Article updated!"});
    }catch(err){
        res.json({message: err});
    }
}

export async function deleteArticle(req, res) {
    try {
        const {id} = req.params;
        const article = await Article.destroy({where: {id}});

        if(article === 1){
            return res.json({message: "Article deleted!"});
        }
        
        res.json({message: "Article not found!"});
    }catch(err){
        res.json({message: err});
    }
}


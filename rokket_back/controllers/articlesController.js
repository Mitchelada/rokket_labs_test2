import Articles from '../models/Articles'

//Agrega un nuevo cliente
export const newArticle = async(req, res, next) => {
    const article = new Articles(req.body)

    try {
        await article.save();
        res.json({ message: 'article added' })

    } catch (error) {
        console.log(error);
        next()
    }
}

export const showArticles = async(req, res, next) => {

    try {
        const articles = await Articles.find({});
        res.json(articles);
    } catch (error) {
        console.log(error);
        next()
    }
}

export const deleteArticle = async(req, res, next) => {

    try {
        await Articles.findOneAndDelete({ _id: req.params.idArticle })
        res.json({ mensaje: 'article deleted' })
    } catch (error) {
        console.log(error)
        next();
    }
}
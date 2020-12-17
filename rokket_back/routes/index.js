import express from 'express'
import { newArticle, showArticles, deleteArticle } from '../controllers/articlesController'

const router = express.Router()


export default () => {

    //Agregar nuevos articulos via POST
    router.post('/articles', newArticle)

    //Obtener todos los articulos
    router.get('/articles', showArticles)

    //Eliminar articulo
    router.delete('/articles/:idArticle', deleteArticle)


    return router
}
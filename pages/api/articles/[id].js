import { articles } from '../../../data';

                              // req.query.id
export default function handler({query:{id}}, res) {
    const filtered = articles.filter(article => article.id === id)
    
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Article not with id of ${id} found`})
    }
}
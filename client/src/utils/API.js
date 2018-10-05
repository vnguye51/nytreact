import axios from "axios";

export default {
    search: function(query, start, end){
        console.log('searching')

        // return axios.get('/api/articles/search')
        return axios.get('/api/articles/search',{ params: { query: query, start: start, end: end }})
    },
    getArticles: function() {
        return axios.get("/api/articles");
    },
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};

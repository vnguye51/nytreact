import React, { Component } from "react";
import API from '../utils/API'
import Results from '../components/Results/Results'
import Saved from '../components/Saved/Saved'
import Search from '../components/Search/Search'
import Article from '../components/Article/article'
import FormBtn from '../components/Form/FormBtn'

class SearchPage extends Component {
  state = {
    query: '',
    start: '',
    end: '',
    articles: [],
  }
  handleFormSubmit = event => {
    this.grabArticles(this.state.query,this.state.start,this.state.end)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  grabArticles(query,start,end){
    API.search(query,start,end)
    .then((res)=>{
      this.setState({articles:res.data.response.docs})
    })
    .catch((err)=>{console.log(err)})
  }
  componentDidMount(){
    this.grabArticles('Obama','2000','2005')
  }
  save = (articleData,index)=>{
    let newArray = this.state.articles.slice()
    newArray.splice(index,1)
    this.setState({articles:newArray})
    API.saveArticle(articleData)
    .then((res)=>{this.grabSaved()})
    .catch((err)=>{console.log(err)})
  }

  render(){
    return (
        <div>
            <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
            <Results>
                {this.state.articles.map((article,index)=>{
                    return(
                        <Article>
                        <div><a href={article.web_url}>{article.headline ? article.headline.main : ''}</a></div>
                        <div>{article.pub_date ? article.pub_date : ''}</div>
                        <FormBtn onClick={()=>{this.save({title:article.headline.main,url:article.web_url,date:article.pub_date},index)}}>Save</FormBtn>
                        </Article>
                    )
                })}    
            </Results>
        </div>
    );
  }
}

export default SearchPage;

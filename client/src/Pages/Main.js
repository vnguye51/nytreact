import React, { Component } from "react";
import API from '../utils/API'
import Results from '../components/Results/Results'
import Saved from '../components/Saved/Saved'
import Search from '../components/Search/Search'
import Article from '../components/Article/article'

class Main extends Component {
  state = {
    query: '',
    start: '',
    end: '',
    articles: [],
    saved: [],
  }
  handleFormSubmit = event => {
    API.search(this.state.query,this.state.start,this.state.end)
      .then((res)=>{
        this.setState({articles:res.data.response.docs})
      })
      .catch((err)=>{console.log(err)})
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount(){
      API.getArticles()
        .then((res)=>{
            console.log(res.data)
            this.setState({saved:res.data})
        })
  }
  clickHandler(event){
      //this will refer to this inside the button
      event.preventDefault()
      if(this.props.btnType === 'Delete'){
          API.saveArticle()
      }
      else{
          API.deleteArticle(this.state.id)
      }
  }
  render(){
    return (
        <div>
            <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
            <Results>
                {this.state.articles.map((article)=>{
                    return(
                        <Article btnType='Save'>
                        <div>{article.headline ? article.headline.main : ''}}</div>
                        <div>{article.byline ? article.byline.original : ''}</div>
                        <div>{article.pub_date ? article.pub_date : ''}</div>
                        </Article>
                    )
                })}    
            </Results>
            <Saved>
                {this.state.articles.map((article)=>{
                    return(
                        <Article btnType='Delete' id={article.id} >
                        <div>{article.headline ? article.headline.main : ''}}</div>
                        <div>{article.byline ? article.byline.original : ''}</div>
                        <div>{article.pub_date ? article.pub_date : ''}</div>
                        </Article>
                    )
                })}    
            </Saved>
        </div>
    );
  }
}

export default Main;

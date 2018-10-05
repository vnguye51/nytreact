import React, { Component } from "react";
import API from '../utils/API'
import Saved from '../components/Saved/Saved'
import Article from '../components/Article/article'
import FormBtn from '../components/Form/FormBtn'

class SavePage extends Component {
  state = {
    saved: [],
  }

  grabSaved(){
    API.getArticles()
    .then((res)=>{
        console.log(res.data)
        this.setState({saved:res.data})
    })
  }
  componentDidMount(){
    this.grabSaved()
  }

  delete = (id) => {
    API.deleteArticle(id)
    .then((res)=>{this.grabSaved()})
    .catch((err)=>{console.log(err)})

  }
  render(){
    return (
        <div>
            <Saved>
                {this.state.saved.map((article,index)=>{
                    return(
                        <Article>
                        <div><a href={article.url}>{article.title}}</a></div>
                        <div>{article.date}</div>
                        <FormBtn onClick={()=>{this.delete(article._id)}}>Delete</FormBtn>
                        </Article>
                    )
                })}    
            </Saved>
        </div>
    );
  }
}

export default SavePage;

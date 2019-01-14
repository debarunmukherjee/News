import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NewsList from './components/news-list.js'
import NewsPop from './components/news-detail.js'
import Filter from './components/filter.js'
import Sort from './components/sort.js'

const API_KEY = '6de4f6e977d746b8990a43d2db015ec9';


//Create the main app
class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state = { news: [], newsSelected:[],sortTerm:'published_date' }
        
        this.filterTerm('home');
    };
    
    filterTerm(term){
        var url = "https://api.nytimes.com/svc/topstories/v2/"+term+".json";
        url += '?' + $.param({
          'api-key': "6de4f6e977d746b8990a43d2db015ec9"
        });
        $.ajax({
          url: url,
          method: 'GET'
        }).done((result) => {
            this.setState({news: result['results']});
        }).fail(function(err) {
          throw err;
        });
    }
    
	render(){
        return (
            <div>
              <div className="container filter-sort">
                  <div className="row">
                      <div className="col-sm text-center">
                          <Filter onFilterChange={val => this.filterTerm(val)} />
                      </div>
                      <div className="col-sm text-center">
                          <Sort onSortChange={val => this.setState({sortTerm: val})}/>
                      </div>
                  </div>
              </div>
               
               
                <NewsPop news={this.state.newsSelected}/>
                <NewsList onNewsSelect={(newsSelected) => {this.setState({newsSelected:newsSelected})}} news={this.state.news} sortTerm={this.state.sortTerm}/>
            </div>
        );
    }
    
    componentDidMount(){
        $(".news-item").on("click",function(){
            $("#modal").css("display","block");
        });
        $(".close").on("click", function(){
            $("#modal").css("display","none");
        });
    }
    
    componentDidUpdate(){
        $(".news-item").on("click",function(){
            $("#modal").css("display","block");
        });
        $(".close").on("click", function(){
            $("#modal").css("display","none");
        });
    }
}

//Take this component and render it in the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));
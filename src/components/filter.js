import React,{Component} from 'react';

class Filter extends Component{
    constructor(props){
        super(props);
        
        this.state = {term: ''};
    }
    
    render(){
        return (
            <select
             
             value={this.state.term}
             onChange={event => this.onFilterChange(event.target.value)}
             
             >
              <option value="home">Home</option>
              <option value="opinion">opinion</option>
              <option value="world">world</option>
              <option value="national">national</option>
              <option value="politics">politics</option>
              <option value="upshot">upshot</option>
              <option value="nyregion">nyregion</option>
              <option value="business">business</option>
              <option value="technology">technology</option>
              <option value="science">science</option>
              <option value="health">health</option>
              <option value="sports">sports</option>
              <option value="arts">arts</option>
              <option value="books">books</option>
              <option value="movies">movies</option>
              <option value="theater">theater</option>
            </select>
        );
    }
    
    onFilterChange(term){
        this.setState({term});
        this.props.onFilterChange(term);
    }
};

export default Filter;
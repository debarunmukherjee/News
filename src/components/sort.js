import React,{Component} from 'react';

class Sort extends Component{
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
              <option value="published_date">Published date</option>
              <option value="updated_date">Updated date</option>
              <option value="created_date">Created date</option>
            </select>
        );
    }
    
    onFilterChange(term){
        this.setState({term});
        this.props.onSortChange(term);
    }
};

export default Sort;
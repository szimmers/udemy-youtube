import React, {Component} from 'react';

// functional component
/*
const SearchBar = () => {
	return <input/>;
};
*/

// class-based component. can introspect, hold state, communicate w/ other components.
// render() required.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	handleInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		//return <input onChange={this.handleInputChange} />;
		//return <input onChange={event => console.log(event.target.value)} />;

		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.handleInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;
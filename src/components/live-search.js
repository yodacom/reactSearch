import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        const characters = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        );
        return (
            <div className="live-search">
                <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}

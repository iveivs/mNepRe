import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'

    }

    handleKey = (event) => {
        if(event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
        
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            id="email_inline"
                            type="search"
                            className="validate"
                            input
                            placeholder="Поиск"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn search-btn purple lighten-1"
                            onClick={() =>
                                this.props.searchMovies(this.state.search, this.state.type)
                            }
                        >
                            Поиск
                        </button>
                    </div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies Only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series Only</span>
                        </label>
                </div>
            </div>
        );
    }
}
export {Search}
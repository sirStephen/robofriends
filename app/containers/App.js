import React from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })})
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    
    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })

        if (!robots.length) {
            return <h1 className='header-title tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='header-title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;
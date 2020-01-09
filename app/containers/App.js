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
            searchField: '',
            planets: [],
        }
    }

    componentDidMount() {
        Promise.all([fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://swapi.co/api/planets/')]).then(([response1, response2]) => {
            return Promise.all([response1.json(), response2.json()])
        }).then(([users, planets]) => {
            this.setState({
                robots: users,
                planets: planets.results
            })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    
    render() {
        const { robots, searchField, planets } = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })

        const filteredPlanets = planets.map(planet => {
            return planet
        });
        
        if (!robots.length) {
            return <h1 className='header-title tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='header-title'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList 
                                robots={filteredRobots}
                                planets={filteredPlanets}
                            />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;
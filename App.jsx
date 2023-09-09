// App.js (React Component)
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      posts: [], // Array to store posts
      scoreboardData: [] // Data for the dynamic scoreboard
    };
  }

  // Simulate user login
  handleLogin = () => {
    this.setState({ loggedIn: true });
  };

  // Simulate user logout
  handleLogout = () => {
    this.setState({ loggedIn: false });
  };

  // Simulate loading posts from an API
  loadPosts = () => {
    // Fetch posts from an API and update the state
    // For simplicity, we'll use a hardcoded array here
    const posts = [
      { id: 1, text: 'Post 1' },
      { id: 2, text: 'Post 2' },
      // ...more posts
    ];
    this.setState({ posts });
  };

  // Simulate loading scoreboard data from an API
  loadScoreboardData = () => {
    // Fetch scoreboard data from an API and update the state
    // For simplicity, we'll use a hardcoded array here
    const scoreboardData = [
      { username: 'User1', score: 100 },
      { username: 'User2', score: 85 },
      // ...more data
    ];
    this.setState({ scoreboardData });
  };

  componentDidMount() {
    // Load initial data when the component mounts
    this.loadPosts();
    this.loadScoreboardData();
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <div>
            <button onClick={this.handleLogout}>Logout</button>
            <h1>Welcome to Grupverse</h1>
            <div className="post-feed">
              {this.state.posts.map((post) => (
                <div key={post.id} className="post">
                  {post.text}
                </div>
              ))}
            </div>
            <div className="scoreboard">
              <h2>Scoreboard</h2>
              <ul>
                {this.state.scoreboardData.map((item, index) => (
                  <li key={index}>
                    {item.username}: {item.score}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <h1>Welcome to Grupverse</h1>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

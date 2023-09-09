// HomeFeed.js (React Component)
import React, { Component } from 'react';

class HomeFeed extends Component {
  render() {
    return (
      <div>
        <h2>Home Feed</h2>
        <div className="post-feed">
          {this.props.posts.map((post) => (
            <div key={post.id} className="post">
              {post.text}
            </div>
          ))}
        </div>
        <div className="scoreboard">
          <h3>Scoreboard</h3>
          <ul>
            {this.props.scoreboardData.map((item, index) => (
              <li key={index}>
                {item.username}: {item.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeFeed;

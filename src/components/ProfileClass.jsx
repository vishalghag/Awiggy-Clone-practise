import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.state = {
      userInfo : {
        login:'',
        id:'',
        avatar_url:''
      }
    }

  }

  async componentDidMount() {
      const gitApi = await fetch("https://api.github.com/users/vishalghag");
      const gitApiData = await gitApi.json(); // Add parentheses to call the `json` method
      console.log(gitApiData, 'gitapiData');
      this.setState({
        userInfo:gitApiData
      })
  }

  render() {
    return (
      <div>
        <h2>Inside class profile</h2>
        <h3>Name: {this.props.name}</h3>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Increment
        </button>
        <div>
            <h2>Api Git hub call info</h2>
            <img src={this.state.userInfo.avatar_url} alt="api profile"/>
            <h3>Id: {this.state.userInfo.id}</h3>
            <h3>Login : {this.state.userInfo.login}</h3>
        </div>
        <div>
        <UserContext.Consumer>
          {({user}) => <h2>{user.name} - {user.email}</h2>}
        </UserContext.Consumer>
          
        </div>
      </div>
    );
  }
}

export default Profile;

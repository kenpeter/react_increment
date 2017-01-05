import React from "react";

// export default class
// my comp
// extend react.component
export default class MyComp extends React.Component {
  // constructor
  // props
  constructor(props) {
    // super
    // props
    super(props);
    
    /* some init state */
    this.state = {users: []}; 

    // method 2 is not fat arrow func
    // so need to bind this
    this.method2 = this.method2.bind(this);
  }

  method1 = (arg1, arg2) => {
    // define () => {}
    // so we don't need to bind "this"
  }

  method2(arg1, arg2) {
    /* another custom method */
    /* define it in natural way, usually need to bind it to this in constructor */
  }

  // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  myRandom = () => {
    let items = [
      "list-group-item-success",
      "list-group-item-info",
      "list-group-item-warning",
      "list-group-item-danger"
    ];
    let item = items[ Math.floor( Math.random() * items.length ) ];
    return item;
  }

  componentDidMount() {
    /* usually do some init AJAX calls here. similar to jQuery('document').ready() */
    /* example: fetching users and setting the state */
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => this.setState({users: data.data}));
  }

  render() {
    /* the render() function is always needed */
    /* example: display all users */
    
    //test
    //console.log(this.state.users);
    
    //let userList = this.state.users.map(u => <li>u</li>);
    //console.log(userList);
    
    // https://www.quora.com/How-do-I-iterate-over-a-list-in-React-JS
    // users is array, then map
    // in li item key={i}
    
    // https://stackoverflow.com/questions/35543325/react-call-components-method-from-nested-function-in-render-method
    let self = this;
    
    return (
      <div>
        <h1>{this.props.compTitle}</h1>
        <ul className="list-group">
        {this.state.users.map(function(user, i){
          let random_class = self.myRandom();
          let class_name = "list-group-item " + random_class;
          //console.log(random_class);
          
          return <li key={i} className={class_name}>
            <img src={user.avatar} />
            &nbsp; {user.id}, {user.first_name}, {user.last_name}, {user.first_name}
            </li>
        })}
        </ul>
      </div>
    );
  }
}

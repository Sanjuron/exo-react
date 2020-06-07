class App extends React.Component {

    state = {

        comments : [
            {name: "julien", message: "olololo",}
        ]


    }

    // handleNameInput = e => {
    //     this.setState({
    //         name: e.target.value,
    //     });
    // }

    // handleMessageInput = e => {
    //     this.setState({
    //         message: e.target.value,
    //     });
    // }

    addComment = (comment) => {
        let comments = [...this.state.comments, comment];
        this.setState({
          comments: comments
        })
      }


    handleSubmit = e => {
        e.preventDefault();
        // this.addComment(this.state.comments);
        this.addComment();
        console.log(this.state.comments);
    }

    handleInput = e => {
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }

    render() {
        return(
        <form action="" onSubmit={this.handleSubmit}>
            <p>Say Something</p>
            <input type="text" placeholder= "Your Name" id="name" onChange={this.handleInput}/> <br/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Comment" id="message" onChange={this.handleInput}></textarea> <br/>
            <button>Comment -></button>
        </form>
        )
    }

}

ReactDOM.render(<App/>,document.getElementById("app"));
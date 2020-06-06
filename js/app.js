class App extends React.Component {

    state = {

        name: "Julien",
        message: "lallala",

    }

    handleInput = e => {
        this.setState({
            name: e.target.value,
            message: e.target.value,
        });
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.message);
    }


    render() {
        return(
        <form action="" onSubmit={this.handleSubmit}>
            <p>Say Something</p>
            <input type="text" placeholder= "Your Name" onChange={this.handleInput}/> <br/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Comment" onChange={this.handleInput}></textarea> <br/>
            <button>Comment -></button>
        </form>
        )
    }

}

ReactDOM.render(<App/>,document.getElementById("app"));
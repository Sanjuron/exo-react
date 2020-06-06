class App extends React.Component {

    state = {

        name: "Julien",

    }

    handleInput = e => {
        this.setState({
            pseudo: e.target.value
        });
        console.log(e.target.value);


    }


    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(e);
    }


    render() {
        return(
        <form action="" onSubmit={this.handleSubmit}>
            <p>Say Something</p>
            <input type="text" placeholder= "Your Name" value={this.pseudo} onChange={this.handleInput}/> <br/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Comment"></textarea> <br/>
            <button>Comment -></button>
        </form>
        )
    }

}

ReactDOM.render(<App/>,document.getElementById("app"));
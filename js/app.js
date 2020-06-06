class App extends React.Component {

    state = {

    }


    render() {
        return(
        <form action="">
            <p>Say Something</p>
            <input type="text" placeholder= "Your Name"/> <br/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Comment"></textarea> <br/>
            <button>Comment -></button>
        </form>
        )
    }

}


ReactDOM.render(<App/>,document.getElementById("app"));
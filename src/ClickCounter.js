import React from 'react'
import './ClickCounter.css'

class ClickCounter extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.increase = this.increase.bind(this);
        this.resett = this.resett.bind(this);
        this.decrease = this.decrease.bind(this);

    }

    state ={
        count : 0
    };

    increase(){
        this.setState({
            count : this.state.count+1
        })
    }

    resett(){
        this.setState({
            count : 0
        })
    }

    decrease(){
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {
        return(
            <div className={"container"}>
                <h1 className={"para"}>Click Counter</h1>
                <div className={"buttons"}>
                    <input type={"button"} value={"Decrease -"} className={"button"} onClick={this.decrease}/>
                    <input type={"button"} value={"Reset 0"} className={"button"} onClick={this.resett}/>
                    <input type={"button"} value={"Increase +"} className={"button"} onClick={this.increase}/>
                </div>
                <h3 className={"para"}>Counter - {this.state.count}</h3>
                <p className={"para"}>Made with <i className="fa fa-heart"/> by <a href={"http://rajrajhans.com"}>Raj Rajhans</a></p>
            </div>
        )
    }
}

export default ClickCounter;
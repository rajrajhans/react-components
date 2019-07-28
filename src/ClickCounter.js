import React from 'react'
import './ClickCounter.css'

class ClickCounter extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this)

    }

    state ={
        count : 0
    };

    onChange(){
        this.setState({
            count : this.state.count+1
        })
    }

    render() {
        return(
            <div className={"container"}>
                <h1 className={"para"}>Click Counter</h1>
                <input type={"button"} value={"Click Me"} className={"button"} onClick={this.onChange}/>
                <h3 className={"para"}>Counter - {this.state.count}</h3>
            </div>
        )
    }
}

export default ClickCounter;
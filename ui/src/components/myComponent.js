import React from "react";


class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fav: 'yellow'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState  ({
                // fav: 'pink'
            })
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML="pev color" + prevState.fav;
        return null
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML="current color" + this.state.fav
    }



    render() {
        return (
            <div>
                <h1>{this.state.fav}</h1>
                <div id="div1"  ></div>
                <div id="div2" ></div>
            </div>
        )
    }
}


export default MyComponent
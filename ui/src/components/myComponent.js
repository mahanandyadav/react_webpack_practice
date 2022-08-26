import React from "react";
import FilterList from "./FilterList";
import fakeNames  from "./fakeNames";
class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                <FilterList names={fakeNames} />
            </div>
        )
    }
}


export default MyComponent
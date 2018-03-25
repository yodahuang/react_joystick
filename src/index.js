import React, { Component } from 'react';
import nipplejs from 'nipplejs';

class JoyStick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rendered: false
        }
    }
    componentDidMount() {
        this.props.managerFn(this.manager)
    }
    render() {
        var renderJoy = function (element) {
            if (!this.state.rendered){
                const combinedOptions = Object.assign({ zone: element }, this.props.joyOptions);
                this.manager = nipplejs.create(combinedOptions);
                this.setState({
                    rendered: true
                });
            }
        }
        renderJoy = renderJoy.bind(this);

        return (
            <div ref={renderJoy} style={this.props.divStyle} />
        )
    }
}

export default JoyStick;
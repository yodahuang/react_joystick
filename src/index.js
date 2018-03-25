import React, { Component } from 'react';
import nipplejs from 'nipplejs';

class JoyStick extends Component {
    componentDidMount() {
        this.props.managerFn(this.manager)
    }
    render() {
        var renderJoy = function (element) {
            const combinedOptions = Object.assign({ zone: element }, this.props.joyOptions)
            this.manager = nipplejs.create(combinedOptions);
        }
        renderJoy = renderJoy.bind(this);

        return (
            <div ref={renderJoy} style={this.props.divStyle} />
        )
    }
}

export default JoyStick;
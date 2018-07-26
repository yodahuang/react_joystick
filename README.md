## React Joystick

[![NPM](https://nodei.co/npm/react-joystick.png)](https://nodei.co/npm/react-joystick/)
[![Build Status](https://travis-ci.org/yodahuang/react_joystick.svg?branch=master)](https://travis-ci.org/yodahuang/react_joystick)

This is a React components for rendering a joystick. It's a wrapper for [nipple.js](https://yoannmoinet.github.io/nipplejs/)

### Properties

- `options`: Options for creating `nipplejs` joysticks
- `containerStyle`: the style for the `div` component containing joystick
- `managerListener`: the function callback that will have `manager` as a parameter so that you can control the behaviour of joystick

### Example

```javascript
import Joystick from react-joystick

const joyOptions = {
    mode: 'semi',
    catchDistance: 150,
    color: 'white'
}

const containerStyle = {
    position: 'relative',
    height: '350px',
    width: '100%',
    background: 'linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)'
}


class JoyWrapper extends Component {
    constructor() {
        super();
        this.managerListener = this.managerListener.bind(this);
    }

    managerListener(manager) {
        manager.on('move', (e, stick) => {
            console.log('I moved!')
        })
        manager.on('end', () => {
            console.log('I ended!')
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <JoyStick options={joyOptions} containerStyle={containerStyle} managerListener={this.managerListener} />
            </div>
        )
    }
}

```

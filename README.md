## React Joystick

[![NPM](https://nodei.co/npm/react-joystick.png)](https://nodei.co/npm/react-joystick/)

This is a React components for rendering a joystick. It's a wrapper for [nipple.js](https://yoannmoinet.github.io/nipplejs/)

### Properties

- `joyOptions`: Options for creating `nipplejs` joysticks
- `divStyle`: the style for the `div` component containing joystick
- `managerFn`: the function callback that will have `manager` as a parameter so that you can control the behaviour of joystick

### Example

```javascript
import Joystick from react-joystick
class JoyWrapper extends Component {
    constructor() {
        super();
        this.managerFn = this.managerFn.bind(this);
    }

    managerFn(manager) {
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
            <Paper elevation={4}>
                <JoyStick joyOptions={joyOptions} divStyle={divStyle} managerFn={this.managerFn} />
            </Paper>
        )
    }
}

```
import { Calculator } from './CalcS.js';

export function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Calculator, null)
    );
}
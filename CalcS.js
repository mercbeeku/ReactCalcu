var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export function Calculator() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        bogino = _React$useState2[0],
        setBogino = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        bogino2 = _React$useState4[0],
        setBogino2 = _React$useState4[1];

    var _React$useState5 = React.useState(""),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        uildel = _React$useState6[0],
        setUildel = _React$useState6[1];

    function daragdah1() {
        setBogino(bogino * 10 + 1);
        //console.log({bogino});
    }
    function daragdah2() {
        setBogino(bogino * 10 + 2);
        //console.log({bogino});
    }
    function daragdah3() {
        setBogino(bogino * 10 + 3);
        //console.log({bogino});
    }
    function daragdah4() {
        setBogino(bogino * 10 + 4);
        //console.log({bogino});
    }
    function daragdah5() {
        setBogino(bogino * 10 + 5);
        //console.log({bogino});
    }
    function daragdah6() {
        setBogino(bogino * 10 + 6);
        //console.log({bogino});
    }
    function daragdah7() {
        setBogino(bogino * 10 + 7);
        //console.log({bogino});
    }
    function daragdah8() {
        setBogino(bogino * 10 + 8);
        //console.log({bogino});
    }
    function daragdah9() {
        setBogino(bogino * 10 + 9);
        //console.log({bogino});
    }
    function daragdah0() {
        setBogino(bogino * 10 + 0);
        //console.log({bogino});
    }

    function nemeh() {
        setUildel('+');
        setBogino2(bogino);
        setBogino(0);
    }
    function hasah() {
        setUildel('-');
        setBogino2(bogino);
        setBogino(0);
    }
    function urjih() {
        setUildel('*');
        setBogino2(bogino);
        setBogino(0);
    }
    function huvaah() {
        setUildel('/');
        setBogino2(bogino);
        setBogino(0);
    }

    function clear() {
        setBogino(0);
    }

    function back() {
        setBogino(parseInt(bogino / 10));
    }
    function pow() {
        setBogino(bogino * bogino);
    }
    function sqrt() {
        setBogino(Math.sqrt(bogino));
    }
    function tentsuu() {
        if (uildel == '+') setBogino(bogino2 + bogino);
        if (uildel == '-') setBogino(bogino2 - bogino);
        if (uildel == '*') setBogino(bogino2 * bogino);
        if (uildel == '/') setBogino(bogino2 / bogino);
    }

    // document.addEventListener('0', function(event) {
    //     if(event.keyCode == 96) {
    //         console.log({keyCode})
    //     }

    return React.createElement(
        'div',
        { className: 'body' },
        React.createElement('input', { type: 'text', className: 'screen', value: bogino, placeholder: '0' }),
        React.createElement('input', { type: 'button', className: 'deed', value: 'CE', onClick: clear }),
        React.createElement('input', { type: 'button', className: 'deed', value: '\u2190', onClick: back }),
        React.createElement('input', { type: 'button', className: 'deed', value: 'x\xB2', onClick: pow }),
        React.createElement('input', { type: 'button', className: 'deed', value: '\u221A', onClick: sqrt }),
        React.createElement('br', null),
        React.createElement('input', { type: 'button', className: 'deed', value: '+', onClick: nemeh }),
        React.createElement('input', { type: 'button', className: 'deed', value: '-', onClick: hasah }),
        React.createElement('input', { type: 'button', className: 'deed', value: 'x', onClick: urjih }),
        React.createElement('input', { type: 'button', className: 'deed', value: '\xF7', onClick: huvaah }),
        React.createElement(
            'div',
            { className: 'col' },
            React.createElement('input', _defineProperty({ type: 'button', className: 'tovch', value: '1', onClick: daragdah1 }, 'onClick', 'nmr(\'1\')')),
            React.createElement('input', { type: 'button', className: 'tovch', value: '2', onClick: daragdah2 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '3', onClick: daragdah3 }),
            React.createElement('br', null),
            React.createElement('input', { type: 'button', className: 'tovch', value: '4', onClick: daragdah4 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '5', onClick: daragdah5 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '6', onClick: daragdah6 }),
            React.createElement('br', null),
            React.createElement('input', { type: 'button', className: 'tovch', value: '7', onClick: daragdah7 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '8', onClick: daragdah8 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '9', onClick: daragdah9 }),
            React.createElement('br', null),
            React.createElement('input', { type: 'button', className: 'tovch', value: ' ' }),
            React.createElement('input', { type: 'button', className: 'tovch', value: '0', onClick: daragdah0 }),
            React.createElement('input', { type: 'button', className: 'tovch', value: ' ' })
        ),
        React.createElement(
            'div',
            { className: 'col2' },
            React.createElement('input', { type: 'button', className: 'tents', value: '=', onClick: tentsuu })
        )
    );
}
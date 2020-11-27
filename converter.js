var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// export буюу гадагш гаргах
export function Horvuulegch() {
    // Тогтмол утга дамжуулж байна мөн утга нэртэй state зарлах хэсэг
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        utga = _React$useState2[0],
        setUtga = _React$useState2[1];

    function tovchDaragdah() {
        setUtga(utga * 2800);
        console.log(utga);
    }
    var handleSubmit = function handleSubmit(evt) {
        evt.preventDefault();
    };

    // return буюу буцаах
    return (
        // Олон мөр code бичих бол div Таг ашиглан ахин бичнэ
        React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", onChange: function onChange(e) {
                    return setUtga(e.target.value);
                }, value: utga }),
            React.createElement("input", { type: "button", name: "con", value: "Convert", onClick: tovchDaragdah }),
            React.createElement(
                "div",
                null,
                utga
            )
        )
    );
}
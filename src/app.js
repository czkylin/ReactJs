require('./styles/usage/app.scss');

var common= require('./scripts/utils/util.common.js');

var LazyOut= require('./scripts/components/LazyOut');

var Wrapper= require('./scripts/components/wrapper');
var Footer= require('./scripts/components/footer');

ReactDOM.render(<LazyOut/>,document.getElementById("app"));
ReactDOM.render(<Wrapper/>,document.getElementById("wrapper"));
ReactDOM.render(<Footer/>,document.getElementById("footer"));

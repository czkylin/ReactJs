require('./styles/usage/app.scss');

//App.js里进行配置

//路由配置的核心API
import {Router,Route,hashHistory} from "react-router";

//外部组件
import Index from "./scripts/views/index";
import List from "./scripts/views/list";
import Free from "./scripts/views/free";
import My from "./scripts/views/my";
import ComponentIndex from "./scripts/components/ComponentIndex";

//子路由的组件
// import Header from "./scripts/components/header";
// import Wrapper from "./scripts/components/wrapper";
//路由的相关配置

const routes = {
	path : "/",
	component : Index, //路由开始显示的页面,
	indexRoute : {component:ComponentIndex}, //indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
	childRoutes : [ //这childRoutes里进行子路由的配置，每一个路由都是一个对象
	//在对象里有path comopent等
		{
			path : "/index",
			component : ComponentIndex
		},
		{
			path : "/list",
			component : List

		},
		{
			path : "/free",
			component : Free
		},
    {
      path : "/my",
      component : My
    }
	]
}

//1.2个参数
//2.把配置好的路由渲染到页面
ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"));
// ReactDOM.render(<Header/>,document.getElementById("header"));
// ReactDOM.render(<Wrapper/>,document.getElementById("wrapper"));









// var common= require('./scripts/utils/util.common.js');
//
// var LazyOut= require('./scripts/components/LazyOut');
//
// var Wrapper= require('./scripts/components/wrapper');
// var Footer= require('./scripts/components/footer');
//
// ReactDOM.render(<LazyOut/>,document.getElementById("app"));
// ReactDOM.render(<Wrapper/>,document.getElementById("wrapper"));
// ReactDOM.render(<Footer/>,document.getElementById("footer"));

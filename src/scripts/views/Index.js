import {Link} from "react-router";

//想让路由在那个页面进行集合 那么我们需要在那个页面引入 {this.props.children}
//Index 组件的目的单页面路由的集合
class Index extends React.Component{
 	constructor(props){
    	super(props);
  }
	render(){

		return(

        <div id="box">
          {/**1.设置this.props.children 让他组件在这里进行切换,
            子路由componentIndex渲染的地方**/}

          {this.props.children}

          <div id="footer">

            <Link to="/index">
                <i className="yo-ico">&#xe601;</i>
                <b>首页</b>
            </Link>
            <Link to="/list">
                <i className="yo-ico">&#xe6aa;</i>
                <b>超级返</b>
            </Link>
            <Link to="/free">
                <i className="yo-ico">&#xe61f;</i>
                <b>免费试用</b>
            </Link>
            <Link to="/my">
                <i className="yo-ico">&#xe63e;</i>
                <b>我的</b>
            </Link>
          </div>
        </div>
		)

	}
}

export default Index;
//Link => a

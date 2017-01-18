class Header extends React.Component{
  render(){
    const search={
      textAlign: 'left',
      paddingLeft: '.1rem',
      background:'#fff'
    }
    const bgc={
      background:'#f92077'
    }
    return (
      <div id="header" style={bgc}>
        <ul>
          <li className="yo-ico">&#xe617;</li>
          <li className="yo-ico"><a style={search}>&#xe611;请输入关键词搜索</a></li>
          <li className="yo-ico">&#xe64f;</li>
        </ul>
      </div>
    )
  }
}
export default Header;

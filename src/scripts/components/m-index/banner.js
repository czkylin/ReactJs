import BannerSwiper from "./BannerSwiper"
class Banner extends React.Component{
  getDefaultProps(){
    return{
      "path":"/api/list"
    }
  }
  getInitialState(){
    return{
      "result":""
    }
  }
  componentWillMount(){
    var that= this;
    fetch("/api/list").then(response => response.json())
    .then( res => {
      var that=this;
      that.list= res;
      console.log(that.list)
      that.setState({
        "result":that.list
      })
    })
    .catch(e => console.log("Oops, error", e))
  }
  render(){
    var arr=[];
    // console.log(this.state.result.ban);
    var result= this.state.result.ban;
    // console.log(result);
    var length= result.length;
    if(result){
      for(var i=0; i<length; i++){
        arr.push(<HeaderSwiper name={result[i].src}/>)
      }
    }
    return (
      <div id="banner" className="swiper-container">
        <div className="swiper-wrapper">
            {arr}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
  componentDidMount(){
    var swiper= new Swiper('.swiper-container',{
      loop:true,
      autoplay:2000,
      preventClicks:false,
      autoplayDisableOnInteraction:false,
      pagination : '.swiper-pagination'
    })
  }
}
export default Banner;

class BannerSwiper extends React.Component{
  render(){
    return (
      <div className="swiper-slide">
        <img src={this.props.name}/>
      </div>
    )
  }
}
export default BannerSwiper;

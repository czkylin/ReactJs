import Banner from "./banner";
import Search from "./search";
import Sale from "./sale";
import List from "./list";
class Wrapper extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <Banner/>
        <Search/>
        <Sale/>
        <List/>
      </div>
    )
  }
};
export default Wrapper;

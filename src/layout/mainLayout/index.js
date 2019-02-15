import React,{ Component } from 'react'; 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as global from "pages/global/action";
// import { NavBar,Icon } from 'antd-mobile';
import './style.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

@connect(
  state => ({ ...state.global }),
  dispatch => bindActionCreators({ ...global }, dispatch)
)
class MainLayout extends Component{
  constructor(props){
    super(props)
  }

  returnPage = () => {
    this.props.history.goBack();      
  }

  render(){
    const { pathname }=this.props.location;
    return(
      <div className="main-layout">
        <div className="container">
          {/* <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            leftContent={<span>返回</span>}
            onLeftClick={this.returnPage}
            style={{backgroundColor: '#D84036'}}
            >业务宏观看板</NavBar> */}
          {this.props.children}               
        </div>
        <div className="footer_nav">
          <Link className={classnames({
            nav_item:true,
            active:pathname == '/main-analyse'
          })} to="/main-analyse">
            <div className="icon_img"></div>
            <div>大盘</div>
          </Link>
          <Link className={classnames({
            nav_item:true,
            active:pathname == '/brand-analyse'
          })} to="/brand-analyse">
            <div className="icon_img"></div>
            <div>品牌</div>
          </Link>
          <Link className={classnames({
            nav_item:true,
            active:pathname == '/goods-analyse'
          })} to="/goods-analyse">
            <div className="icon_img"></div>
            <div>商品</div>
          </Link>
          <Link className={classnames({
            nav_item:true,
            active:pathname == '/member-analyse'
          })} to="/member-analyse">
            <div className="icon_img"></div>
            <div>会员</div>
          </Link>
        </div>
      </div>
    )
  }
}
export default MainLayout
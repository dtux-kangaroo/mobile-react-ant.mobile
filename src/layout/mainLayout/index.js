import React,{ Component } from 'react'; 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as global from "pages/global/action";
import './style.scss';

@connect(
    state => ({ ...state.global }),
    dispatch => bindActionCreators({ ...global }, dispatch)
)
class MainLayout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <div className="bg-contain">
                {this.props.children}
                dsff
            </div>
        )
    }
}
export default MainLayout
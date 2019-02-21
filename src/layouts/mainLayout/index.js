import React,{ Component } from 'react'; 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@/store/actions";
import './style.scss';

@connect(
    state => ({ ...state.global }),
    dispatch => bindActionCreators({ ...actions }, dispatch)
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
            </div>
        )
    }
}
export default MainLayout
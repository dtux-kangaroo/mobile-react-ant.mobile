import React,{ Component, Fragment } from 'react'; 
import { List, InputItem } from 'antd-mobile';
//import { createForm } from 'rc-form';
import LeftDraw from 'components/leftDrawer';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class PageIndex extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: ['phone','password'],
        }
    }

    render(){
        //const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return (
            <div>
                pageindex
                
            </div>
        )
    }
}
export default PageIndex
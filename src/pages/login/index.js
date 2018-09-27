import React,{ Component, Fragment } from 'react'; 
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class LoginCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: ['phone','password'],
        }
    }

    render(){
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return(
            <div>
                <List>
                    <InputItem
                        {...getFieldProps('password', {
                            normalize: (v, prev) => {
                                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                                if (v === '.') {
                                    return '0.';
                                }
                                return prev;
                                }
                                return v;
                            },
                        })}
                        type={type[0]}
                        placeholder="请输入用户名"
                        ref={el => this.inputUsernam = el}
                        onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                        clear
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >用户名</InputItem>
                    <InputItem
                        type={type[1]}
                        placeholder="请输入密码"
                        ref={el => this.inputRef = el}
                        onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                        clear
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >密码</InputItem>
                </List>
            </div>
        )
    }
}
export default createForm()(LoginCom)
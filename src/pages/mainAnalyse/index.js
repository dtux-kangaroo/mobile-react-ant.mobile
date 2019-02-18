import React, { Component } from 'react'; 
import { API } from "@/api/index.js";

class MainAnalyse extends Component{
  constructor(props){
    super(props)
    this.state = {
      testData: []
    }
  }
  
  componentDidMount () {
    API.getTestData().then(ret=>{ 
      this.setState({testData: ret.data || []});
    })
  }

  render(){
    const { testData } = this.state;
    return (
      <div>
        MainAnalyse
        <ul>
          {
            testData.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default MainAnalyse
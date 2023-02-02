import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
  render() {
    console.log("Child Component is Called");
    return (
      <>This is Child Component</>
    )
  }
}



// import React, { Component } from 'react'

// export default class Child extends Component {
//   shouldComponentUpdate(){
//     return false
//   }
//   render() {
//     console.log("Child Component is Called");
//     return (
//       <>This is Child Component</>
//     )
//   }
// }

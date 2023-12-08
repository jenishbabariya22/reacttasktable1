const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: this.props.data
    }
  }
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">grid</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">course</th>
            <th scope="col">city</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.userdata.map((val) => {
              return (
                <tr>
                  <td style={{ background: val.color }}>{val.grid}</td>
                  <td style={{ background: val.color }}>{val.name}</td>
                  <td style={{ background: val.color }}>{val.email}</td>
                  <td style={{ background: val.color }}>{val.password}</td>
                  <td style={{ background: val.color }}>{val.course}</td>
                  <td style={{ background: val.color }}>{val.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Child
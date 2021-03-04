import React, { Component } from "react";
import BPALService from "../services/BPALService.js";
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class FullCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    };

    this.addPerfume = this.addPerfume.bind(this);
    this.editPerfume = this.editPerfume.bind(this);
    this.deletePerfume = this.deletePerfume.bind(this);
  }

  componentDidMount() {
    BPALService.getBPAL().then((res) => {
      console.log(res.data);
      this.setState({ collection: res.data });
    });
  }

  addPerfume() {
    // this.props.history.push("/addperfume/_add");
    alert("This is a work in progress. This is not available yet!");
  }

  editPerfume(id) {
    // this.props.history.push(`/addperfume/${id}`);
    alert("This is a work in progress. This is not available yet!");
  }

  deletePerfume(id) {
    // BPALService.deleteBPAL(id).then((res) => {
    //   this.setState({
    //     perfume: this.state.perfume.filter((perfume) => perfume.id !== id),
    //   });
    // });
    alert("This is a work in progress. This is not available yet!");
  }

  saveOrUpdatePerfume = (id) => {
    alert("This is a work in progress. This is not available yet!");
    // e.preventDefault();
    // let perfume = {
    //   name: this.state.name,
    //   line: this.state.line,
    //   size: this.state.size,
    //   disc: this.state.disc,
    //   limited: this.state.limited,
    // };
    // console.log("Perfume => " + JSON.stringify(perfume));

    // // step 5
    // if (this.state.id === "_add") {
    //   BPALService.createBPAL(perfume).then((res) => {
    //     this.props.history.push("/addperfume");
    //   });
    // } else {
    //   BPALService.updateBPAL(perfume, this.state.id).then((res) => {
    //     this.props.history.push("/updateperfume");
    //   });
    // }
  };

  render() {
    return (
      <div>
        <h1>Here is your perfume collection in all its glory!</h1>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addPerfume}>
            {" "}
            Add Perfume
          </button>
        </div>
        <br></br>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Line</th>
                <th>Size</th>
                <th>Discontinued?</th>
                <th>Limited Edition?</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.collection.map((perfume) => (
                <tr key={perfume.id}>
                  <td>{perfume.id}</td>
                  <td>{perfume.name}</td>
                  <td>{perfume.line}</td>
                  <td>{perfume.size}</td>
                  <td>{JSON.stringify(perfume.disc)}</td>
                  <td>{JSON.stringify(perfume.limited)}</td>
                  <td>
                    <button
                      onClick={() => this.saveOrUpdatePerfume(perfume.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deletePerfume(perfume.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FullCollection;

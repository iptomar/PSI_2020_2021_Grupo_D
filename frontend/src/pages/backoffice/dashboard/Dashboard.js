import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "semantic-ui-react";
import services from "../../../services";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    services.map
      .getUncheckedStories()
      .then((res) => {
        this.setState({ stories: res }, () => console.log(this.state.stories));
      })
      .catch((e) => console.error(e));
  }

  submitStory(evt) {
    evt.preventDefault();

    services.map
      .checkStory(evt.target.parentElement.id)
      .then((_) => {
        toast.success("História verificada com sucesso!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        this.state.stories.map((story, i) => {
          if (story._id == evt.target.parentElement.id) {
            let arr = this.state.stories;
            arr.splice(i, 1);
            this.setState({ stories: arr });
          }
        });
      })
      .catch((e) => {
        toast.error("Ocorreu um erro!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.error(e);
      });
  }

  render() {
    return (
      <div className="Dashboard">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Historia</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stories.map((story) => (
              <tr id={story._id}>
                <td>{story.name}</td>
                <td>{story.email}</td>
                <td>{story.story}</td>
                <td>
                  <img
                    style={{
                      width: "auto",
                      maxWidth: "700px",
                      maxHeight: "300px",
                    }}
                    src={story.image}
                  />
                </td>
                <Button positive onClick={(evt) => this.submitStory(evt)}>
                  Aprovar
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
        <ToastContainer />
      </div>
    );
  }
}

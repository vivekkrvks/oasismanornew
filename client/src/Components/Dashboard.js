import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
// import { AccountCircle, LockOpen, Schedule } from "@material-ui/icons";

const styles = theme => ({});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      designation: "Guest"
    };
  }
  componentDidMount() {
    const designation = localStorage.getItem("designation");
    this.setState({ designation });
  }

  render() {
    // if (this.state.loggedIn === false) {
    //   return <Redirect to="/login" />;
    // }
    // const { classes } = this.props;
    if (this.state.designation === "Admin") {
      return (
        <section>
          <Typography variant="h1" component="h2">
            I am Admin Dashboard
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto commodi non, neque reprehenderit aut ipsam aperiam doloremque adipisci rem voluptates qtokenem dolorem amet
            necessitatibus at! Nemo mollitia illum rem tempore autem fuga unde esse suscipit harum dicta pariatur quae aspernatur eius cumque odit, adipisci consequatur illo nam ea magnam dignissimos.
            Atque amet eos suscipit consequatur illum animi obcaecati eveniet temporibus, quaerat rem repellat fuga maxime similique, ratione consequuntur facilis asperiores ut. Ad nemo rem et dolor
            ipsum eligendi, ducimus minima exercitationem quam expedita voluptatibus iste. Pariatur nemo sequi sunt sed aspernatur vero facere, architecto omnis nulla eligendi culpa quibusdam?
          </p>
        </section>
      );
    } else if (this.state.designation === "Manager") {
      return (
        <section>
          <Typography variant="h1" component="h2">
            I am Manager Dashboard
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto commodi non, neque reprehenderit aut ipsam aperiam doloremque adipisci rem voluptates qtokenem dolorem amet
            necessitatibus at! Nemo mollitia illum rem tempore autem fuga unde esse suscipit harum dicta pariatur quae aspernatur eius cumque odit, adipisci consequatur illo nam ea magnam dignissimos.
            Atque amet eos suscipit consequatur illum animi obcaecati eveniet temporibus, quaerat rem repellat fuga maxime similique, ratione consequuntur facilis asperiores ut. Ad nemo rem et dolor
            ipsum eligendi, ducimus minima exercitationem quam expedita voluptatibus iste. Pariatur nemo sequi sunt sed aspernatur vero facere, architecto omnis nulla eligendi culpa quibusdam?
          </p>
        </section>
      );
    } else if (this.state.designation === "Worker") {
      return (
        <section>
          <Typography variant="h1" component="h2">
            I am Worker Dashboard
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto commodi non, neque reprehenderit aut ipsam aperiam doloremque adipisci rem voluptates qtokenem dolorem amet
            necessitatibus at! Nemo mollitia illum rem tempore autem fuga unde esse suscipit harum dicta pariatur quae aspernatur eius cumque odit, adipisci consequatur illo nam ea magnam dignissimos.
            Atque amet eos suscipit consequatur illum animi obcaecati eveniet temporibus, quaerat rem repellat fuga maxime similique, ratione consequuntur facilis asperiores ut. Ad nemo rem et dolor
            ipsum eligendi, ducimus minima exercitationem quam expedita voluptatibus iste. Pariatur nemo sequi sunt sed aspernatur vero facere, architecto omnis nulla eligendi culpa quibusdam?
          </p>
        </section>
      );
    } else if (this.state.designation === "Guest") {
      return (
        <section>
          <Typography variant="h1" component="h2">
            I am Guest Member Dashboard
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto commodi non, neque reprehenderit aut ipsam aperiam doloremque adipisci rem voluptates qtokenem dolorem amet
            necessitatibus at! Nemo mollitia illum rem tempore autem fuga unde esse suscipit harum dicta pariatur quae aspernatur eius cumque odit, adipisci consequatur illo nam ea magnam dignissimos.
            Atque amet eos suscipit consequatur illum animi obcaecati eveniet temporibus, quaerat rem repellat fuga maxime similique, ratione consequuntur facilis asperiores ut. Ad nemo rem et dolor
            ipsum eligendi, ducimus minima exercitationem quam expedita voluptatibus iste. Pariatur nemo sequi sunt sed aspernatur vero facere, architecto omnis nulla eligendi culpa quibusdam?
          </p>
        </section>
      );
    } else if (this.state.designation === "Family") {
      return (
        <section>
          <Typography variant="h1" component="h2">
            I am Family member Dashboard
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto commodi non, neque reprehenderit aut ipsam aperiam doloremque adipisci rem voluptates qtokenem dolorem amet
            necessitatibus at! Nemo mollitia illum rem tempore autem fuga unde esse suscipit harum dicta pariatur quae aspernatur eius cumque odit, adipisci consequatur illo nam ea magnam dignissimos.
            Atque amet eos suscipit consequatur illum animi obcaecati eveniet temporibus, quaerat rem repellat fuga maxime similique, ratione consequuntur facilis asperiores ut. Ad nemo rem et dolor
            ipsum eligendi, ducimus minima exercitationem quam expedita voluptatibus iste. Pariatur nemo sequi sunt sed aspernatur vero facere, architecto omnis nulla eligendi culpa quibusdam?
          </p>
        </section>
      );
    } else
      return (
        <Typography variant="h1" component="h2">
          Sorry ! I can not understand your designation.
        </Typography>
      );
  }
}
Dashboard.propTypes = {};

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired
// };
export default withStyles(styles)(Dashboard);

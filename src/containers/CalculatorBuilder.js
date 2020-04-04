import React, { Component } from "react";
import Title from "../components/Title";
import { withStyles } from "@material-ui/core/styles";
import OutputScreen from "../components/OutputScreen";
import ButtonGrid from "../components/ButtonGrid";
import { Card, CardContent } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import PropTypes from "prop-types";

const styles = (theme) => ({
  root: {
    margin: "auto",
    float: "center",
    marginTop: "8%",
    display: "flex",
    flexWrap: "no-wrap",
    marginLeft: "40%",
  },
  cardContent: {
    padding: "30px",
  },
});

class CalculatorBuilder extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card elevation={3}>
          <CardContent className={classes.cardContent}>
            <Title title="My Calculator" />
            <OutputScreen output={this.props.ques} />
            <OutputScreen output={this.props.res} placeholder="Your result" />
            <ButtonGrid
              isQuestionEmpty={this.props.ques === ""}
              clearResult={this.props.onClearResult}
              deleteQuestion={this.props.onDeleteQuestion}
              checkResult={this.props.onCheckResult}
              updateQuestion={this.props.onUpdateQuestion}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

CalculatorBuilder.propTupes = {
  classes: PropTypes.object.isRequired,
};

//if you want to access anything from redux state then add it to props
const mapStateToProps = (state) => {
  return {
    ques: state.question,
    res: state.result,
  };
};

//mapping the actions to redux props
const mapDispatchToProps = (dispatch) => {
  return {
    onClearResult: () => dispatch(actions.clearResult()),
    onDeleteQuestion: () => dispatch(actions.deleteQuestion()),
    onCheckResult: () => dispatch(actions.checkResult()),
    onUpdateQuestion: (val) => dispatch(actions.updateQuestion(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CalculatorBuilder));

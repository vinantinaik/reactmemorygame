import React from "react";

class Score extends React.Component {


    render() {
        return (
            <li>
                {this.props.msg } Score : {this.props.score} | Top Score : {this.props.topScore}
              </li>
        )
    }

}

export default Score
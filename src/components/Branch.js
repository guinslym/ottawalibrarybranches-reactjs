import React, {Component} from 'react';

class Branch extends Component {
    render() {
        return (
            <div>
                Branch - {this.props.params.branchID}
            </div>
        );
    }
}

export default Branch;
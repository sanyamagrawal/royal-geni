import React from 'react';
import ReactDataGrid from 'react-data-grid';
import './DataGrid.scss';

class Grid extends React.Component {
    static propTypes = {
        columns: React.PropTypes.object.isRequired,
        rowGetter: React.PropTypes.func.isRequired,
        rowsCount: React.PropTypes.number.isRequired,
        minHeight: React.PropTypes.number
    }

    constructor(props) {
        super(props);
    }

    render() {
      return (
            <ReactDataGrid {...this.props} />
        );
    }
}

export default Grid;

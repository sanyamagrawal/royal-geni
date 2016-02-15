import React from 'react';
import ReactDataGrid from 'react-data-grid';
import './Grid.scss';

class Grid extends React.Component {
    static propTypes = {
        columns: React.PropTypes.object.isRequired,
        rowGetter: React.PropTypes.func.isRequired,
        rowsCount: React.PropTypes.number.isRequired,
        minHeight: React.PropTypes.number,
        onAddFilter: React.PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        const Toolbar = ReactDataGrid.Toolbar;
      return (
            <ReactDataGrid toolbar={<Toolbar enableFilter={true}/>} {...this.props} />
        );
    }
}

export default Grid;

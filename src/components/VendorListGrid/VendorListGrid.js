import React from 'react';
import { Grid } from 'components';

const VendorColumns = [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'occupation',
      name: 'Occupation'
    },
    {
      key: 'label',
      name: 'Name'
    }
  ];

class VendorData extends React.Component {

    static propTypes = {
      data: React.PropTypes.array.isRequired,
      service: React.PropTypes.string.isRequired
    }

  constructor(props) {
    super(props);

    this.state = {
        originalRows: this.props.data,
        filters: {},
        rows: this.props.data.slice(0)
      };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          originalRows: nextProps.data,
          filters: {},
          rows: nextProps.data.slice(0)
      });
  }

  filterRows = (originalRows, filters) => {
    const rows = originalRows.filter((r) => {
      let include = true;
      for (const columnKey in filters) {
        if (filters.hasOwnProperty(columnKey)) {
          const rowValue = r[columnKey].toString().toLowerCase();
          if (rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {
            include = false;
          }
        }
      }
      return include;
    });
    return rows;
  }

  setStateChange(filter) {
      const currentState = this.state;

      if (filter.filterTerm) {
          currentState.filters[filter.columnKey] = filter.filterTerm;
      } else {
          delete currentState.filters[filter.columnKey];
      }

      currentState.rows = this.filterRows(currentState.originalRows, currentState.filters);
      return currentState;
  }

  handleFilterChange = (filter) => {
        this.setState(this.setStateChange.call(this, filter));
    }

    rowGetter = (index) => {
        return this.props.data[index];
    }

    render() {
        const rowsLength = this.state.rows.length;

        return (
            <div>
                <Grid columns = {VendorColumns}
                      rowGetter={this.rowGetter}
                      rowsCount={rowsLength}
                      minHeight={500}
                      onAddFilter = {this.handleFilterChange}
                />
            </div>
        );
    }
}

export default VendorData;

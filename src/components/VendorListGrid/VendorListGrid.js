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
        data: this.props.data
      };
  }

  handleFilter = (column, value, allFilterValues) => {
      // go over all filters and apply them
      let originalData = this.props.data;

      Object.keys(allFilterValues).forEach((name) => {
          const columnFilter = `${allFilterValues[name]}`.toUpperCase();

          if (columnFilter === '') {
              return;
          }

          originalData = originalData.filter((item) => {
              if ((`${item[name]}`).toUpperCase().indexOf(columnFilter) === 0) {
                  return true;
              }
          });
      });

      this.setState({
          data: originalData
        });
    }

    rowGetter = (index) => {
        return this.props.data[index];
    }

    render() {
        const rowsLength = this.props.data.length;

        return (
            <div>
                <Grid columns = {VendorColumns}
                      rowGetter={this.rowGetter}
                      rowsCount={rowsLength}
                      minHeight={500}
                />
            </div>
        );
    }
}

export default VendorData;

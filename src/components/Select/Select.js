import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

class Select extends React.Component {

    static propTypes = {
      options: PropTypes.array.isRequired,
      onSelect: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
      value: PropTypes.any
    }

    constructor(props) {
        super(props);
	}

    render() {
        const { options, onSelect, placeholder='Select A Value', value } = this.props;

        return (
			<div className="section">
				<ReactSelect simpleValue
						value={value}
						placeholder={placeholder}
						options={options}
						onChange={onSelect}
    />
			</div>
		);
	}
}

export default Select;

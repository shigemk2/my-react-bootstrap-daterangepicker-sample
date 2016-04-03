import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import BS from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import cssify from 'cssify';

cssify.byUrl('dist/react-datepicker.min.css');

var HelloWorld = React.createClass({
    getInitialState: function () {
		return {
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: moment().subtract(29, 'days'),
			endDate: moment()
		};
	},
	handleEvent: function (event, picker) {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate
		});
	},
    render: function () {
        return (
			<DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent} onApply={this.props.onApply} >
                <Button style={{width:'220px',fontSize:"12px",height:"32px"}} className="btn-grey btn-ghost">
                    <div className="pull-left"><Glyphicon glyph="calendar" /></div>
                </Button>
            </DateRangePicker>
        );
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);

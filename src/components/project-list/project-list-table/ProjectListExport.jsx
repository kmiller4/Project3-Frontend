// import React, { Component } from 'react';
// import ReactExport from 'react-data-export';
// import axios from 'axios';

// export default class ProjectListExport extends Component {
// 	state = {
// 		projectLists: []
// 	};

// 	componentDidMount = async () => {
// 		let res = await axios.get(
// 			'https://my-json-server.typicode.com/avicuna/talent-portal-mock/projects'
// 		);
// 		this.setState({
// 			projectLists: res.data
// 		});
// 	};

// 	render() {
// 		const ExcelFile = ReactExport.ExcelFile;
// 		const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// 		const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
// 		return (
// 			<div>
// 				<ExcelFile element={<button>Export</button>}>
// 					<ExcelSheet data={this.state.projectLists} name="Projects">
// 						<ExcelColumn label="Project Name" value="project_name" />
// 						<ExcelColumn label="Id" value="id" />
// 						<ExcelColumn label="Start Date" value="start_date" />
// 						<ExcelColumn label="End Date" value="end_date" />
// 						<ExcelColumn label="Project Details" value="project_details" />
// 					</ExcelSheet>
// 				</ExcelFile>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from 'react';
import ReactExport from 'react-data-export';
import axios from 'axios';
import projectList from '../../../assets/project-list.json';
import { Button } from 'reactstrap';

export default class ProjectListExport extends Component {
	render() {
		const ExcelFile = ReactExport.ExcelFile;
		const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
		const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
		return (
			<div>
				<ExcelFile
					element={
						<Button color="secondary" size="sm" block>
							Export All
						</Button>
					}
				>
					<ExcelSheet data={projectList} name="Projects">
						<ExcelColumn label="Project Name" value="project_name" />
						<ExcelColumn label="Id" value="id" />
						<ExcelColumn label="Start Date" value="start_date" />
						<ExcelColumn label="End Date" value="end_date" />
						<ExcelColumn label="Project Details" value="project_details" />
					</ExcelSheet>
				</ExcelFile>
			</div>
		);
	}
}

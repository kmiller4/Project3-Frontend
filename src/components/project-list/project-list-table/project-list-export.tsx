import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { getProjectList } from "../../../actions/info/info.actions";
import ReactExport from "react-data-export";

interface IProps {
  viewRow: number;
  projectList: any[];
  getProjectList: () => any;
}

class ProjectListExport extends React.Component<IProps, any> {
  public componentDidMount() {
    this.props.getProjectList();
  }

  public render() {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    return (
      <div>
        <ExcelFile element={<button>Export</button>}>
          <ExcelSheet data={this.props.projectList} name="Projects">
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

const mapStateToProps = (state: IState) => {
  return {
    projectList: state.info.projectList,
    viewRow: state.info.viewRow
  };
};

const mapDispatchToProps = {
  getProjectList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectListExport);

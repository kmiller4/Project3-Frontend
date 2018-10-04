import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import { getResourceList } from "../../../actions/info/info.actions";
import ReactExport from "react-data-export";

interface IProps {
  viewRow: number;
  projectList: any[];
  getResourceList: () => any;
}

class ResourceListExport extends React.Component<IProps, any> {
  public componentDidMount() {
    this.props.getResourceList();
    console.log(this.props.resourceList);
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
    resourceList: state.info.resourceList
  };
};

const mapDispatchToProps = {
  getResourceList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceListExport);

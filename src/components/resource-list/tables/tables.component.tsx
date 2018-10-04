import * as React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import {
  getResourceList,
  updateTableType
} from "../../../actions/info/info.actions";
import { IState } from "../../../reducers";
<<<<<<< HEAD
// import ResourceListExport from "./resource-list-export";
=======
>>>>>>> fd844b99156e160da704690e80a9139ef5b725ad

interface IProps {
  resourceList: any[];
  tableType: string;
  getResourceList: (text: string) => any;
  updateTableType: (text: string) => any;
}

/**
 * This component displays a table based on associates with the skill passed in the tableType prop
 */

class TablesComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

<<<<<<< HEAD
  public componentDidMount() {
    this.props.getResourceList("UI");
  }

  public render() {
    const resourceEntries: any[] = [];
    if (this.props.resourceList[0] !== null) {
      for (const r of this.props.resourceList) {
        resourceEntries.push(
          <tr key={r.user_id}>
            <td>
              {r.first_name} {r.last_name}
            </td>
            <td>{r.user_id}</td>
            <td>{r.certifications.name}</td>
            <td>{r.project_name}</td>
            <td>{r.grade}</td>
          </tr>
=======
    public render() {
        const resourceEntries: any[] = [];
        if (this.props.resourceList[0] !== null) {
            for (const r of this.props.resourceList) {
                resourceEntries.push(
                    <tr key={r.user_id}>
                        <td>{r.first_name} {r.last_name}</td>
                        <td>{r.user_id}</td>
                        <td>{r.certifications.name}</td>
                        <td>{r.project_name}</td>
                        <td>{r.grade}</td>
                    </tr>
                )
            }
        }
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Associate Name</th>
                        <th>ID</th>
                        <th>Certification</th>
                        <th>Project Details</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {resourceEntries}
                </tbody>
            </Table>
>>>>>>> fd844b99156e160da704690e80a9139ef5b725ad
        );
      }
    }
    return (
      <div>
        {/* <ResourceListExport /> */}
        <Table>
          <thead>
            <tr>
              <th>Associate Name</th>
              <th>ID</th>
              <th>Certification</th>
              <th>Project Details</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>{resourceEntries}</tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    resourceList: state.info.resourceList,
    tableType: state.info.tableType
  };
};

const mapDispatchToProps = {
  getResourceList,
  updateTableType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesComponent);

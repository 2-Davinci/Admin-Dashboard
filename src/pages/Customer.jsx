import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customer = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editting = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 mt-14 md:m-0 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        width="auto"
        dataSource={customersData}
        allowPaging
        enableHover={false}
        allowSorting
        allowKeyboard
        selectionSettings={selectionsettings}
        editSettings={editting}
        toolbar={toolbarOptions}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Selection, Filter, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customer;

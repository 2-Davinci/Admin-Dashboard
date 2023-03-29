import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Search,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
const Employee = () => {
  const toolbarOptions = ["Search"];
  const editting = { allowDeleting: true, allowEditting: true };
  return (
    <div className="dark:bg-[#33373E] m-2 mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employee" />
      <GridComponent
        width="auto"
        dataSource={employeesData}
        allowPaging
        editSettings={editting}
        allowSorting
        allowKeyboard
        toolbar={toolbarOptions}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Toolbar,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            Edit,
            PdfExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employee;

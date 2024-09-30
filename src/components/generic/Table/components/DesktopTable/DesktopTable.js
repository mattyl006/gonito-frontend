import React from 'react';
import TableStyle from '../../styles/TableStyle';
import TableHeader from '../TableHeader/TableHeader';
import TableRowItems from '../TableRowItems/TableRowItems';
import TableRowFooter from "../TableRowFooter/TableRowFooter";

const DesktopTable = (props) => {
  return (
    <TableStyle rowFooter={props.rowFooter}>
      <tbody>
        <TableHeader
          orderedKeys={props.orderedKeys}
          sortByUpdate={props.sortByUpdate}
          tableUpdate={props.tableUpdate}
        />
        {props.elements.map((item, i) => {
          const className = i % 2 === 0 ? 'even' : 'odd';
          return (
              <tr key={`table-row-${i}`} className={`TableStyle__tr ${className}`}>
                  <TableRowItems
                      orderedKeys={props.orderedKeys}
                      subpage={props.subpage}
                      item={item}
                      i={i}
                      users={props.users}
                      setRightsUpdateResult={props.setRightsUpdateResult}
                  />
                  <TableRowFooter
                      deleteItem={() => {
                          props.setItemToHandle(item);
                          props.setDeletePopUp(true);
                      }}
                      editItem={() => {
                          props.setItemToHandle(item);
                          props.setEditPopUp(true);
                      }}
                      subpage={props.subpage}
                      rowFooter={props.rowFooter}
                      item={item}
                      i={i}
                  />
              </tr>
          );
        })}
      </tbody>
    </TableStyle>
  );
};

export default DesktopTable;

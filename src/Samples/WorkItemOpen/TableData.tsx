import * as React from "react";

import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { ISimpleListCell } from "azure-devops-ui/List";
import { MenuItemType } from "azure-devops-ui/Menu";
import { IStatusProps, Status, Statuses, StatusSize } from "azure-devops-ui/Status";
import {
    ColumnMore,
    ColumnSelect,
    ISimpleTableCell,
    renderSimpleCell,
    TableColumnLayout,
} from "azure-devops-ui/Table";
import { css } from "azure-devops-ui/Util";
import { ArrayItemProvider } from "azure-devops-ui/Utilities/Provider";

export interface ITableItem extends ISimpleTableCell {
    label: string;
    content: any;
}
export const fixedRows: ITableItem[] = [
    {
        label: "name",
        content: "John Raspberry"
    },
    {
        label: "Date",
        content: "31.07.2023"
    },
    {
        label: "name",
        content: "John Raspberry"
    },
    {
        label: "name",
        content: "John Raspberry"
    },
    {
        label: "name",
        content: "John Raspberry"
    }

];
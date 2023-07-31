import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import "./WorkItemOpen.scss";

// Azure devOps extensions mají novou dokumentaci, kde mají hezký příklady jednotlivých komponent a jejich použití
// https://developer.microsoft.com/cs-cz/azure-devops/components -- chtělo by si to přečíst a předělat existujicí tabulku na novou
// s použitím nových komponent

// import { Table } from "azure-devops-ui/Table"; // TODO: Replace with Table
// import { Card } from "azure-devops-ui/Card";
import CustomTable from "./FormsComponent";
import { showRootComponent } from "../../Common";

export default class WorkItemOpenContent extends React.Component {

    public state = {
        name: "placeholder"
    };

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        SDK.init();
        SDK.ready().then(() => {
            this.setState({ name: SDK.getUser().name });
        });
    }

    // Obsah stránky zde
    public render(): JSX.Element {
        return (
            <CustomTable name={this.state.name} />
        );
    }
}

showRootComponent(<WorkItemOpenContent />);
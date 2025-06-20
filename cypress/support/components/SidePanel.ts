import { BaseUIObject } from "../core/BaseUIObject";
import { MainMenuItem } from "./MainMenuItem";
import { SidePanelSelectors as S } from "../constants/component/sidepanelConstants";
import { TextField } from "./TextField";


export class SidePanel extends BaseUIObject {

    protected searchBox: TextField;
    protected adminMenu: MainMenuItem;
    protected pimMenu: MainMenuItem;
    protected leaveMenu: MainMenuItem;
    protected timeMenu: MainMenuItem;
    protected recruitmentMenu: MainMenuItem;
    protected myInfoMenu: MainMenuItem;
    protected performanceMenu: MainMenuItem;
    protected dashboardMenu: MainMenuItem;
    protected directoryMenu: MainMenuItem;
    protected maintenanceMenu: MainMenuItem;
    protected claimMenu: MainMenuItem;
    protected buzzMenu: MainMenuItem;

    constructor(selector: string) {
        super(selector);
        this.searchBox = new TextField(S.searchBox);
        this.adminMenu = new MainMenuItem(S.adminMenu);
        this.pimMenu = new MainMenuItem(S.pimMenu);
        this.leaveMenu = new MainMenuItem(S.leaveMenu);
        this.timeMenu = new MainMenuItem(S.timeMenu);
        this.recruitmentMenu = new MainMenuItem(S.recruitmentMenu);
        this.myInfoMenu = new MainMenuItem(S.myDetailsMenu);
        this.performanceMenu = new MainMenuItem(S.performanceMenu);
        this.dashboardMenu = new MainMenuItem(S.dashboardMenu);
        this.directoryMenu = new MainMenuItem(S.directoryMenu);
        this.maintenanceMenu = new MainMenuItem(S.maintenanceMenu);
        this.claimMenu = new MainMenuItem(S.claimMenu);
        this.buzzMenu = new MainMenuItem(S.buzzMenu);
    }
}
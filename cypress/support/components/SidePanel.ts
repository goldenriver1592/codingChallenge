import { BaseUIObject } from "../core/BaseUIObject";
import { MainMenuItem } from "./MainMenuItem";
import { SidePanelSelectors as S, SidePanelMenuLabels } from "../constants/component/sidepanelConstants";
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

    getAllVisibleMenus(): Cypress.Chainable<MainMenuItem[]> {
        return cy.get(S.rootAllMenu)
            .find<HTMLAnchorElement>('li a:visible')
            .then($menus => {
                return Array.from($menus).map((el, idx) => {
                    const itemSelector = `${S.rootAllMenu} li a:eq(${idx})`;
                    return new MainMenuItem(itemSelector);
                })
            })
    }

    getAllVisibleMenuLabels(): Cypress.Chainable<string[]> {
        return this.getAllVisibleMenus().then((menus) => {
            // Start with an empty array in a Cypress chain
            let labelsChain: Cypress.Chainable<string[]> = cy.wrap<string[]>([]);

            // For each MainMenuItem, append its label to the array
            menus.forEach((menu) => {
                labelsChain = labelsChain.then((labels) => {
                    return menu
                        .getLabel()
                        .then((txt) => {
                            labels.push(txt);
                            return labels;
                        });
                });
            });

            // Finally yields Chainable<string[]> with all labels
            return labelsChain;
        });
    }

    getSearchBox() {
        return this.searchBox;
    }

    inputToSearchBox(data: string) {
        return this.getSearchBox().type(data);
    }

    expectedMenusIsVisible(expectedMenu: string[]) {
        this.getAllVisibleMenuLabels().then(labels => {
            expect(labels)
                .to.have.members(expectedMenu)
                .and.to.have.length(expectedMenu.length);
        })
    }

    getExpectedLabel(inputText: string) {
        return SidePanelMenuLabels.filter(label => label.toLowerCase().includes(inputText.toLowerCase()));
    }

    noneOfMenuIsVisible() {
        return cy
            .get(S.rootAllMenu)
            .find('li a:visible')
            .should('have.length', 0);
    }
}
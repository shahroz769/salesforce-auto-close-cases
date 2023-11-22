let interval = 500;
const closeCases = () => {
    console.clear();
    let a = true;
    console.log("Start", a);
    let closeTab = setInterval(() => {
        let closeTabBtn = document.querySelector("#customTab2__item");
        if (closeTabBtn) {
            clearInterval(closeTab);
            closeTabBtn.click();
            let closeReasonDropDown = setInterval(() => {
                let closeReasonDropDownBtn = [
                    ...document.querySelectorAll("[id^='combobox-button-']"),
                ][2];
                if (closeReasonDropDownBtn) {
                    clearInterval(closeReasonDropDown);
                    closeReasonDropDownBtn.click();
                    let selectMenu = setInterval(() => {
                        let selectMenuBtn = document.querySelector(
                            '[data-value="Successful"]'
                        );
                        if (selectMenuBtn) {
                            clearInterval(selectMenu);
                            selectMenuBtn.click();
                            let save = setInterval(() => {
                                let saveBtn = document.querySelector(
                                    'button.slds-button.slds-button_brand[type="button"]'
                                );
                                if (saveBtn) {
                                    clearInterval(save);
                                    if (a) {
                                        a = false;
                                        console.log("End", a);
                                        saveBtn.click();
                                    }
                                    let closeCheck = setInterval(() => {
                                        let closeBar = document.querySelector(
                                            'form.slds-form div[style="color:red; font-size:16px; font-weight:bold; text-align:center"]'
                                        );
                                        if (closeBar) {
                                            clearInterval(closeCheck);
                                            const caseNumElement =
                                                document.querySelector(
                                                    'lightning-formatted-text[slot="outputField"]'
                                                );
                                            const caseNumber =
                                                caseNumElement.textContent.trim();
                                            let buttonsWithTitle =
                                                document.querySelectorAll(
                                                    `button[title="Close ${caseNumber} | Case"]`
                                                );
                                            buttonsWithTitle = [
                                                ...buttonsWithTitle,
                                            ][0];
                                            buttonsWithTitle.click();
                                            closeCases();
                                        }
                                    }, interval);
                                }
                            }, interval);
                        }
                    }, interval);
                }
            }, interval);
        }
    }, interval);
};
closeCases();

///<reference types = "cypress"/>

import CouponsPage from "../pageObjects/CouponsPage";


const couponsPage = new CouponsPage()

class CouponsCommands{

    navigateToCouponsPage() {
        couponsPage.getCouponsPageFromNavBar().click()
        cy.wait(5000)
    }

    clickOnCouponCreateButton() {
        couponsPage.getCreateNewCouponButton().click();
        cy.wait(2000);
    }

    createNewCoupon(couponCode, discountAmount) {
        couponsPage.getCouponsActiveTriggerButton().click()
        couponsPage.getCouponCode().type(couponCode)
        cy.wait(1000);
        couponsPage.getDiscountFixedType().click()
        cy.wait(2000);
        couponsPage.getFixedDiscountAmountField().last().clear({force:true})
        couponsPage.getFixedDiscountAmountField().last().type(discountAmount,{force:true})
        
    }

    clickOnSubmitButtonForCouponCreation() {
        couponsPage.getSubmitButton().click();
        cy.wait(6000);
    }

    verifyCouponCreationSuccess(couponCode) {
        couponsPage.getCouponCodeFromTable().invoke('text').then((actualCouponCode) => {
            actualCouponCode = actualCouponCode.trim()
            expect(actualCouponCode).to.equal(couponCode)
        })
        couponsPage.getCouponStatusFromTable().invoke('text').then((actualCouponStatus) => {
            actualCouponStatus = actualCouponStatus.trim()
            expect(actualCouponStatus).to.equal('Yes')
        }) 
    }
}
export default CouponsCommands
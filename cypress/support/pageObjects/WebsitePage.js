

class WebsitePage{

    getSubscribeBtn(){
        return cy.get('div', { timeout: 10000 }).contains('اشترك الآن');
    }

    getApplyCouponBtn(){
        return cy.get('button[type="button"]').contains('هل لديك كود خصم؟')
    }

    getApplyCouponCodeField(){
        return cy.get('input[data-sentry-element="Input"]')
    }

    getSubmitCouponBtn(){
        return cy.get('div').contains('تطبيق')
    }

    getVerificationOfCouponAplied(){
        return cy.get('p').contains('تم تطبيق الكود')
    }

    getVerificationDiscountWord(){
        return cy.get('span').contains('الخصم')
    }

    getActualPriceBeforeDiscount(){
        return cy.get('span').contains('السعر').siblings('span')
    }

    getAmountOfDiscountAplied(){
        return cy.get('span').contains('الخصم').siblings('span')
    }

    getPriceAfterDiscount(){
        return cy.get('span').contains('المبلغ الاجمالي').siblings('span')
    }

    getVisitWebsiteBtn(){
        return cy.get('a[href^="https://rekaz.dev/"]')
    }

}
export default WebsitePage;
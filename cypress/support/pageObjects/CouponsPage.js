class CouponsPage
{

    getCouponsPageFromNavBar(){
        return cy.get('a[href="/coupons"]').find('span').contains('Coupons');
    }

    getCreateNewCouponButton(){
        return cy.get('a[href="/coupons/create"]').contains('Create');
    }

    getCouponCode(){
        return cy.get('#CouponModel_Code');
    }

    getFixedDiscountAmountField(){
        return cy.get('#CouponModel_DiscountValue');
    }

    getSubmitButton(){
        return cy.get('#btn-submit').contains('Submit');
    }

    getCouponsActiveTriggerButton(){
        return cy.get('#CouponModel_IsActive');
    }

    getDiscountFixedType(){
        return cy.get('span')
        .contains('Fixed')
        .first();
    }

    getCouponCodeFromTable(){
        return cy.get('#CouponTable')
        .find('tr')  
        .eq(1)                 
        .find('td')             
        .eq(1)
        .find('a');
    }

    getCouponStatusFromTable(){
        return cy.get('#CouponTable')
        .find('tr')  
        .eq(1)                 
        .find('td')             
        .eq(5);
    }

    


}
export default CouponsPage;
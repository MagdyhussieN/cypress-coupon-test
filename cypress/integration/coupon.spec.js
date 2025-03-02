import '../support/hooks';
import CouponsCommands from '../support/pageCommands/couponsCommands';


const couponsCommands = new CouponsCommands()


describe('Coupon Test', () => {

    it('create new coupon', () => {
      //navigate to coupons page
      couponsCommands.navigateToCouponsPage();

      //create new coupons
      couponsCommands.clickOnCouponCreateButton();

      // fill coupons details
      cy.fixture('testData').then((data)=>{
        couponsCommands.createNewCoupon(data.couponCode, data.expectedDiscount);
        couponsCommands.clickOnSubmitButtonForCouponCreation();
        couponsCommands.verifyCouponCreationSuccess(data.couponCode)
      })
   
    });
    it('should apply a coupon and verify the discount', ()=>{
        cy.get('a[href^="https://rekaz.dev/"]').invoke('removeAttr', 'target').click();
        cy.origin('https://rekaz.dev/',()=>{
          
            cy.get('div', { timeout: 10000 }).contains('اشترك الآن').click();
            cy.wait(2000);
            cy.get('div').contains('اشترك الآن').click();
            cy.wait(4000);
            cy.get('button[type="button"]').contains('هل لديك كود خصم؟').click();
            cy.fixture('testData').then((data)=>{
                cy.get('input[data-sentry-element="Input"]').type(data.couponCode);
            })
            cy.get('div').contains('تطبيق').click();
            cy.wait(2000);
            cy.get('p').contains('تم تطبيق الكود').should('exist');
            cy.get('span').contains('الخصم').should('exist');

            cy.get('span').contains('السعر').siblings('span').invoke('text').then((price) => {
                price = price.trim();
                const numericPrice = parseInt(price.replace(/\D/g, ''), 10);
                cy.get('span').contains('الخصم').siblings('span').invoke('text').then((discount) => {
                    discount = discount.trim();
                    const numericDiscount = parseInt(discount.replace(/\D/g, ''), 10);
                    cy.fixture('testData').then((data)=>{
                        expect(numericDiscount).to.eq(data.expectedDiscount);
                    })
                    cy.get('span').contains('المبلغ الاجمالي').siblings('span').invoke('text').then((finalPrice) => {
                        finalPrice = finalPrice.trim();
                        const finalPriceNumeric = parseInt(finalPrice.replace(/\D/g, ''), 10);
                        expect(finalPriceNumeric).to.eq(numericPrice - numericDiscount);
                    });
                });
            });
        })
    })
  });
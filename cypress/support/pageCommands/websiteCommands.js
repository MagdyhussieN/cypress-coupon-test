///<reference types = "cypress"/>

import WebsitePage from "../pageObjects/WebsitePage";


const websitePage = new WebsitePage();


const WebsiteCommands={


    navigateToWebsite: () => {
        websitePage.getVisitWebsiteBtn().invoke('removeAttr', 'target').click();
        cy.wait(5000);
    },

    applyToCoupon:()=>{
        cy.origin('https://rekaz.dev/',()=>{
            websitePage.getSubscribeBtn().click();
            cy.wait(2000)
            websitePage.getSubscribeBtn().click();
            websitePage.getApplyCouponBtn().click();
            cy.fixture('testData').then((data)=>{
                websitePage.getApplyCouponCodeField().type(data.couponCode)
                websitePage.getSubmitCouponBtn().click();
                cy.wait(2000);
            })

        })
    },

    verifyCouponAplied:()=>{
        websitePage.getVerificationOfCouponAplied().should('exist');
        websitePage.getVerificationDiscountWord().should('exist');
        websitePage.getActualPriceBeforeDiscount().invoke('text').then((price)=>{
            price = price.trim();
            const numericPrice = parseInt(price.replace(/\D/g, ''), 10);
            websitePage.getAmountOfDiscountAplied().invoke('text').then((discount)=>{
                discount = discount.trim();
                const numericDiscount = parseInt(discount.replace(/\D/g, ''), 10);
                cy.fixture('testData').then((data)=>{
                    expect(numericDiscount).to.eq(data.expectedDiscount);
                })
                websitePage.getPriceAfterDiscount().invoke('text').then((finalPrice)=>{
                    finalPrice = finalPrice.trim();
                    const finalPriceNumeric = parseInt(finalPrice.replace(/\D/g, ''), 10);
                    expect(finalPriceNumeric).to.eq(numericPrice - numericDiscount);
                })
            })
        })
    }
};

export default WebsiteCommands;
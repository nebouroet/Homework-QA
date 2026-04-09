import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Scan', () => {

    test('should have no accessibility violations', async ({ page }) => {
        await page.goto('https://automationteststore.com/');
        waitUntil: 'domcontentloaded';

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 
                'wcag2aa',
                'wcag21a',
                'wcag21aa'              
            ])
            .analyze();

                if (accessibilityScanResults.violations.length > 0) 
                    {console.log(JSON.stringify(accessibilityScanResults.violations, null, 2));}



    expect(accessibilityScanResults.violations).toEqual([]);
});



});
  

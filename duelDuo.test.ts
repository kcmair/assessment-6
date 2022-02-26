
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {bots} = require('./data')


beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

it('All bot cards are displayed when See All Bots button is clicked', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    await seeAll.click()
    const numCards = await driver.findElements(By.xpath('//div[@id="all-bots"]/div'))
    await driver.sleep(1000)
    expect(numCards.length).toBe(bots.length)

})

it('Bots can be added to and removed from a duel', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)
    const addTo = await driver.findElement(By.xpath('//div[@id="choices"]/div[1]/button'))
    await addTo.click()
    await driver.sleep(3000)
    const removeFrom = await driver.findElement(By.xpath('//*[@id="player-duo"]/div/button'))
    await removeFrom.click()
    await driver.sleep(2000)
})
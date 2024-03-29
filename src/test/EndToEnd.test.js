import puppeteer from "puppeteer";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

describe("show/hide an event details", () => {
    let browser;
    let page;
    beforeAll(async () => {
        try {
          jest.setTimeout(30000);
          browser = await puppeteer.launch();
          /* const browser = await puppeteer.launch({
              headless: false,
              slowMo: 250, 
             ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
            });*/
          page = await browser.newPage();
          await page.goto("http://localhost:3000/");
          await page.waitForSelector(".event");
       
            
        } catch (error) {
          console.error(error.message);
          return false;
        }
      });
    afterAll(() => {
        browser.close();
    });

    test("An event element is collapsed by default", async () => {
        const eventDetails = await page.$(".event .event__moreDetails");
        expect(eventDetails).toBeNull();
    });

    test("User can expand an event to see its details", async () => {
        await page.click(".event .event__detailsButton");
        const eventDetails = await page.$(".event .event__moreDetails");
        expect(eventDetails).toBeDefined();
    });

    test("User can collapse an event to hide its details", async () => {
        await page.click(".event .event__detailsButton");
        const eventDetails = await page.$(".event .event__moreDetails");
        expect(eventDetails).toBeNull();
    });
});

describe("Filter events by city.", () => {
    let browser;
    let page;
    beforeAll(async () => {
      try {
        jest.setTimeout(30000);
        browser = await puppeteer.launch();
        /* const browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, 
           ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
          });*/
        page = await browser.newPage();
        await page.goto("http://localhost:3000/");
        await page.waitForSelector(".event");
     
          
      } catch (error) {
        console.error(error.message);
        return false;
      }
    });
    afterAll(() => {
        browser.close();
    });

    test("When user hasn’t searched for a city, show upcoming events from all cities", async () => {
        const countEvents = await page.$$eval(".event", (element) => {
           return  element.length
        });
        expect(countEvents).toBe(mockData.length);
    });
    test("When user hasn’t searched for a city, show upcoming events from all cities.", async () => {
        const events = (await page.$$(".event")).length;
        expect(events).toBe(mockData.length);
      });
    

    test("User should see a list of suggestions when they search for a city", async () => {
        await page.type(".city", "Berlin, Germany", { delay: 200 });
        const countCities = await page.$$eval(".suggestions li", (element) => element.length);
        expect(countCities).toBe(2);
    });

    test("User can select a city from the suggested list", async () => {
        await page.reload();
        // await page.click(".suggestions") ;
        await page.type(".city", "Berlin, Germany", { delay: 200 }); //type slower than user
        await page.click(".suggestions li");
        const countEvents = await page.$$eval(".event", (element) => element.length);
        expect(countEvents).toBe(1);
    });
});
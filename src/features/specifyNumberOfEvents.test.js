import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    let AppWrapper;

    // Feature file has a scenario titled "When user hasn’t specified a number, 32 is the default number.", but no match found in step definitions. Try adding the following code:
    /*test("When user hasn't specified a number, 32 is the default number.", ({
        given,
        and,
        when,
        then,
    }) => {
        given("the user is on the main page of the app", async () => {
            AppWrapper = await mount(<App />);
        });

        when("the user hasn't specified a number of events", () => {
            AppWrapper.update();
        });

        then("the default number of displayed events will be 32 (2 with local test) at once", () => {
            expect(AppWrapper.find(".event")).toHaveLength(2);
        });
    });*/
    test('When user hasn’t specified a number, 32 is the default number', ({ given, and, when, then }) => {
    	given('the main page has been opened', () => {

    	});

    	and('a list of events has been loaded', () => {

    	});

    	when('the user opens the page or scrolls down the list', () => {

    	});

    	then(/^they will only see (\d+) events by default$/, (arg0) => {

    	});
    });

    // Feature file has a scenario titled "User can change the number of events they want to see.", but no match found in step definitions. Try adding the following code:
    /*test("User can change the number of events they want to see.", ({ given, when, then }) => {
        given("a list of events has been loaded", async () => {
            AppWrapper = await mount(<App />);
        });

        when(
            "the user focuses on the label that specifies the number of viewable events",
            () => {
                AppWrapper.update();
                const eventObject = { target: { value: 1 } };
                AppWrapper.find(".numberOfEvents__input").simulate("change", eventObject);
            }
        );

        then("the number of events listed will updated based on the users specified number", () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event")).toHaveLength(1);
        });
    });*/
    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('a list of events has been loaded', () => {

    	});

    	when('the user focuses on the label that specifies the number of viewable events', () => {

    	});

    	then('the number of events listed will updated based on the users specified number', () => {

    	});
    });
});
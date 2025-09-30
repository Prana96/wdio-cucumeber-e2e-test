Feature: Demo feature

    @demo
    #Feature Description
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <searchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>


    Examples:
        | TestID     | searchItem | ExpectedURL             |
        | DEMO_TC001 | WDIO       | https://webdriver.io/"  |
            
            
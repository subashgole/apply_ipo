# apply_ipo
Apply IPO using cypress

In order to use for multiple users, use cypress fixture to store test data for automation. The fixtures folder contains JSON files. The structure for credentials is:
[
    {
        "dp_name": "dpname or code",
        "username": "meroshare login username",
        "password": "Password",
        "needed_kitta": "no of kitta",
        "crn": "crn number",
        "tpin": "transaction pin",
        "company_name": "Not required(We pass company name directly on .cy.js file"
    },
    {
       "dp_name": "dpname or code",
        "username": "meroshare login username",
        "password": "Password",
        "needed_kitta": "no of kitta",
        "crn": "crn number",
        "tpin": "transaction pin",
    }
]

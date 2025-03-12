# apply_ipo
Apply IPO using cypress
- Create a folder 'fixtures' under 'cypress' folder. 
- Create a json file 'credentials.json'

Use cypress fixture to store test data for automation. The fixtures folder contains JSON files. The structure for credentials is:
[
    {
        "dp_name": "dp code",
        "username": "meroshare login username",
        "password": "Password",
        "needed_kitta": "no of kitta",
        "crn": "crn number",
        "tpin": "transaction pin",
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


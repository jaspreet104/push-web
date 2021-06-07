var push = require('web-push');

let vapIdKeys = {
    publicKey: 'BI7qEj2WZiXBBmrRdbtWSTaFvyd5sFUn0U-Ucobcm8imdH1Ws1hAjx0p_Tq37gn3oaCQ93OhjNuYrtG0igF8Ujg',
    privateKey: 'ngWg5QqqpAMKWgKFHItC_2AoZoj7lb9NGnZ4wQEDdAc'
}


push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test msg from push js')

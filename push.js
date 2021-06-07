var push = require('web-push');

let vapIdKeys = {
    publicKey: 'BI7qEj2WZiXBBmrRdbtWSTaFvyd5sFUn0U-Ucobcm8imdH1Ws1hAjx0p_Tq37gn3oaCQ93OhjNuYrtG0igF8Ujg',
    privateKey: 'ngWg5QqqpAMKWgKFHItC_2AoZoj7lb9NGnZ4wQEDdAc'
}


push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {
    "endpoint":
        "https://fcm.googleapis.com/fcm/send/f-DF6iiixsU:APA91bGVmHX8ENfVk_yGiR7wtAPGBA39mpcYrubqco77VurH-jJud4Vq1ScmCOIFBlRcFO4TZBPDKDvhWbA-iGJO6fJX2GMfAMWRnR5a0BWyNJy8H4DKeCZLVew5ByVkCSdT8Fd7-hvx",
    "expirationTime":
        null,
    "keys":{
        "p256dh":
            "BJTmM9DKCR-rk8jOUIbboXz2EYKAzxLVKDTpKEV8qn6ET8VLeA8THOZ_pqCDrgXAay6kMY6dRO7ny6QYCZI20Ho",
        "auth":
            "9jR7RnmNfEW9V5tSm_JANw"
    }
};

push.sendNotification(sub, 'test msg from push js')

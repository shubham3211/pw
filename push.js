const push = require("web-push");
const vapIdKeys = {
  publicKey:
    "BF8fJvIT5SRVZXqr-O5ktOkuvw3TGFlTOPLYYaQTVF_dhbO56b1q5F7JSRjOZ9wr7dCTRCl-3rrN7WffirG9-mI",
  privateKey: "B19tmnXAhxCP5UHG_2KqUC3Jc1w9fjNHFDtpLAyJ8xg",
};

push.setVapidDetails(
  "mailto:kumarsinghshubham32111@gmail.com",
  vapIdKeys.publicKey,
  vapIdKeys.privateKey
);
const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/e7WJ1ZYSTW0:APA91bHHgHqogB3uYf22XzUrcH6v4txg9nEsTOsED-SygeNyleq-CB6iRcYso35iAh8X4OeLUfYeLLWBVWoDZk2Xzte66DfhKyfFPJk6yal3GgT_3-SvWRlGsB1qlnOC8RAX_Q30AKsJ",
  expirationTime: null,
  keys: {
    p256dh:
      "BMimlQoM4Oz0ilmW3M5fyQm8NYTZuRii02K7gFGaruHzwsQXe3gucquD_WDqXDXzKDzAxRuvkOtAgglJrogdHnI",
    auth: "m6hNooyHg9kgD23p43uJsw",
  },
};
push.sendNotification(sub, "test message");

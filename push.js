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
const sub = {};
push.sendNotification(sub, "test message");

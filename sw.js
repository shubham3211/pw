self.addEventListener("push", () => {
  self.registration.showNotification("test message", {});
});

self.addEventListener('push', () => {
    self.registration.sendNotification('test msg from sw js', {})
});

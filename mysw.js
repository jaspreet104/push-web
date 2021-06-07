self.addEventListener('push', () => {
    //self.registration.sendNotification('test msg from sw js', {})
    self.registration.showNotification('hello world')
});

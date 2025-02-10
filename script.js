document.onclick = function() {
    document.body.id = 'leave';
    setTimeout(() => window.location.pathname = '/learn-more', 1000);
}
module.exports = function() {
    return new Promise(function(resolve) {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            return resolve();
        }

        document.addEventListener('DOMContentLoaded', function listener() {
            document.removeEventListener('DOMContentLoaded', listener);
            resolve();
        });
    });
};

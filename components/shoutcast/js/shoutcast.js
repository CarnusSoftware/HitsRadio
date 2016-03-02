$.SHOUTcast({
    host: 'http://176.31.248.14',
    port: 15574,
    interval: 5000,
    stats: function () {
        $('#songtitle').text(this.get('songtitle'));
    }
}).startStats();


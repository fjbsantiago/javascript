(function() {
    
    Players = {
        init: function() {
            this.form = $('#form');
            this.bindEvents();
        },

        bindEvents: function() {
            this.form.on('submit', $.proxy(this.getPlayers, this));
        },

        getPlayers: function(event) {
            event.preventDefault();

            alert(this.form.find('input[type=text]').val());
        }
    }

    Players.init()

})();

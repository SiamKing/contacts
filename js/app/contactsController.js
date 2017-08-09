(function() {
  "use strict"

  angular
    .module('contacts')
    .controller('ContactsController', function ContactsController() {
      var vm = this;

      vm.contacts = [{
        name: 'Bob',
        phone: '01234567890'
      }, {
        name: 'Tim',
        phone: '39334203242'
      }, {
        name: 'Ross',
        phone: '0684059433'
      }]

      vm.removeContact = function(index) {
        this.contacts.splice(index, 1);
      }

      vm.addContact = function(name, phoneNumber) {
        var contact = {name: name, phone: phoneNumber}
        vm.contacts.push(contact);
      }
    })
}())

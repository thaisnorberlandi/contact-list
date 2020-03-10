var app = new Vue ({
    el: '#app',
    data: {
        title:'Contatos',
        contactModal: false,
        contact_name: null,
        contact_email: null,
        contact_phone: null,
        contacts: [{ name: 'Bill Gates', email: 'bill@microsoft.com', phone: '+1 202 555 0191'}]
        },
    methods: {
        addContact () {
            if (this.contact_name != null && this.contact_email != null && this.contact_phone != null) {
                this.contacts.push ({
                    name: this.contact_name,
                    email: this.contact_email,
                    phone: this.contact_phone
                });
                this.contact_name = ''; 
                this.contact_email = '';
                this.contact_phone = ''; 
            }
        },
        deleteContact(arrayItem) {
            let index = this.contacts.indexOf(arrayItem);
            this.contacts.splice(index,1);
        },
    }
});
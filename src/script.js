var app = new Vue ({
    el: '#app',
    data: {
        contactModal: false,
        contact_name: null,
        contact_email: null,
        contact_phone: null,
        contacts: [{ name: 'Bill Gates', email: 'bill@microsoft.com', phone: '+1 202 555 0191'}]
        },
    methods: {
        addContact () {
            if (this.name != null && this.email != null && this.phone != null) {
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
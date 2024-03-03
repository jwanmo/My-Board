class User {
    constructor(email, pswHash, name, street, city, zipcode, country) {
        this.email = email;
        this.pswHash = pswHash;
        this.name = name;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
    }
}

export default User;

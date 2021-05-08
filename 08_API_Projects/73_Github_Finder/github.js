class GitHub {
    constructor() {
        this.clientId = 'c9d9db06d363a4b8fd3d';
        this.clientSecret = '52727b4ffe92d284f1b7ff9a09e19767664235ae';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
class GitHub {
    constructor() {
        this.clientId = 'c9d9db06d363a4b8fd3d';
        this.clientSecret = '52727b4ffe92d284f1b7ff9a09e19767664235ae';
        this.reposCount = 5;
        this.reposSort = `created: asc`;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}
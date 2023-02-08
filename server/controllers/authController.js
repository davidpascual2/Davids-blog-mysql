module.exports = {
    //operations can be directly written in routes but separating them is better
        register (req, res) {
            //check existing user

            //hash password?
        },

        login(req, res) {
            res.json('from controller');
        },

        logout(req, res) {
            res.json('from controller');
        }
    }

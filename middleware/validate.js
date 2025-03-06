const validator = require('../helpers/validate');

const createContact = (req, res, next) => {
    const rules = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        favoriteColor: 'required|string',
        birthday: 'required|date'
    };
    
    validator(req.body, rules, customMessages, (err, status) => {
        if (!status) {
        res.status(412).send({
            success: false,
            message: 'Validation failed',
            data: err
        });
        } else {
            next();
        }
    });
};

const updateContact = (req, res, next) => {
    const rules = {
        firstName: 'string',
        lastName: 'string',
        email: 'email',
        favoriteColor: 'string',
        birthday: 'date'
    };
    
    validator(req.body, rules, customMessages, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

const deleteContact = (req, res, next) => {
    const rules = {
        id: 'required|regex:/^[0-9a-fA-F]{24}$/'
    };
    
    validator(req.params, rules, customMessages, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

module.exports = {
    createContact,
    updateContact,
    deleteContact
};
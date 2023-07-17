const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const sequelize = require('./database/connection.db');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/wallet', require('./routes/wallet.route'));
app.use('/api/service', require('./routes/service.route'));
app.use('/api/owncheck', require('./routes/owncheck.route'));
app.use('/api/check', require('./routes/check.route'));

app.listen(app.get('port'), async () => {
    //console.log('Server on port: ', app.get('port'));
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false}).then(() => {
            let namedb = sequelize.config.database
            console.log(`Connection has been established with '${namedb}-database' successfully.`)
        });
        
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
});
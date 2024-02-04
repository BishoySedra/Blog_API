import { DataTypes } from 'sequelize';
import {sequelize} from '../config/connection.js';

const Blogger = sequelize.define('Blogger', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Blogger;
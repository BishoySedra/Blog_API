import { DataTypes } from 'sequelize';
import {sequelize} from '../config/connection.js';
import Blogger from './blogger.js';

const Article = sequelize.define('Article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

Article.belongsTo(Blogger, { foreignKey: 'blogger_id' });

export default Article;

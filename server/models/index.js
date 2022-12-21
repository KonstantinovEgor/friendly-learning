const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    email: {
        type: DataTypes.STRING, allowNull: false
    },
    password: {
        type: DataTypes.STRING, allowNull: false
    }
});

const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false
    }
});

const BasketDevice = sequelize.define('basket_device', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    device_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    basket_id: {
        type: DataTypes.INTEGER, allowNull: false
    }
});

const Device = sequelize.define('device', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    price: {
        type: DataTypes.STRING, allowNull: false
    },
    rating: {
        type: DataTypes.DOUBLE, allowNull: false
    },
    type_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    brand_id: {
        type: DataTypes.INTEGER, allowNull: false
    }
});

const DeviceInfo = sequelize.define('device_info', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    device_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    title: {
        type: DataTypes.STRING, allowNull: false
    },
    description: {
        type: DataTypes.STRING, allowNull: false
    }
});

const Image = sequelize.define('image', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    device_id: {
        type: DataTypes.INTEGER, allowNull: false
    }
});

const Brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    description: {
        type: DataTypes.STRING, allowNull: false
    }
});

const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    description: {
        type: DataTypes.STRING, allowNull: false
    }
});

const Rating = sequelize.define('rating', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    device_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    rating: {
        type: DataTypes.DOUBLE, allowNull: false
    }
});

User.hasOne(Basket, { foreignKey: 'id' });
Basket.belongsTo(User, { foreignKey: 'user_id' });

Basket.hasMany(BasketDevice, { foreignKey: 'id' });
BasketDevice.belongsTo(Basket, { foreignKey: 'basket_id' });

Device.hasOne(BasketDevice, { foreignKey: 'id' });
BasketDevice.belongsTo(Device, { foreignKey: 'device_id' });

Device.hasMany(DeviceInfo, { foreignKey: 'id' });
DeviceInfo.belongsTo(Device, { foreignKey: 'device_id' });

Device.hasMany(Image, { foreignKey: 'id' });
Image.belongsTo(Device, { foreignKey: 'device_id' });

Brand.hasOne(Device, { foreignKey: 'id' });
Device.belongsTo(Brand, { foreignKey: 'brand_id' });

Type.hasOne(Device, { foreignKey: 'id' });
Device.belongsTo(Type, { foreignKey: 'type_id' });

User.hasMany(Rating, { foreignKey: 'id' });
Rating.belongsTo(User, { foreignKey: 'user_id' });

Device.hasMany(Rating, { foreignKey: 'id' });
Rating.belongsTo(Device, { foreignKey: 'device_id' });

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    DeviceInfo,
    Image,
    Brand,
    Type,
    Rating
};
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1, // Mínimo valor de dificultad (puedes ajustarlo según tus necesidades).
          max: 5, // Máximo valor de dificultad (puedes ajustarlo según tus necesidades).
        },
      },
      duration: {
        type: DataTypes.FLOAT, // Utilizamos FLOAT para representar horas con decimales.
        allowNull: true, // Puede ser nulo si no es aplicable.
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["Summer", "Autumn", "Winter", "Spring"]],
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
    

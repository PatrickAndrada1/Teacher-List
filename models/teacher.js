"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    get formatDate() {
      const date = new Date(this.dob);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("id-ID", options);
    }
    get formatDateAgain() {
      return this.dob.toISOString().substr(0, 10);
    }
    get totalPermanent() {
      let count = 0;
      if (this.status === "permanent") {
        count++;
      }
      return count;
    }
    get totalContract() {
      let count = 0;
      if (this.status === "contract") {
        count++;
      }
      return count;
    }
    get totalMath() {
      let count = 0;
      if (this.subject === "Math") {
        count++;
      }
      return count;
    }
    get totalPhysics() {
      let count = 0;
      if (this.subject === "Physics") {
        count++;
      }
      return count;
    }
    get totalSport() {
      let count = 0;
      if (this.subject === "Sport") {
        count++;
      }
      return count;
    }
    get totalEnglish() {
      let count = 0;
      if (this.subject === "English") {
        count++;
      }
      return count;
    }
    get totalMaster() {
      let count = 0;
      if (this.education === "Master Degree") {
        count++;
      }
      return count;
    }
    get totalBachelor() {
      let count = 0;
      if (this.education === "Bachelor Degree") {
        count++;
      }
      return count;
    }
    get totalDiploma() {
      let count = 0;
      if (this.education === "Diploma Degree") {
        count++;
      }
      return count;
    }
  }
  Teacher.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "name is required" },
          notNull: { msg: "name is required" },
        },
      },
      idCard: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "id card has been registered" },
        validate: {
          notEmpty: { msg: "id card number is required" },
          notNull: { msg: "id card number is required" },
        },
      },
      pob: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "place of birth is required" },
          notNull: { msg: "place of birth is required" },
        },
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "date of birth is required" },
          notNull: { msg: "date of birth is required" },
        },
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "subject is required" },
          notNull: { msg: "subject is required" },
        },
      },
      education: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "education is required" },
          notNull: { msg: "education is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "email is already registered" },
        validate: {
          notEmpty: { msg: "email is required" },
          notNull: { msg: "email is required" },
          isEmail: { msg: "incorrect email format" },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "phone number is required" },
          notNull: { msg: "phone number is required" },
        },
      },
      profilePicture: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "profile picture is required" },
          notNull: { msg: "profile picture is required" },
        },
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  Teacher.beforeCreate((teacher) => {
    if (!teacher.status) {
      teacher.status = "contract";
    }
  });
  return Teacher;
};

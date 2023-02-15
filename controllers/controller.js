const { Teacher, Sequelize } = require("../models");
class Controller {
  static home(req, res) {
    let { name, filter1, filter2, filter3 } = req.query;
    let option = {
      order: [['updatedAt', 'DESC']]
    };
    if (filter1) {
      option.where = { status: filter1 };
    }
    if (filter2) {
      option.where = { subject: filter2 };
    }
    if (filter3) {
      option.where = { education: filter3 };
    }
    if (name) {
      option.where = {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      };
    }
    Teacher.findAll(option)
      .then((result) => {
        let totalCount = {
          permanent: 0,
          contract: 0,
          math: 0,
          physics: 0,
          sport: 0,
          english: 0,
          master: 0,
          bachelor: 0,
          diploma: 0,
        };
        res.render("home", { result, totalCount });
        console.log(result, "<<<< result");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static renderAddTeacher(req, res) {
    let error = req.query.err;
    Teacher.findAll()
      .then((data) => {
        res.render("addTeacher", { data, error });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static handlerAddTeachers(req, res) {
    const {
      name,
      idCard,
      pob,
      dob,
      education,
      email,
      phone,
      subject,
      profilePicture,
    } = req.body;
    console.log(req.body, "<< req.body");
    Teacher.create({
      name,
      idCard,
      pob,
      dob,
      education,
      email,
      phone,
      subject,
      profilePicture,
    })
      .then(() => {
        res.redirect("/teachers");
      })
      .catch((err) => {
        let errMessage = err.errors.map((el) => el.message);
        console.log(err, "<< error adding_Teacher");
        res.redirect(`/teachers/add?err=${errMessage}`);
      });
  }
  static renderEditTeachers(req, res) {
    let error = req.query.err;
    const id = +req.params.id;
    Teacher.findOne({ where: { id: id } })
      .then((data) => {
        res.render("editTeacher", { data, error });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static handlerEditTeachers(req, res) {
    const id = +req.params.id;
    const {
      name,
      idCard,
      pob,
      dob,
      education,
      email,
      phone,
      subject,
      profilePicture,
      status,
    } = req.body;
    Teacher.update(
      {
        name,
        idCard,
        pob,
        dob,
        education,
        email,
        phone,
        subject,
        profilePicture,
        status,
      },
      { where: { id: id } }
    )
      .then(() => {
        res.redirect("/teachers");
      })
      .catch((err) => {
        let errMessage = err.errors.map((el) => el.message);
        console.log(err, "<< error editing_Teacher");
        res.redirect(`/teachers/edit/${id}?err=${errMessage}`);
      });
  }
  static deleteTeachers(req, res) {
    const id = +req.params.id;
    Teacher.destroy({ where: { id: id } })
      .then(() => {
        res.redirect("/teachers");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
module.exports = Controller;

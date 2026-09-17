"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query("SELECT id FROM categories;");

    await queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "Programador Full-Stack JavaScript",
          synopsis: "Aprenda a desenvolver aplicações web completas com JavaScript",
          featured: true,
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dominando a Linguagem Ruby",
          synopsis: "Aprenda a dominar a linguagem Ruby",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Micro-serviços com Node.js",
          synopsis: "Aprenda a usar o Node.js para criar micro-serviços",
          featured: true,
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Criando APIs Profissionais com Ruby on Rails",
          synopsis: "Aprenda a usar o Ruby on Rails para criar APIs profissionais",
          featured: true,
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "TDD na Prática: Testando APIs Node.js",
          synopsis: "Teste APIs com Node.js usando TDD",
          featured: true,
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "TDD na Prática: Testando Aplicações React",
          synopsis: "Teste aplicações React usando TDD",
          featured: true,
          category_id: categories[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Especialista Front-end: Vue.js",
          synopsis: "Vire um especialista em desenvolvimento front-end com Vue.js",
          category_id: categories[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Criando Sites e Apps 3D com Three.js",
          synopsis: "Crie sites e aplicativos 3D interativos usando Three.js",
          category_id: categories[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dominando o Bootstrap 5",
          synopsis: "Bootstrap 5 sem mistérios: aprenda a criar sites responsivos e modernos",
          category_id: categories[1].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Visual Studio Code para Programadores JavaScript",
          synopsis: "Configure seu editor de código Visual Studio Code para programar em JavaScript",
          category_id: categories[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Comandos do Terminal Linux: Um guia Completo",
          synopsis: "Desvende o Linux e domine o terminal com este guia completo de comandos",
          category_id: categories[2].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Comunicação e Trabalho em Equipe",
          synopsis: "Aprenda a trabalhar em equipe e a se comunicar de forma eficaz",
          category_id: categories[3].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Programador Nômade",
          synopsis: "Livro que ensina como ser um programador nômade ",
          featured: true,
          category_id: categories[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "O Guia do Programador Freelancer",
          synopsis: "Guia completo para o profissional freelancer",
          category_id: categories[4].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};

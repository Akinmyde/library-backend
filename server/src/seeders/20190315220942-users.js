module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: '6517a6ea-662b-4eef-ab9f-20f89bd7099c',
      fullname: 'Anayo Olero',
      email: 'anayo@mail.com',
      isadmin: true,
      password: '12345678',
    },
    {
      id: '57c515a1-890d-412f-8ca1-0a5395123dca',
      fullname: 'Ameachi Chuks',
      email: 'chuks@mail.com',
      password: '12345678',
    },
    {
      id: '7142e4ff-366d-46cc-9384-40eadb3b2626',
      fullname: 'Akaniru Victory',
      email: 'niru@mail.com',
      password: '12345678',
    },
    {
      id: 'f5f4f498-6782-44d0-b1a7-347014fadeb8',
      fullname: 'Akinwale Samuel',
      email: 'Samuel@mail.com',
      password: '12345678',
    },
  ]),

};

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed () {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: 'Alice',
      contact: {
        create: {
          phone: '123',
          email: '123@123.com'
        }
      }
    }

  });

  console.log('Customer created', createdCustomer);

  // Add your code here
  const createdMovie = await prisma.movie.create({
    data: {
      title: 'badboys',
      runtimeMins: 120,
      Screening: {
        create: {
          startsAt: new Date()
        }
      }
    }
  })

  console.log('Movie created', createdMovie);

  const createdScreen = await prisma.screen.create({
    data: {
      number: 13,
      Screening: {
        create: {
          startsAt: new Date()
        }
      }
    }
  })

  console.log('Screen created', createdScreen);




  // Don't edit any of the code below this line
  process.exit(0);
}

seed()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  })


// const user = await prisma.user.create({
//     data: {
//         email: 'ariadne@prisma.io',
//         name: 'Ariadne',
//         posts: {
//             create: [
//                 {
//                     title: 'My first day at Prisma',
//                     categories: {
//                         create: {
//                             name: 'Office',
//                         },
//                     },
//                 },
//                 {
//                     title: 'How to connect to a SQLite database',
//                     categories: {
//                         create: [{ name: 'Databases' }, { name: 'Tutorials' }],
//                     },
//                 },
//             ],
//         },
//     },
// })
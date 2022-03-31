const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed () {

  const createdCustomer = await prisma.customer.create({
    data: {
      name: 'Alice'
    }
  });

  const contact = await prisma.contact.create({
    data: {
      phone: '123',
      email: '123@123.com',
      customer: {
        connect: { id: createdCustomer.id }
      }
    }
  })

  console.log('Customer created', createdCustomer);

  // Add your code here

  const createdScreen = await prisma.screen.create({
    data: {
      number: 13
    }
  })

  console.log('Screen created', createdScreen);

  const createdMovie = await prisma.movie.create({
    data: {
      title: 'badboys',
      runtimeMins: 120,
      Screening: {
        create: {
          startsAt: new Date(),
          screen: {
            connect: { id: createdScreen.id }
          }

        }
      }
    }
  })

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date(),
      movie: {
        connect: {
          id: createdMovie.id
        }
      },
      screen: {
        connect: {
          id: createdScreen.id
        }
      }
    }
  })

  console.log('Movie created', createdMovie);

  const createdTicket = await prisma.ticket.create({
    data: {
      customer: {
        connect: { id: createdCustomer.id }
      },
      screening: {
        connect: { id: createdScreening.id }
      }
    }
  })

  console.log('Movie ticket', createdTicket);



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
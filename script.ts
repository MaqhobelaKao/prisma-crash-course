import { prisma } from "./prisma.ts";

async function main() {
    // await prisma.user.deleteMany();
//    const user = await prisma.user.createMany({
//         data: [
//             {
//                 name: "Alice",
//                 email: "alice@gmail.com",
//                 age: 20,
//                 role: "USER"
//             },
//             {
//                 name: "Bob",
//                 email: "bob@gmail.com",
//                 age: 25,
//                 role: "USER"
//             }

//         ]
//     });

    const user = await prisma.user.findUnique({
        where: {
            email: "alice@gmail.com",
        },
        select: {
            id: true,
            name: true,
        }
    })

    console.log(user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
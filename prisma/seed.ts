import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const artist1 = await prisma.artist.upsert({
        where: { email: 'vvgogh@artsy.com', },
        update: {},
        create: {
            name: 'Vincent Van Gogh',
            description: 'Vincent Willem van Gogh was a Dutch Post-Impressionist painter who was not commercially successful during his life, but became one of the most famous figures in Western art history after his death.',
            email: 'vvgogh@artsy.com',
        },
    })

    const artist2 = await prisma.artist.upsert({
        where: { email: 'ppicasso@artsy.com', },
        update: {},
        create: {
            name: 'Vincent Van Gogh',
            description: 'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France.',
            email: 'ppicasso@artsy.com',
        },
    })

    const piece1 = await prisma.piece.upsert({
        where: { title: 'The Old Guitarist', },
        update: {},
        create: {
            title: 'The Old Guitarist',
            artistId: artist1.id,
        },
    })

    const piece2 = await prisma.piece.upsert({
        where: { title: 'The Starry Night', },
        update: {},
        create: {
            title: 'The Starry Night',
            artistId: artist2.id,
        },
    })

    const gallery1 = await prisma.gallery.upsert({
        where: { name: 'Museum of Modern Art' },
        update: {},
        create: {
            name: 'Museum of Modern Art',
            location: 'New York',
        },
    })

    const gallery2 = await prisma.gallery.upsert({
        where: { name: 'Metropolitan Museum of Art' },
        update: {},
        create: {
            name: 'Metropolitan Museum of Art',
            location: 'New York',
        },
    })

    console.log({artist1, artist2, piece1, piece2, gallery1, gallery2})
}

main()
    .catch((e)=> {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

let client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
if (process.env.NODE_ENV === 'production') client = new PrismaClient();
else {
  if (!global.prismadb) global.prismadb = new PrismaClient();
  client = global.prismadb;
}
// const client = global.prismadb || new PrismaClient();
// if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;

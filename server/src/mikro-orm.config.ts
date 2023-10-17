import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'my-reddit-db',
    debug: !__prod__,
    type: 'postgresql',
    allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];

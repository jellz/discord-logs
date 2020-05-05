//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextapp = next({ dev });

export default nextapp;

import {join} from 'path';
import { isDirectory } from './services/file-service.mjs';

const result = isDirectory(join(process.cwd(), 'data'));
console.log('result : ', result);
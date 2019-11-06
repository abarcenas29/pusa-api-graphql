import fs from 'fs'
import path from 'path'
import schema from '../schema'
import { printSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../schema/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote ' + schemaPath);

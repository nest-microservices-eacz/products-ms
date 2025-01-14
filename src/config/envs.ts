import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  HOST: string;
  DATABASE_URL: string;
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  HOST: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  host: envVars.HOST,
  databaseUrl: envVars.DATABASE_URL,
};

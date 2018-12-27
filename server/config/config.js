import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
   use_env_variable: 'DEV_URL'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};

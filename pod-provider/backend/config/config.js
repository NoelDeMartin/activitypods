// Read all .env* files in the root folder and add them to process.env
// See https://github.com/kerimdzhanov/dotenv-flow for more details
require('dotenv-flow').config();

const path = require('path');

module.exports = {
  INSTANCE_NAME: process.env.SEMAPPS_INSTANCE_NAME,
  BASE_URL: process.env.SEMAPPS_HOME_URL,
  PORT: process.env.SEMAPPS_PORT,
  FRONTEND_URL: process.env.SEMAPPS_FRONTEND_URL,
  COLOR_PRIMARY: process.env.SEMAPPS_COLOR_PRIMARY,
  COLOR_SECONDARY: process.env.SEMAPPS_COLOR_SECONDARY,
  DEFAULT_LOCALE: process.env.SEMAPPS_DEFAULT_LOCALE,
  // Fuseki
  SPARQL_ENDPOINT: process.env.SEMAPPS_SPARQL_ENDPOINT,
  JENA_USER: process.env.SEMAPPS_JENA_USER,
  JENA_PASSWORD: process.env.SEMAPPS_JENA_PASSWORD,
  FUSEKI_BASE: process.env.SEMAPPS_FUSEKI_BASE,
  // Redis
  REDIS_CACHE_URL: process.env.SEMAPPS_REDIS_CACHE_URL,
  REDIS_TRANSPORTER_URL: process.env.SEMAPPS_REDIS_TRANSPORTER_URL,
  QUEUE_SERVICE_URL: process.env.SEMAPPS_QUEUE_SERVICE_URL,
  // OIDC Provider
  REDIS_OIDC_PROVIDER_URL: process.env.SEMAPPS_REDIS_OIDC_PROVIDER_URL,
  COOKIE_SECRET: process.env.SEMAPPS_COOKIE_SECRET,
  // Email
  FROM_EMAIL: process.env.SEMAPPS_FROM_EMAIL,
  FROM_NAME: process.env.SEMAPPS_FROM_NAME,
  SMTP_HOST: process.env.SEMAPPS_SMTP_HOST,
  SMTP_PORT: parseInt(process.env.SEMAPPS_SMTP_PORT, 10),
  SMTP_SECURE: process.env.SEMAPPS_SMTP_SECURE === 'true',
  SMTP_USER: process.env.SEMAPPS_SMTP_USER,
  SMTP_PASS: process.env.SEMAPPS_SMTP_PASS,
  // Auth
  AUTH_RESERVED_USER_NAMES: process.env.SEMAPPS_AUTH_RESERVED_USER_NAMES.split(','),
  AUTH_ACCOUNTS_DATASET: process.env.SEMAPPS_AUTH_ACCOUNTS_DATASET,
  // Backup
  BACKUP_COPY_METHOD: process.env.SEMAPPS_BACKUP_COPY_METHOD,
  BACKUP_SERVER_PATH: process.env.SEMAPPS_BACKUP_SERVER_PATH,
  BACKUP_SERVER_HOST: process.env.SEMAPPS_BACKUP_SERVER_HOST,
  BACKUP_SERVER_USER: process.env.SEMAPPS_BACKUP_SERVER_USER,
  BACKUP_SERVER_PASSWORD: process.env.SEMAPPS_BACKUP_SERVER_PASSWORD,
  BACKUP_SERVER_PORT: process.env.SEMAPPS_BACKUP_SERVER_PORT
};

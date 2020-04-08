'use stric';

require('dotenv').config();
const express = require('express');
const pg = require('pg');
const PORT = process.env.PORT || 4000 ;
const app = express();


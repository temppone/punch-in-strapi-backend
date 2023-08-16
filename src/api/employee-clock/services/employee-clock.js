"use strict";

/**
 * employee-clock service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::employee-clock.employee-clock");

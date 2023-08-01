#!/usr/bin/env node

import { program } from "commander";
import { consultar } from "../commands/dolarAPI.js";

program.version("1.0").command("dolar", "Consulta el valor del dolar en pesos argentinos").action(consultar.precio).parse(process.argv);
